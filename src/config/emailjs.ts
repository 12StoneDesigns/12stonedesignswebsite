import { init } from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'IJnLLOcbTaATPZXBa',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lw4wf7j',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ml9tky7'
} as const;

// Initialize EmailJS
export const initializeEmailJS = () => {
  init(EMAILJS_CONFIG.PUBLIC_KEY);
};
