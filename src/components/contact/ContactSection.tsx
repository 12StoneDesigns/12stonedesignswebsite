import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

const ContactSection = () => {
  const {
    formData,
    status,
    error,
    handleSubmit,
    handleChange
  } = useContactForm();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Have a question or want to work together? Feel free to contact us at{' '}
            <a 
              href="mailto:contact@12stonedesigns.com" 
              className="text-neon-green hover:text-neon-blue transition-colors"
            >
              contact@12stonedesigns.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <User className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Founder</p>
                    <p className="text-white">T. Landon Love</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a 
                      href="tel:(479)407-9839" 
                      className="text-white hover:text-neon-green transition-colors"
                    >
                      (479) 407-9839
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Bella Vista, AR</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href="mailto:contact@12stonedesigns.com" 
                      className="text-white hover:text-neon-green transition-colors"
                    >
                      contact@12stonedesigns.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative p-8 border border-neon-green/20 rounded-lg bg-black/40 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-neon-green focus:ring-neon-green sm:text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-neon-green focus:ring-neon-green sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-neon-green focus:ring-neon-green sm:text-sm"
                    placeholder="Your message here..."
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm bg-red-900/20 p-4 rounded-md border border-red-500">
                    {error.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-neon-green hover:bg-neon-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green transition-colors ${
                    status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;