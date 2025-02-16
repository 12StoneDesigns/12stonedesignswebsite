/**
 * @author T. Landon Love
 * @company 12Stone Designs
 * @website 12stonedesigns.com
 * @copyright 2025 12Stone Designs. All rights reserved.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        'background': '1',
        'stars': '2',
        'content': '3',
        'modal': '50',
        'cookie': '9999'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#39FF14', // neon-green
            h1: { color: '#00F3FF' }, // neon-blue
            h2: { color: '#00F3FF' },
            h3: { color: '#00F3FF' },
            h4: { color: '#00F3FF' },
            h5: { color: '#00F3FF' },
            h6: { color: '#00F3FF' },
            strong: { color: '#00F3FF' },
            a: { 
              color: '#00F3FF',
              '&:hover': {
                color: 'rgba(0, 243, 255, 0.8)'
              }
            },
            blockquote: {
              color: '#39FF14',
              borderLeftColor: '#00F3FF'
            },
            code: { color: '#39FF14' },
            'code::before': { color: '#39FF14' },
            'code::after': { color: '#39FF14' },
            pre: { color: '#39FF14', backgroundColor: '#000000' },
            li: { color: '#39FF14' },
            'ul > li::marker': { color: '#00F3FF' },
            'ol > li::marker': { color: '#00F3FF' },
            hr: { borderColor: 'rgba(0, 243, 255, 0.3)' },
            table: { color: '#39FF14' },
            th: { color: '#39FF14' },
            td: { color: '#39FF14' },
            caption: { color: '#39FF14' },
            figcaption: { color: '#39FF14' }
          }
        }
      },
      colors: {
        'neon-green': '#39FF14',
        'neon-blue': '#00F3FF',
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          }
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2339FF14' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
