import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { readBlogPost } from '../utils/blogUtils';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (slug) {
        try {
          setLoading(true);
          setError(null);
          const { content: blogContent, title: blogTitle } = await readBlogPost(slug);
          setContent(blogContent);
          setTitle(blogTitle);
        } catch (error) {
          console.error('Error loading blog post:', error);
          setError('Failed to load blog post. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
    };

    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
        <div className="animate-pulse mt-8">
          <div className="h-8 bg-black/40 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-black/40 rounded w-full mb-2"></div>
          <div className="h-4 bg-black/40 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
        <div className="text-red-500 mt-8">
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
      </div>
      
      <article className="container mx-auto px-4 py-8 bg-black/40 backdrop-blur-sm rounded-lg border border-[#00F3FF]">
        <h1 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            {title}
          </span>
        </h1>
        <div 
          className="prose prose-invert prose-cyan max-w-none text-[#00F3FF] prose-headings:text-[#39FF14] prose-a:text-[#6F00FF] hover:prose-a:text-[#39FF14]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </>
  );
};

export default BlogPost;
