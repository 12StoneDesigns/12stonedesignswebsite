/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import BrandDevelopment from './pages/BrandDevelopment';
import BrandConsulting from './pages/BrandConsulting';
import Rebranding from './pages/Rebranding';
import WebDesign from './pages/WebDesign';
import WebApplications from './pages/WebApplications';
import Applications from './pages/Applications';
import WhyChooseUs from './pages/WhyChooseUs';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/cookie/CookieBanner';
import Services from './pages/Services';
import { routes } from './config/routes';
import { initializeEmailJS } from './config/emailjs';

const App = () => {
  useEffect(() => {
    initializeEmailJS();
  }, []);

  return (
    <>
      <ScrollToTop />
      <div id="top">
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path={routes.blogPost} element={<BlogPost />} />
            <Route path={routes.thankYou} element={<ThankYou />} />
            <Route path={routes.services.brandDevelopment} element={<BrandDevelopment />} />
            <Route path={routes.services.brandConsulting} element={<BrandConsulting />} />
            <Route path={routes.services.rebranding} element={<Rebranding />} />
            <Route path={routes.services.webDesign} element={<WebDesign />} />
            <Route path={routes.services.webApplications} element={<WebApplications />} />
            <Route path={routes.applications} element={<Applications />} />
            <Route path={routes.whyChooseUs} element={<WhyChooseUs />} />
            <Route path="services" element={<Services />} />
            <Route path={routes.legal.privacy} element={<Privacy />} />
            <Route path={routes.legal.terms} element={<Terms />} />
            <Route path={routes.legal.cookies} element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <CookieBanner />
    </>
  );
};

export default App;