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

// Get all .docx files in the blogs directory
const blogFiles = fs.readdirSync(blogsDir)
  .filter(file => file.endsWith('.docx'))
  .map(filename => {
    const stats = fs.statSync(path.join(blogsDir, filename));
    // Calculate a date within the last month for more realistic blog post dates
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30); // Random day within last 30 days
    const postDate = new Date(today.getTime() - (randomDays * 24 * 60 * 60 * 1000));
    
    return {
      title: filename.replace('.docx', ''),
      filename: filename,
      date: postDate.toISOString()
    };
  });

// Write the index file
fs.writeFileSync(indexFile, JSON.stringify(blogFiles, null, 2));
