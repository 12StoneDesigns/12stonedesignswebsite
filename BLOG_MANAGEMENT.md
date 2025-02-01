# Blog Management Guide for 12Stone Designs

This guide explains how to manage blog posts on the 12Stone Designs website. Our blog system is designed to be simple and efficient, automatically handling most of the technical details for you.

## 📝 Quick Start Guide

1. Write your blog post in Microsoft Word
2. Save as .docx in the `/public/blogs/` folder
3. Push to GitHub
4. Done! Your post is live

## 🔍 Detailed Instructions

### Creating a Blog Post

1. **Write Your Content**
   - Use Microsoft Word
   - Include headings, lists, and basic formatting as needed
   - Save as a .docx file
   - Name your file descriptively (this becomes your blog title)
   - Example: `Why a Strong Brand Foundation is Key to Long-Term Success.docx`

2. **Add to Website**
   - Place your .docx file in the `/public/blogs/` directory
   - The filename becomes your blog URL
   - Example: 
     - File: `Why a Strong Brand Foundation is Key to Long-Term Success.docx`
     - URL: `/blog/why-a-strong-brand-foundation-is-key-to-long-term-success`

### Testing Locally

```bash
# Generate blog metadata
npm run generate-blogs

# Start development server
npm run dev
```

This will:
- Process your new blog post
- Create an excerpt
- Assign a featured image
- Update the blog listing
- Make it available at `localhost:3000/blog/[your-post-slug]`

### Publishing

Simply commit and push your changes:
```bash
git add .
git commit -m "Add new blog post: [Your Blog Title]"
git push
```

Vercel will automatically:
- Build the site
- Generate blog metadata
- Deploy your changes
- Make your post live

## 🎨 Blog Features

### Automatic Handling
- ✨ URL-friendly slug generation
- 📝 Excerpt creation (first 150 characters)
- 🖼️ Featured image assignment
- 📱 Mobile-responsive layout
- 🔄 Navigation and routing

### Formatting Support
- **Bold text**
- *Italic text*
- Bullet points
- Numbered lists
- Headings
- Basic Word formatting

## ⚠️ Important Notes

### File Requirements
- Must be in .docx format
- Place files directly in `/public/blogs/`
- Use descriptive filenames
- Avoid special characters in filenames

### Images
- Featured images are automatically assigned
- Images are selected from Unsplash
- Categories: business, branding, design, office, marketing

## 🔧 Troubleshooting

If your blog post isn't appearing:

1. **Check File Location**
   - Ensure the file is in `/public/blogs/`
   - Check the file extension is .docx

2. **Test Locally**
   ```bash
   npm run generate-blogs
   npm run dev
   ```

3. **Check Console**
   - Look for error messages
   - Verify file permissions

4. **Verify Deployment**
   - Check Vercel build logs
   - Ensure changes were pushed to GitHub

## 🆘 Need Help?

If you encounter any issues:
1. Check this guide's troubleshooting section
2. Review the console output
3. Contact the development team

---

<div align="center">
  <p>For technical support, contact the development team</p>
  <p>© 2025 12Stone Designs</p>
</div>
