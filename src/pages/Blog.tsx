import React, { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import { getAllBlogs } from '../utils/blogUtils';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

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
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Insights and strategies for building strong, lasting brands. Discover our latest thoughts on branding, design, and digital transformation.
            </p>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-pulse text-neon-green">Loading blogs...</div>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center text-gray-300 py-20">
                No blog posts found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.slug}
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
      </div>
    </main>
  );
};

export default Blog;
