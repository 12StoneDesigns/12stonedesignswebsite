type MetricName = 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'FCP';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Threshold values based on Google's Core Web Vitals
const thresholds = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 },   // First Input Delay (ms)
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
  FCP: { good: 1800, poor: 3000 }  // First Contentful Paint (ms)
};

// Get rating based on metric value
const getRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= thresholds[name].good) return 'good';
  if (value >= thresholds[name].poor) return 'poor';
  return 'needs-improvement';
};

interface WebVitalsParams {
  event_category: string;
  event_label: string;
  value: number;
  metric_rating: string;
  non_interaction: boolean;
}

// Report performance metrics to Google Analytics
const reportMetricToGA = (metric: PerformanceMetric): void => {
  if (typeof window.gtag !== 'undefined') {
    const params: WebVitalsParams = {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      metric_rating: metric.rating,
      non_interaction: true,
    };
    window.gtag('event', 'web_vitals', params);
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = (): void => {
  if ('PerformanceObserver' in window) {
    // Monitor LCP
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      const metric: PerformanceMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime)
      };
      reportMetricToGA(metric);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor FID
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const fidEntry = entry as FirstInputEntry;
        const metric: PerformanceMetric = {
          name: 'FID',
          value: fidEntry.processingStart - fidEntry.startTime,
          rating: getRating('FID', fidEntry.processingStart - fidEntry.startTime)
        };
        reportMetricToGA(metric);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Monitor CLS
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          const metric: PerformanceMetric = {
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue)
          };
          reportMetricToGA(metric);
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });

    // Monitor TTFB and FCP from navigation timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfb = navigation.responseStart - navigation.requestStart;
        const ttfbMetric: PerformanceMetric = {
          name: 'TTFB',
          value: ttfb,
          rating: getRating('TTFB', ttfb)
        };
        reportMetricToGA(ttfbMetric);

        const paint = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
        if (paint) {
          const fcpMetric: PerformanceMetric = {
            name: 'FCP',
            value: paint.startTime,
            rating: getRating('FCP', paint.startTime)
          };
          reportMetricToGA(fcpMetric);
        }
      }, 0);
    });
  }
};
