import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { getAllBlogs } from '../../utils/blogUtils';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogPosts(blogs);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
              Featured Blogs
            </span>
          </h2>
          <p className="mt-4 text-gray-400">Insights and strategies for building strong, lasting brands</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.title} 
              {...post} 
              className="group relative p-6 border border-neon-green/20 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
