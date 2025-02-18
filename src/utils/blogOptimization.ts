import { readFile } from 'fs/promises';
import path from 'path';

interface BlogPost {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  keywords: string[];
  slug: string;
}

interface ContentCluster {
  topic: string;
  mainPost: string;
  relatedPosts: string[];
  keywords: string[];
}

// Content clusters for better topic organization
export const contentClusters: ContentCluster[] = [
  {
    topic: 'Web Design',
    mainPost: 'The Art and Strategy of Web Design',
    relatedPosts: [
      'User Experience Best Practices',
      'Responsive Design Principles',
      'Web Design Trends'
    ],
    keywords: ['web design', 'UX design', 'responsive design', 'web development']
  },
  {
    topic: 'Branding',
    mainPost: 'Building a Strong Brand Foundation',
    relatedPosts: [
      'Brand Identity Guidelines',
      'Brand Voice Development',
      'Visual Branding Elements'
    ],
    keywords: ['brand development', 'brand identity', 'brand strategy', 'visual branding']
  },
  {
    topic: 'Digital Marketing',
    mainPost: 'Digital Marketing Strategies',
    relatedPosts: [
      'SEO Fundamentals',
      'Content Marketing',
      'Social Media Strategy'
    ],
    keywords: ['digital marketing', 'SEO', 'content strategy', 'social media marketing']
  }
];

// Content calendar template
export const contentCalendar = {
  weekly: [
    {
      day: 'Monday',
      topic: 'Industry News & Trends',
      type: 'News Analysis',
      frequency: 'Weekly'
    },
    {
      day: 'Wednesday',
      topic: 'How-to Guides & Tutorials',
      type: 'Educational',
      frequency: 'Weekly'
    },
    {
      day: 'Friday',
      topic: 'Case Studies & Success Stories',
      type: 'Case Study',
      frequency: 'Weekly'
    }
  ],
  monthly: [
    {
      week: 1,
      topic: 'Web Design Trends',
      type: 'Industry Insight',
      frequency: 'Monthly'
    },
    {
      week: 2,
      topic: 'Branding Tips',
      type: 'Expert Advice',
      frequency: 'Monthly'
    },
    {
      week: 3,
      topic: 'Technology Updates',
      type: 'Technical',
      frequency: 'Monthly'
    },
    {
      week: 4,
      topic: 'Client Success Stories',
      type: 'Case Study',
      frequency: 'Monthly'
    }
  ]
};

// SEO optimization for blog posts
export const optimizeBlogPost = async (post: BlogPost) => {
  // Generate SEO-friendly slug
  post.slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  // Calculate optimal keyword density (1.5%)
  const wordCount = post.content.split(' ').length;
  const recommendedKeywordCount = Math.round(wordCount * 0.015);

  // Generate schema markup for article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.imageUrl,
    'datePublished': post.date,
    'author': {
      '@type': 'Organization',
      'name': '12Stone Designs'
    },
    'publisher': {
      '@type': 'Organization',
      'name': '12Stone Designs',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://12stonedesigns.com/images/12stone-designs-high-resolution-logo.png'
      }
    },
    'keywords': post.keywords.join(', '),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://12stonedesigns.com/blog/${post.slug}`
    }
  };

  return {
    ...post,
    schema: articleSchema,
    seoRecommendations: {
      recommendedKeywordCount,
      currentKeywordCount: post.content.toLowerCase().split(post.keywords[0].toLowerCase()).length - 1,
      titleLength: post.title.length,
      excerptLength: post.excerpt.length,
      hasOptimalTitleLength: post.title.length <= 60,
      hasOptimalExcerptLength: post.excerpt.length >= 150 && post.excerpt.length <= 160
    }
  };
};

// Get related posts based on content clusters
export const getRelatedPosts = (currentPost: BlogPost) => {
  const cluster = contentClusters.find(c => 
    c.keywords.some(keyword => 
      currentPost.keywords.includes(keyword)
    )
  );

  return cluster ? cluster.relatedPosts : [];
};

// Generate internal linking suggestions
export const generateInternalLinks = (content: string, allPosts: BlogPost[]) => {
  const suggestions: { keyword: string; postSlug: string; }[] = [];
  
  allPosts.forEach(post => {
    post.keywords.forEach(keyword => {
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        suggestions.push({
          keyword,
          postSlug: post.slug
        });
      }
    });
  });

  return suggestions;
};
