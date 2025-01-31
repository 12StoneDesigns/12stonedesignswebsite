import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6 text-neon-green" />,
      title: 'Email',
      content: 'info@12stonedesigns.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-neon-green" />,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: <MapPin className="w-6 h-6 text-neon-green" />,
      title: 'Location',
      content: 'San Francisco, CA'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen text-white relative">
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.3'
        }}
      />
      <div className="fixed inset-0 w-full h-full z-10 bg-black/50" />
      
      <div className="relative z-20">
        <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`${typography.h1} text-center mb-16`}>
              <span className={typography.gradient}>
                Get in Touch
              </span>
            </h1>
            <p className={`${typography.bodyLg} text-center max-w-3xl mx-auto mb-16`}>
              Ready to start your next project? We'd love to hear from you. Get in touch with us and let's create something amazing together.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
              {/* Contact Form */}
              <div className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800">
                <h2 className={`${typography.h4} mb-8`}>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={typography.label}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:border-neon-green text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={typography.label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:border-neon-green text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={typography.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:border-neon-green text-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`${typography.buttonPrimary} w-full justify-center`}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      {info.icon}
                      <div>
                        <h3 className={`${typography.h6} mb-2`}>{info.title}</h3>
                        <p className={typography.body}>{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
