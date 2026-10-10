/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          card: '#131B2E',
          hover: '#1B2640',
          border: '#233152'
        },
        brand: {
          cyan: '#00F2FE',
          blue: '#4FACFE',
          purple: '#7F00FF',
          pink: '#E100FF',
          gold: '#FFD700',
          emerald: '#10B981'
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0,242,254,0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(79,172,254,0.7)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
