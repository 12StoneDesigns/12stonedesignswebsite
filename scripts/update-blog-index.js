/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, '../public/blogs');
const indexFile = path.join(blogsDir, 'index.json');

// Read existing index file if it exists
let existingBlogData = {};
if (fs.existsSync(indexFile)) {
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  existingBlogData = JSON.parse(indexContent).reduce((acc, blog) => {
    acc[blog.filename] = {
      date: blog.date,
      excerpt: blog.excerpt,
      readTime: blog.readTime
    };
    return acc;
  }, {});
}

async function extractDocxContent(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  const text = result.value;
  return {
    excerpt: text.slice(0, 150).trim() + '...',
    readTime: Math.ceil(text.trim().split(/\s+/).length / 200) + ' min read'
  };
}

// Get all .docx files in the blogs directory
async function updateBlogIndex() {
  const blogFiles = fs.readdirSync(blogsDir)
    .filter(file => file.endsWith('.docx'));
  
  const blogData = await Promise.all(blogFiles.map(async filename => {
    const existingData = existingBlogData[filename];
    let content = { excerpt: '', readTime: '5 min read' };
    
    try {
      // Always process files to get accurate read times
      content = await extractDocxContent(path.join(blogsDir, filename));
      
      return {
        title: filename.replace('.docx', ''),
        filename: filename,
        date: existingData?.date || new Date().toISOString(),
        excerpt: existingData?.excerpt || content.excerpt,
        readTime: existingData?.readTime || content.readTime
      };
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
      return {
        title: filename.replace('.docx', ''),
        filename: filename,
        date: existingData?.date || new Date().toISOString(),
        excerpt: existingData?.excerpt || 'Click to read more...',
        readTime: existingData?.readTime || '5 min read'
      };
    }
  }));

  // Write the index file
  fs.writeFileSync(indexFile, JSON.stringify(blogData, null, 2));
}

updateBlogIndex().catch(console.error);
