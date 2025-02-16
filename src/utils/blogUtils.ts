import { readDocxFile } from './docxReader';

interface BlogMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  filename: string;
}

interface BlogFile {
  title: string;
  filename: string;
  date: string;
  excerpt: string;
  readTime: string;
}

interface BlogPost {
  content: string;
  title: string;
}

async function calculateReadTime(filename: string): Promise<string> {
  try {
    const docxUrl = `/blogs/${filename}`;
    const content = await readDocxFile(docxUrl);
    
    // Strip HTML tags to get just the text
    const text = content.replace(/<[^>]*>/g, '');
    
    // Calculate reading time
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    
    return `${minutes} min read`;
  } catch (error) {
    console.error('Error calculating read time:', error);
    return '3 min read'; // Fallback default
  }
}

function getRandomDate(): string {
  const start = new Date(2024, 0, 1); // January 1, 2024
  const end = new Date(); // Current date
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function getCategoryFromTitle(title: string): string {
  if (title.toLowerCase().includes('design')) return 'Design';
  if (title.toLowerCase().includes('brand')) return 'Branding';
  if (title.toLowerCase().includes('strategy')) return 'Strategy';
  return 'Strategy';
}

// Direct image URLs for each category
const categoryImages = {
  'Design': [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop'
  ],
  'Branding': [
    'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=800&auto=format&fit=crop'
  ],
  'Strategy': [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
  ]
};

function getImageUrlForCategory(category: string, index: number): string {
  const images = categoryImages[category as keyof typeof categoryImages] || categoryImages['Strategy'];
  return images[index % images.length];
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  try {
    const response = await fetch('/blogs/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const files: BlogFile[] = await response.json();
    console.log('Fetched blog files:', files);

    // Process blogs sequentially to calculate accurate read times
    const blogs = await Promise.all(files.map(async (file, index) => {
      const title = file.title.replace(/_/g, ' ');
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const category = getCategoryFromTitle(title);
      
      // Calculate actual read time from full content
      const readTime = await calculateReadTime(file.filename);
      
      const blog = {
        title,
        slug,
        excerpt: file.excerpt.split('\n')[2] || file.excerpt,
        date: getRandomDate(),
        readTime,
        imageUrl: getImageUrlForCategory(category, index),
        category,
        filename: file.filename
      };
      console.log('Processed blog:', blog);
      return blog;
    }));

    // Sort by date (newest first)
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function readBlogPost(id: string): Promise<BlogPost> {
  try {
    const blogs = await getAllBlogs();
    const blog = blogs.find(b => b.slug === id);
    
    if (!blog) {
      throw new Error('Blog post not found');
    }

    const docxUrl = `/blogs/${blog.filename}`;
    console.log('Attempting to read DOCX file:', docxUrl);

    const content = await readDocxFile(docxUrl);

    return {
      content,
      title: blog.title
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    throw error;
  }
}
