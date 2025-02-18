interface ImageDimensions {
  width: number;
  height: number;
}

interface OptimizedImage {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  placeholder: string;
}

// Image size breakpoints for responsive images
export const imageBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Generate descriptive alt text based on image context and filename
export const generateAltText = (
  filename: string,
  context: 'blog' | 'portfolio' | 'service' | 'team' = 'blog'
): string => {
  const cleanName = filename
    .replace(/[-_]/g, ' ')
    .replace(/\.[^/.]+$/, '') // Remove file extension
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const contextMap = {
    blog: 'Blog post illustration about',
    portfolio: 'Project showcase of',
    service: 'Service illustration for',
    team: 'Team member photo of'
  };

  return `${contextMap[context]} ${cleanName}`;
};

// Generate responsive image srcset
export const generateSrcSet = (
  imagePath: string,
  breakpoints: typeof imageBreakpoints = imageBreakpoints
): string => {
  return Object.entries(breakpoints)
    .map(([, width]) => `${imagePath}?w=${width} ${width}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizes = (
  defaultSize: string = '100vw',
  breakpoints: { [key: string]: string } = {
    '(min-width: 1536px)': '1536px',
    '(min-width: 1280px)': '1280px',
    '(min-width: 1024px)': '1024px',
    '(min-width: 768px)': '768px',
    '(min-width: 640px)': '640px'
  }
): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `${breakpoint} ${size}`)
    .concat([defaultSize])
    .join(', ');
};

// Create optimized image component props
export const createOptimizedImage = (
  src: string,
  dimensions: ImageDimensions,
  context: 'blog' | 'portfolio' | 'service' | 'team' = 'blog'
): OptimizedImage => {
  const filename = src.split('/').pop() || '';
  
  return {
    webpSrc: `${src}?format=webp`,
    fallbackSrc: src,
    alt: generateAltText(filename, context),
    width: dimensions.width,
    height: dimensions.height,
    placeholder: `${src}?w=20&blur=true` // Low-quality placeholder
  };
};

// Generate image component
export const generateImageMarkup = (image: OptimizedImage): string => {
  return `
    <picture>
      <source
        srcset="${generateSrcSet(image.webpSrc)}"
        sizes="${generateSizes()}"
        type="image/webp"
      />
      <source
        srcset="${generateSrcSet(image.fallbackSrc)}"
        sizes="${generateSizes()}"
        type="image/jpeg"
      />
      <img
        src="${image.fallbackSrc}"
        alt="${image.alt}"
        width="${image.width}"
        height="${image.height}"
        loading="lazy"
        decoding="async"
        style="background: url(${image.placeholder}) no-repeat center; background-size: cover;"
      />
    </picture>
  `;
};

// React component props interface
export interface OptimizedImageProps extends OptimizedImage {
  className?: string;
  priority?: boolean;
}

// Schema markup for images
export const generateImageSchema = (image: OptimizedImage): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: image.fallbackSrc,
    width: image.width,
    height: image.height,
    caption: image.alt
  };
};
