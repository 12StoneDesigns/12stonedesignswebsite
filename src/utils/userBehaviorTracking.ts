interface HeatmapConfig {
  enabled: boolean;
  sampleRate: number;
  minimumVisitTime: number;
}

interface ScrollDepthConfig {
  enabled: boolean;
  percentages: number[];
}

interface ClickTrackingConfig {
  enabled: boolean;
  elements: string[];
}

// Configuration for user behavior tracking
const trackingConfig = {
  heatmap: {
    enabled: true,
    sampleRate: 100, // Track all users
    minimumVisitTime: 10 // Minimum seconds before tracking starts
  } as HeatmapConfig,
  
  scrollDepth: {
    enabled: true,
    percentages: [25, 50, 75, 100]
  } as ScrollDepthConfig,
  
  clickTracking: {
    enabled: true,
    elements: [
      'button',
      'a',
      '[role="button"]',
      '.clickable'
    ]
  } as ClickTrackingConfig
};

// Initialize Hotjar tracking
export const initializeHotjar = (hjid: string, hjsv: string): void => {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(script);
};

// Track scroll depth
export const initializeScrollDepthTracking = (): void => {
  if (!trackingConfig.scrollDepth.enabled) return;

  let scrollDepths = new Set<number>();
  
  const calculateScrollDepth = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    trackingConfig.scrollDepth.percentages.forEach(percentage => {
      if (scrollPercentage >= percentage && !scrollDepths.has(percentage)) {
        scrollDepths.add(percentage);
        // Report to Google Analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'scroll_depth', {
            event_category: 'User Behavior',
            event_label: `Scrolled ${percentage}%`,
            value: percentage
          });
        }
      }
    });
  };

  window.addEventListener('scroll', calculateScrollDepth, { passive: true });
};

// Track click events
export const initializeClickTracking = (): void => {
  if (!trackingConfig.clickTracking.enabled) return;

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const clickableElement = trackingConfig.clickTracking.elements.some(selector => 
      target.matches(selector)
    );

    if (clickableElement) {
      const elementData = {
        tagName: target.tagName.toLowerCase(),
        className: target.className,
        id: target.id,
        text: target.textContent?.trim().substring(0, 50),
        href: target instanceof HTMLAnchorElement ? target.href : undefined
      };

      // Report to Google Analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'element_click', {
          event_category: 'User Behavior',
          event_label: `${elementData.tagName}${elementData.id ? '#' + elementData.id : ''}`,
          element_data: elementData
        });
      }
    }
  };

  document.addEventListener('click', handleClick);
};

// Initialize mouse movement tracking for heatmap
export const initializeHeatmapTracking = (): void => {
  if (!trackingConfig.heatmap.enabled) return;

  let movements: { x: number; y: number; timestamp: number; }[] = [];
  
  const trackMouseMovement = (event: MouseEvent) => {
    movements.push({
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now()
    });

    // Batch send data every 5 seconds
    if (movements.length >= 100) {
      sendHeatmapData(movements);
      movements = [];
    }
  };

  const sendHeatmapData = (data: typeof movements) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'heatmap_data', {
        event_category: 'User Behavior',
        event_label: 'Mouse Movement',
        movements: data
      });
    }
  };

  // Only track if user stays for minimum time
  setTimeout(() => {
    document.addEventListener('mousemove', trackMouseMovement, { passive: true });
  }, trackingConfig.heatmap.minimumVisitTime * 1000);
};

// Initialize all tracking
export const initializeUserBehaviorTracking = (hotjarId: string, hotjarVersion: string): void => {
  // Initialize Hotjar
  initializeHotjar(hotjarId, hotjarVersion);
  
  // Initialize scroll depth tracking
  initializeScrollDepthTracking();
  
  // Initialize click tracking
  initializeClickTracking();
  
  // Initialize heatmap tracking
  initializeHeatmapTracking();
};
