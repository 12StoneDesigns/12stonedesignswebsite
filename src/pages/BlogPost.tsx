import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';
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
    "the-future-of-branding-how-ai-is-changing-the-way-we-build-identities": "The Future of Branding_ How AI is Changing the Way We Build Identities",
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
    <main className="min-h-screen text-white relative">
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.3'
        }}
      />
      <div className="fixed inset-0 w-full h-full z-10 bg-black/50" />
      
      <div className="relative z-20">
        <div className="min-h-[80vh] pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className={`${typography.buttonSecondary} inline-flex items-center mb-12`}
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            <article>
              <div className="mb-8">
                <span className={`${typography.caption} text-neon-green`}>
                  {blogContent.category}
                </span>
                <time className={`${typography.caption} ml-4`}>
                  {blogContent.date}
                </time>
              </div>

              <h1 className={`${typography.h1} mb-16`}>
                <span className={typography.gradient}>
                  {blogContent.title}
                </span>
              </h1>

              <div 
                className={`${typography.body} text-gray-300 leading-relaxed space-y-6`}
                dangerouslySetInnerHTML={{ __html: blogContent.content }}
              />
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPost;
