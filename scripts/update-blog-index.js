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
    return {
      title: filename.replace('.docx', ''),
      filename: filename,
      date: stats.mtime.toISOString()
    };
  });

// Write the index file
fs.writeFileSync(indexFile, JSON.stringify(blogFiles, null, 2));
