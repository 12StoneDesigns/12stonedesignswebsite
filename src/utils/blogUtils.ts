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
    const blogs: BlogMeta[] = sortedFiles.map((file, index) => {
      const title = file.title;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      // Determine category based on title
      let category = 'Branding';
      if (title.toLowerCase().includes('design')) category = 'Design';
      if (title.toLowerCase().includes('rebrand')) category = 'Strategy';

      // Generate a unique seed based on the title
      const seed = slug.replace(/-/g, '').slice(0, 10);

      return {
        title,
        slug,
        excerpt: 'Click to read more about ' + title,
        date: new Date(file.date).toLocaleDateString('en-US', { 
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        readTime: '5 min read',
        imageUrl: `https://picsum.photos/seed/${seed}${index}/800/600`,
        category
      };
    });

    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}
