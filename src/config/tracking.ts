// Tracking configuration
export const trackingConfig = {
  // Google Analytics 4 Measurement ID
  ga4Id: 'G-MJD6SF0QTT', // Production GA4 ID

  // Hotjar tracking
  hotjar: {
    id: '5308387', // Hotjar Site ID
    version: '6'
  },

  // Enable/disable features
  features: {
    analytics: true,
    performanceMonitoring: true,
    userBehaviorTracking: true,
    heatmapping: true,
    enhancedMeasurement: true
  },

  // Performance monitoring thresholds
  performance: {
    lcp: 2500, // Largest Contentful Paint threshold (ms)
    fid: 100,  // First Input Delay threshold (ms)
    cls: 0.1,  // Cumulative Layout Shift threshold
    ttfb: 800  // Time to First Byte threshold (ms)
  },

  // Enhanced measurement settings
  enhancedMeasurement: {
    pageViews: true,
    scrolls: true,
    outboundClicks: true,
    siteSearch: true,
    videoEngagement: true,
    formInteractions: true,
    fileDownloads: true
  }
};

// Export individual IDs for convenience
export const GA_MEASUREMENT_ID = trackingConfig.ga4Id;
export const HOTJAR_ID = trackingConfig.hotjar.id;
export const HOTJAR_VERSION = trackingConfig.hotjar.version;

// Validate configuration
const validateConfig = () => {
  if (trackingConfig.features.analytics && GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Please replace the GA4 Measurement ID with your actual ID');
  }

  if (trackingConfig.features.heatmapping && HOTJAR_ID === '0000000') {
    console.warn('Please replace the Hotjar ID with your actual ID');
  }
};

// Run validation in development
if (process.env.NODE_ENV === 'development') {
  validateConfig();
}
