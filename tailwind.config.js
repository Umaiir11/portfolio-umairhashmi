/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dev-bg': {
          light: '#ffffff',
          dark: '#0a0a0a'
        },
        'dev-surface': {
          light: '#f8fafc',
          dark: '#111111'
        },
        'dev-card': {
          light: '#ffffff',
          dark: '#1a1a1a'
        },
        'dev-border': {
          light: '#e2e8f0',
          dark: '#333333'
        },
        'dev-text': {
          primary: {
            light: '#1a202c',
            dark: '#f7fafc'
          },
          secondary: {
            light: '#4a5568',
            dark: '#a0aec0'
          },
          accent: {
            light: '#3182ce',
            dark: '#63b3ed'
          }
        },
        'dev-accent': {
          blue: '#3b82f6',
          emerald: '#10b981',
          purple: '#8b5cf6',
          orange: '#f97316'
        }
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'code-flow': 'codeFlow 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        codeFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};