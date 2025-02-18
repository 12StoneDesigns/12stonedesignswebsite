import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeGA, trackPageView } from '../config/analytics';

export const useAnalytics = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first render
    initializeGA();
  }, []);

  useEffect(() => {
    // Track page views when location changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};
