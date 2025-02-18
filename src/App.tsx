/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

import React, { useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/cookie/CookieBanner';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { routes } from './config/routes';
import { initializeEmailJS } from './config/emailjs';
import { useAnalytics } from './hooks/useAnalytics';
import { initPerformanceMonitoring } from './utils/performanceMetrics';
import { initializeUserBehaviorTracking } from './utils/userBehaviorTracking';
import { trackingConfig, HOTJAR_ID, HOTJAR_VERSION } from './config/tracking';

// Lazy load all routes for better initial load time
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const ThankYou = React.lazy(() => import('./pages/ThankYou'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const BrandDevelopment = React.lazy(() => import('./pages/BrandDevelopment'));
const BrandConsulting = React.lazy(() => import('./pages/BrandConsulting'));
const Rebranding = React.lazy(() => import('./pages/Rebranding'));
const WebDesign = React.lazy(() => import('./pages/WebDesign'));
const WebApplications = React.lazy(() => import('./pages/WebApplications'));
const WhyChooseUs = React.lazy(() => import('./pages/WhyChooseUs'));
const Privacy = React.lazy(() => import('./pages/legal/Privacy'));
const Terms = React.lazy(() => import('./pages/legal/Terms'));
const Cookies = React.lazy(() => import('./pages/legal/Cookies'));
const Services = React.lazy(() => import('./pages/Services'));

const App = () => {
  useAnalytics(); // Initialize analytics tracking

  useEffect(() => {
    // Initialize all tracking and monitoring
    initializeEmailJS();
    
    if (trackingConfig.features.performanceMonitoring) {
      initPerformanceMonitoring();
    }
    
    if (trackingConfig.features.userBehaviorTracking) {
      initializeUserBehaviorTracking(HOTJAR_ID, HOTJAR_VERSION);
    }
  }, []);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div id="top">
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } />
            <Route path={routes.about} element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            } />
            <Route path={routes.contact} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } />
            <Route path={routes.blog} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Blog />
              </Suspense>
            } />
            <Route path={routes.blogPost} element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPost />
              </Suspense>
            } />
            <Route path={routes.thankYou} element={
              <Suspense fallback={<LoadingSpinner />}>
                <ThankYou />
              </Suspense>
            } />
            <Route path={routes.services.brandDevelopment} element={
              <Suspense fallback={<LoadingSpinner />}>
                <BrandDevelopment />
              </Suspense>
            } />
            <Route path={routes.services.brandConsulting} element={
              <Suspense fallback={<LoadingSpinner />}>
                <BrandConsulting />
              </Suspense>
            } />
            <Route path={routes.services.rebranding} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Rebranding />
              </Suspense>
            } />
            <Route path={routes.services.webDesign} element={
              <Suspense fallback={<LoadingSpinner />}>
                <WebDesign />
              </Suspense>
            } />
            <Route path={routes.services.webApplications} element={
              <Suspense fallback={<LoadingSpinner />}>
                <WebApplications />
              </Suspense>
            } />
            <Route path={routes.whyChooseUs} element={
              <Suspense fallback={<LoadingSpinner />}>
                <WhyChooseUs />
              </Suspense>
            } />
            <Route path="services" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Services />
              </Suspense>
            } />
            <Route path={routes.legal.privacy} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Privacy />
              </Suspense>
            } />
            <Route path={routes.legal.terms} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Terms />
              </Suspense>
            } />
            <Route path={routes.legal.cookies} element={
              <Suspense fallback={<LoadingSpinner />}>
                <Cookies />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </div>
      <CookieBanner />
    </ErrorBoundary>
  );
};

export default App;
