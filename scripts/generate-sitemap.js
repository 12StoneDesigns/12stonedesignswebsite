import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blog index
const blogIndexPath = path.join(__dirname, '../public/blogs/index.json');
const blogIndex = JSON.parse(fs.readFileSync(blogIndexPath, 'utf8'));

// Generate sitemap entries for blog posts
const generateBlogEntries = () => {
  return blogIndex.map(post => {
    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `  <url>
    <loc>https://12stonedesigns.com/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
  }).join('\n');
};

// Read existing sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const existingSitemap = fs.readFileSync(sitemapPath, 'utf8');

// Insert blog entries before the closing </urlset> tag
const updatedSitemap = existingSitemap.replace(
  '</urlset>',
  `${generateBlogEntries()}\n</urlset>`
);

// Write updated sitemap
fs.writeFileSync(sitemapPath, updatedSitemap);

console.log('Sitemap updated with blog entries');
