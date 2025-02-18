# 12Stone Designs - Design System Guide

## Table of Contents
1. [Colors](#colors)
2. [Typography](#typography)
3. [Components](#components)
4. [Animations](#animations)
5. [Layout](#layout)
6. [Responsive Design](#responsive-design)

## Colors

### Primary Colors
```css
--primary-purple: #6F00FF;
--primary-cyan: #00F3FF;
--primary-green: #39FF14;
```

### Background Colors
```css
--bg-black: #000000;
--bg-black-40: rgba(0, 0, 0, 0.4);
--bg-black-60: rgba(0, 0, 0, 0.6);
```

### Text Colors
```css
--text-cyan: #00F3FF;
--text-purple: #6F00FF;
--text-green: #39FF14;
```

### Gradients
```css
/* Text Gradient */
background: linear-gradient(to right, #6F00FF, #00F3FF, #39FF14);
background-size: 300% 300%;
background-clip: text;
color: transparent;
animation: gradient-x 15s ease infinite;

/* Background Gradient */
background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
```

## Typography

### Font Families
```css
/* System font stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes
```css
/* Headings */
h1: text-4xl (2.25rem)
h2: text-3xl (1.875rem)
h3: text-2xl (1.5rem)
h4: text-xl (1.25rem)
h5: text-lg (1.125rem)
h6: text-base (1rem)

/* Body Text */
base: text-base (1rem)
small: text-sm (0.875rem)
xs: text-xs (0.75rem)
```

### Font Weights
```css
font-bold: 700
font-semibold: 600
font-medium: 500
font-normal: 400
```

## Components

### Cards
```jsx
// Basic Card Structure
<article className="bg-black/40 backdrop-blur-sm border border-[#00F3FF] 
                    rounded-lg overflow-hidden hover:border-[#39FF14] 
                    transition-all duration-300">
  <div className="p-6">
    {/* Content */}
  </div>
</article>
```

### Buttons
```jsx
// Primary Button
<button className="inline-flex items-center px-6 py-3 rounded-md 
                   text-[#00F3FF] border border-[#00F3FF] 
                   hover:border-[#39FF14] hover:text-[#39FF14] 
                   transition-all duration-300">
  <span className="font-semibold">Button Text</span>
</button>

// Secondary Button
<button className="px-6 py-3 rounded-md bg-[#6F00FF]/20 
                   text-[#6F00FF] border border-[#6F00FF] 
                   hover:bg-[#6F00FF]/30 transition-all duration-300">
  Button Text
</button>
```

### Navigation Links
```jsx
<a className="text-[#00F3FF] hover:text-[#39FF14] 
              transition-colors duration-300">
  Link Text
</a>
```

### Tags/Badges
```jsx
<span className="px-3 py-1 text-sm bg-black/60 backdrop-blur-sm 
                 text-[#39FF14] rounded-full border border-[#39FF14]">
  Tag Text
</span>
```

## Animations

### Gradient Animation
```css
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
}
```

### Hover Transitions
```css
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
```

## Layout

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Section Spacing
```jsx
<section className="py-20 scroll-mt-16">
  {/* Content */}
</section>
```

### Grid Layouts
```jsx
// Basic Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid Items */}
</div>

// Feature Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Feature Items */}
</div>
```

### Flex Layouts
```jsx
// Center Content
<div className="flex items-center justify-center">
  {/* Content */}
</div>

// Space Between
<div className="flex items-center justify-between">
  {/* Content */}
</div>
```

## Responsive Design

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Responsive Text
```css
/* Responsive Heading */
text-3xl sm:text-4xl md:text-5xl

/* Responsive Body Text */
text-base md:text-lg lg:text-xl
```

### Responsive Spacing
```css
/* Padding */
p-4 sm:p-6 lg:p-8

/* Margin */
m-4 sm:m-6 lg:m-8
```

### Responsive Layout
```css
/* Grid Columns */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Container Width */
max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl
```

## Common Patterns

### Glass Effect
```css
.glass-effect {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}
```

### Image Container
```jsx
<div className="relative h-56 overflow-hidden bg-black/40">
  <img
    className="w-full h-full object-cover transition-all duration-500 
               group-hover:scale-110"
    src="image-path.jpg"
    alt="Description"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-gradient-to-t 
                  from-black/60 to-transparent"></div>
</div>
```

### Content Section
```jsx
<section className="py-20 scroll-mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl 
                     bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] 
                     bg-[length:300%_300%] bg-clip-text text-transparent 
                     animate-gradient-x">
        Section Title
      </h2>
      <p className="mt-4 text-[#00F3FF] max-w-2xl mx-auto">
        Section description text
      </p>
    </div>
    
    {/* Section Content */}
  </div>
</section>
```

This design system provides a comprehensive guide for maintaining consistent styling across your portfolio site. Use these patterns and components as building blocks for creating new pages and features while maintaining the same visual identity.
