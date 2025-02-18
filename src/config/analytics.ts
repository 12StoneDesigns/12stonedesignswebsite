interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

type GTagCommand = 'config' | 'event' | 'js' | 'set';

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 measurement ID

// Initialize Google Analytics
export const initializeGA = (): void => {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: [GTagCommand, ...unknown[]]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: Array<[GTagCommand, ...unknown[]]>;
    gtag: (
      command: GTagCommand,
      ...args: unknown[]
    ) => void;
  }
}
