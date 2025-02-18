import React from 'react';
import { OptimizedImageProps, generateSrcSet, generateSizes } from '../utils/imageOptimization';

interface ExtendedOptimizedImageProps extends OptimizedImageProps {
  onLoad?: () => void;
}

const OptimizedImage: React.FC<ExtendedOptimizedImageProps> = ({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  placeholder,
  className = '',
  priority = false,
  onLoad
}) => {
  return (
    <picture>
      <source
        srcSet={generateSrcSet(webpSrc)}
        sizes={generateSizes()}
        type="image/webp"
      />
      <source
        srcSet={generateSrcSet(fallbackSrc)}
        sizes={generateSizes()}
        type="image/jpeg"
      />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        onLoad={onLoad}
        style={{
          background: `url(${placeholder}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
