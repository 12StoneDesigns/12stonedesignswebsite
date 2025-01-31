import React from 'react';
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

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div id="top">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="brand-development" element={<BrandDevelopment />} />
            <Route path="brand-consulting" element={<BrandConsulting />} />
            <Route path="rebranding" element={<Rebranding />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="web-applications" element={<WebApplications />} />
            <Route path="applications" element={<Applications />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <CookieBanner />
    </>
  );
};

export default App;