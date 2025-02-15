import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface FormError {
  message: string;
  technical?: string;
}

export const useContactForm = (initialData: ContactFormData = { name: '', email: '', message: '' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<FormError | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    
    setStatus('sending');
    setError(null);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          navigate('/thank-you');
        }, 100);
      } else {
        throw new Error('Unexpected response from EmailJS');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setError({
        message: 'Failed to send message. Please try again later or contact us directly at 12stonedesigns@gmail.com',
        technical: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formData,
    status,
    error,
    handleSubmit,
    handleChange
  };
};
