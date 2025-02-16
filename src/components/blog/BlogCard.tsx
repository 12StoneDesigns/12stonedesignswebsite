import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  className?: string;
}

const BlogCard = ({ title, excerpt, date, readTime, imageUrl, category, className }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return (
    <Link to={`/blog/${slug}`} className={`block h-full group ${className}`}>
      <article className="h-full flex flex-col bg-black/40 backdrop-blur-sm rounded-lg border border-[#00F3FF] overflow-hidden transition-all duration-300 hover:border-[#39FF14] hover:transform hover:scale-[1.02]">
        <div className="relative h-56 overflow-hidden bg-black/40">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#00F3FF] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-sm bg-black/60 backdrop-blur-sm text-[#39FF14] rounded-full border border-[#39FF14] transition-colors duration-300 group-hover:border-[#00F3FF] group-hover:text-[#00F3FF] font-medium">
              {category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex flex-col flex-grow p-6 space-y-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
            {title.replace(/_/g, ' ')}
          </h3>
          <p className="text-[#00F3FF] flex-grow opacity-90 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3 text-sm">
            {excerpt}
          </p>
          <div className="flex items-center text-sm space-x-4 text-[#00F3FF] pt-4 border-t border-[#00F3FF]/20">
            <span className="flex items-center group-hover:text-[#39FF14] transition-colors duration-300">
              <Calendar className="w-4 h-4 mr-1 text-[#6F00FF] group-hover:text-[#39FF14]" />
              {date}
            </span>
            <span className="flex items-center group-hover:text-[#39FF14] transition-colors duration-300">
              <Clock className="w-4 h-4 mr-1 text-[#6F00FF] group-hover:text-[#39FF14]" />
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
