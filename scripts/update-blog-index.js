/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, '../public/blogs');
const indexFile = path.join(blogsDir, 'index.json');

// Read existing index file if it exists
let existingBlogData = {};
if (fs.existsSync(indexFile)) {
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  existingBlogData = JSON.parse(indexContent).reduce((acc, blog) => {
    acc[blog.filename] = blog.date;
    return acc;
  }, {});
}

// Get all .docx files in the blogs directory
const blogFiles = fs.readdirSync(blogsDir)
  .filter(file => file.endsWith('.docx'))
  .map(filename => {
    return {
      title: filename.replace('.docx', ''),
      filename: filename,
      // Use existing date if available, otherwise use current date
      date: existingBlogData[filename] || new Date().toISOString()
    };
  });

// Write the index file, preserving the order
fs.writeFileSync(indexFile, JSON.stringify(blogFiles, null, 2));
