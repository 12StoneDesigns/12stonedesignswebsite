import React from 'react';

const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-invert prose-cyan max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li>Essential cookies: Necessary for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors interact with our website</li>
          <li>Preference cookies: Enable the website to remember your preferences</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
        </p>
      </div>
    </div>
  );
};

export default Cookies;
