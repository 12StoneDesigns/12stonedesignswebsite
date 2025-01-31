import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, '../public/blogs');
const blogPostFile = path.join(__dirname, '../src/pages/BlogPost.tsx');
const blogSectionFile = path.join(__dirname, '../src/components/blog/BlogSection.tsx');

// Define specific image queries for each blog to ensure uniqueness
const blogImageQueries = [
  { query: 'rebranding,strategy', sig: 101 },
  { query: 'webdesign,computer', sig: 202 },
  { query: 'purpose,creative', sig: 303 },
  { query: 'timeless,modern', sig: 404 },
  { query: 'foundation,success', sig: 505 }
];

async function extractDocxContent(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  const text = result.value;
  // Get first 150 characters as excerpt
  const excerpt = text.slice(0, 150).trim() + '...';
  return excerpt;
}

async function generateBlogMetadata() {
  // Get all .docx files
  const blogFiles = fs.readdirSync(blogsDir)
    .filter(file => file.endsWith('.docx'));

  // Generate metadata for each blog
  const blogMetadata = await Promise.all(blogFiles.map(async (filename, index) => {
    const stats = fs.statSync(path.join(blogsDir, filename));
    const title = filename.replace('.docx', '');
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const excerpt = await extractDocxContent(path.join(blogsDir, filename));
    
    // Use predefined image query for this blog post
    const imageInfo = blogImageQueries[index % blogImageQueries.length];
    
    return {
      title,
      slug,
      filename,
      excerpt,
      date: new Date(stats.mtime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      imageUrl: `https://source.unsplash.com/featured/?${imageInfo.query}&sig=${imageInfo.sig}`,
      category: title.toLowerCase().includes('web') ? 'Web Design' : 'Branding'
    };
  }));

  // Update BlogSection.tsx with the new metadata
  const blogSectionContent = fs.readFileSync(blogSectionFile, 'utf8');
  const updatedContent = blogSectionContent.replace(
    /const blogPosts =\s*\[([\s\S]*?)\];/,
    `const blogPosts = ${JSON.stringify(blogMetadata.map(blog => ({
      title: blog.title,
      excerpt: blog.excerpt,
      date: blog.date,
      readTime: blog.readTime,
      imageUrl: blog.imageUrl,
      category: blog.category
    })), null, 2)};`
  );
  fs.writeFileSync(blogSectionFile, updatedContent, 'utf8');

  // Update BlogPost.tsx with the new metadata
  let blogPostContent = fs.readFileSync(blogPostFile, 'utf8');
  const blogFileNamesMap = blogMetadata.reduce((acc, blog) => {
    acc[blog.slug] = blog.title;
    return acc;
  }, {});
  
  const blogFileNamesString = JSON.stringify(blogFileNamesMap, null, 2)
    .split('\n')
    .map(line => '  ' + line)
    .join('\n');

  blogPostContent = blogPostContent.replace(
    /const blogFileNames: \{ \[key: string\]: string \} = \{[\s\S]*?\};/,
    `const blogFileNames: { [key: string]: string } = ${blogFileNamesString};`
  );

  fs.writeFileSync(blogPostFile, blogPostContent);
}

generateBlogMetadata().catch(console.error);
