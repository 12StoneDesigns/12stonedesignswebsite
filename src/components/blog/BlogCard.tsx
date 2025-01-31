import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { typography } from '../../styles/typography';

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
    <Link to={`/blog/${slug}`} className="block h-full group">
      <article className="h-full flex flex-col bg-black/40 backdrop-blur-sm rounded-lg border border-[#00F3FF] overflow-hidden transition-all duration-300 hover:border-[#39FF14] hover:transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-sm bg-black/40 backdrop-blur-sm text-[#39FF14] rounded-full border border-[#39FF14] transition-colors duration-300 group-hover:border-[#00F3FF] group-hover:text-[#00F3FF]">
              {category}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
            {title}
          </h3>
          <p className="text-[#00F3FF] mb-4 flex-grow opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {excerpt}
          </p>
          <div className="flex items-center text-sm space-x-4 text-[#00F3FF] mt-auto">
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