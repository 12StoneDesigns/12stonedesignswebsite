import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { readDocxFile } from '../utils/docxReader';

interface BlogContent {
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

// Map of URL slugs to actual file names
const blogFileNames: { [key: string]: string } =   {
    "rebranding-how-to-refresh-your-identity-without-losing-your-core": "Rebranding_ How to Refresh Your Identity Without Losing Your Core",
    "the-art-and-strategy-of-web-design-creating-a-digital-presence-that-lasts": "The Art and Strategy of Web Design_ Creating a Digital Presence That Lasts",
    "the-power-of-purpose-driven-design-building-brands-that-last": "The Power of Purpose-Driven Design_ Building Brands That Last",
    "timeless-branding-designing-for-today-building-for-the-future": "Timeless Branding_ Designing for Today, Building for the Future",
    "why-a-strong-brand-foundation-is-key-to-long-term-success": "Why a Strong Brand Foundation is Key to Long-Term Success"
  };

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        if (!slug || !blogFileNames[slug]) {
          throw new Error('Blog post not found');
        }

        const fileName = blogFileNames[slug];
        const content = await readDocxFile(`/blogs/${fileName}.docx`);
        
        if (!content) {
          throw new Error('Failed to load blog content');
        }

        setBlogContent({
          title: fileName,
          content: content,
          date: 'March 2024',
          readTime: '5 min read',
          category: 'Branding'
        });
      } catch (error) {
        console.error('Error loading blog content:', error);
        setError(error instanceof Error ? error.message : 'Failed to load blog post');
      }
    };

    fetchBlogContent();
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="flex items-center justify-center py-20">
          <div className="text-neon-red text-xl">{error}</div>
        </div>
      </div>
    );
  }

  if (!blogContent) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse text-neon-green text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-neon-green/20 text-neon-green">
                {blogContent.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                {blogContent.title}
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <time>{blogContent.date}</time>
              <span>•</span>
              <span>{blogContent.readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blogContent.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
