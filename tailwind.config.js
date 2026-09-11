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
        mining: {
          darkest: '#080d1a',
          dark: '#0f172a',
          card: 'rgba(15, 23, 42, 0.85)',
          panel: '#131e36',
          border: 'rgba(51, 65, 85, 0.7)',
          accent: '#0284c7',
          cyan: '#06b6d4',
          warning: '#f59e0b',
          danger: '#ef4444',
          success: '#10b981',
          gold: '#eab308',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px -3px rgba(6, 182, 212, 0.4)',
        'glow-red': '0 0 15px -3px rgba(239, 68, 68, 0.5)',
        'glow-amber': '0 0 15px -3px rgba(245, 158, 11, 0.5)',
        'glow-green': '0 0 15px -3px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
