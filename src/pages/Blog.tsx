import { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import { getAllBlogs } from '../utils/blogUtils';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogPosts = await getAllBlogs();
        setBlogs(blogPosts);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative">
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
      
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="min-h-[40vh] flex items-center justify-center pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Insights & Articles
            </h1>
            <p className={`${typography.bodyLg} text-[#00F3FF] max-w-2xl mx-auto opacity-90 animate-fade-in`}>
              Discover our latest thoughts on branding, design, and digital transformation.
              Stay updated with industry trends and creative insights.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00F3FF]"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 bg-black/40 backdrop-blur-sm rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300">
              <p className="text-[#00F3FF]">No blog posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  readTime={blog.readTime}
                  imageUrl={blog.imageUrl}
                  category={blog.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;
