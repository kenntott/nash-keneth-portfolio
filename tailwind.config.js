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
          bg: '#08090C',
          secondary: '#111318',
          card: '#161920',
          border: '#292E38',
          text: '#FFFFFF',
          muted: '#A1A1AA',
          accent: '#00E5A8',
          accentSecondary: '#61DAFB',
        },
        light: {
          bg: '#F8FAFC',
          secondary: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E2E8F0',
          text: '#111827',
          muted: '#64748B',
          accent: '#059669',
          accentSecondary: '#0891B2',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(0, 229, 168, 0.25)',
        'glow-green-sm': '0 0 15px -3px rgba(0, 229, 168, 0.2)',
        'glow-cyan': '0 0 25px -5px rgba(97, 218, 251, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-light': '0 10px 30px -10px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
