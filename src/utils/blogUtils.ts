import { join } from 'path';
import mammoth from 'mammoth';

interface BlogMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

interface BlogFile {
  title: string;
  filename: string;
  date: string;
}

async function extractDocxContent(filePath: string): Promise<string> {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    const text = result.value;
    return text.slice(0, 150).trim() + '...';
  } catch (error) {
    console.error('Error extracting content:', error);
    return '';
  }
}

async function calculateReadTime(filePath: string): Promise<string> {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    const text = result.value;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Average reading speed of 200 words per minute
    return `${minutes} min read`;
  } catch (error) {
    console.error('Error calculating read time:', error);
    return '5 min read'; // fallback
  }
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  try {
    // Get the list of blog files directly from the public directory
    const response = await fetch('/blogs/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const files: BlogFile[] = await response.json();

    // Sort files by date first
    const sortedFiles = [...files].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Create blog metadata for each file
    const blogs: Promise<BlogMeta>[] = sortedFiles.map(async (file, index) => {
      const title = file.title;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      // Determine category based on title
      let category = 'Branding';
      if (title.toLowerCase().includes('design')) category = 'Design';
      if (title.toLowerCase().includes('rebrand')) category = 'Strategy';

      // Generate a unique seed based on the title
      const seed = slug.replace(/-/g, '').slice(0, 10);

      const filePath = join('/public/blogs/', file.filename);
      const [excerpt, readTime] = await Promise.all([
        extractDocxContent(filePath),
        calculateReadTime(filePath)
      ]);

      return {
        title,
        slug,
        excerpt,
        date: new Date(file.date).toLocaleDateString('en-US', { 
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        readTime,
        imageUrl: `https://picsum.photos/seed/${seed}${index}/800/600`,
        category
      };
    });

    return Promise.all(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}
