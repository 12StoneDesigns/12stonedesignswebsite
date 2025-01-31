import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    "title": "Rebranding: How to Refresh Your Identity Without Losing Your Core",
    "excerpt": "Rebranding: How to Refresh Your Identity Without Losing Your Core\n\nIn today's competitive marketplace, businesses must evolve to stay relevant. This o...",
    "date": "Jan 28, 2025",
    "readTime": "5 min read",
    "imageUrl": "https://picsum.photos/seed/rebranding123/800/600",
    "category": "Branding"
  },
  {
    "title": "The Art and Strategy of Web Design: Creating a Digital Presence That Lasts",
    "excerpt": "The Art and Strategy of Web Design: Creating a Digital Presence That Lasts\n\nIn today's digital-first world, your website is more than just an online b...",
    "date": "Jan 29, 2025",
    "readTime": "5 min read",
    "imageUrl": "https://picsum.photos/seed/webdesign456/800/600",
    "category": "Web Design"
  },
  {
    "title": "The Power of Purpose-Driven Design: Building Brands That Last",
    "excerpt": "The Power of Purpose-Driven Design: Building Brands That Last\n\nIn today's competitive marketplace, standing out is no longer just about being differen...",
    "date": "Jan 28, 2025",
    "readTime": "5 min read",
    "imageUrl": "https://picsum.photos/seed/purpose789/800/600",
    "category": "Branding"
  },
  {
    "title": "Timeless Branding: Designing for Today, Building for the Future",
    "excerpt": "Timeless Branding: Designing for Today, Building for the Future\n\nIn a world where trends rise and fall at lightning speed, it's easy to get caught up...",
    "date": "Jan 28, 2025",
    "readTime": "5 min read",
    "imageUrl": "https://picsum.photos/seed/timeless321/800/600",
    "category": "Branding"
  },
  {
    "title": "Why a Strong Brand Foundation is Key to Long-Term Success",
    "excerpt": "Why a Strong Brand Foundation is Key to Long-Term Success\n\nIn the fast-paced, ever-changing world of business, trends come and go. It's easy to be swe...",
    "date": "Jan 28, 2025",
    "readTime": "5 min read",
    "imageUrl": "https://picsum.photos/seed/foundation654/800/600",
    "category": "Branding"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Featured Blogs
            </span>
          </h2>
          <p className="mt-4 text-gray-400">Insights and strategies for building strong, lasting brands</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;