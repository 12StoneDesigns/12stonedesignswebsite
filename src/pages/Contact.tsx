import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

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
      icon: <Mail className="w-6 h-6 text-[#00F3FF]" />,
      title: 'Email',
      content: 'info@12stonedesigns.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-[#00F3FF]" />,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00F3FF]" />,
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
    <main className="min-h-screen text-[#00F3FF] bg-black relative">
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
      
      <div className="relative z-20">
        <div className="min-h-[50vh] flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x text-center">
              Get in Touch
            </h1>
            <p className="text-xl text-[#00F3FF] text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              Ready to start your next project? We'd love to hear from you. Get in touch with us and let's create something amazing together.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-fade-in">
              {/* Contact Form */}
              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#00F3FF] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-[#00F3FF] rounded-md focus:outline-none focus:border-[#39FF14] text-[#00F3FF] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#00F3FF] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-[#00F3FF] rounded-md focus:outline-none focus:border-[#39FF14] text-[#00F3FF] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#00F3FF] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/40 border border-[#00F3FF] rounded-md focus:outline-none focus:border-[#39FF14] text-[#00F3FF] transition-colors duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-[#6F00FF] group-hover:text-[#39FF14] transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
                          {info.title}
                        </h3>
                        <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                          {info.content}
                        </p>
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
