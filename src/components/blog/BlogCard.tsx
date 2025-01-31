import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

const BlogCard = ({ title, excerpt, date, readTime, imageUrl, category }: BlogCardProps) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return (
    <Link to={`/blog/${slug}`} className="block h-full">
      <article className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-all duration-300 group h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-neon-blue/20 backdrop-blur-sm text-neon-blue rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-green transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 flex-grow line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4 mt-auto">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;