/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Define allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://12stonedesigns.com']
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:4173'];

// Middleware
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Serve static files from the public directory
app.use('/blogs', express.static(path.join(__dirname, '../public/blogs')));

// Add CORS headers specifically for .docx files
app.use('/blogs', (req, res, next) => {
  if (req.path.endsWith('.docx')) {
    res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
