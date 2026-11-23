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
          bg: '#080808',
          secondary: '#101010',
          card: '#141414',
          cardHover: '#1C1C1C',
          border: '#262626',
          borderHighlight: '#404040',
          text: '#FFFFFF',
          muted: '#A1A1AA',
          accent: '#A78BFA',
          success: '#22C55E',
        },
        light: {
          bg: '#FAFAFA',
          secondary: '#F4F4F5',
          card: '#FFFFFF',
          cardHover: '#F4F4F5',
          border: '#E4E4E7',
          borderHighlight: '#A1A1AA',
          text: '#09090B',
          muted: '#71717A',
          accent: '#7C3AED',
          success: '#16A34A',
        },
        monochrome: {
          950: '#080808',
          900: '#101010',
          850: '#141414',
          800: '#1C1C1C',
          700: '#262626',
          600: '#404040',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#E4E4E7',
          100: '#F4F4F5',
          50: '#FAFAFA',
          accent: '#A78BFA',
          success: '#22C55E',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.6)',
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        'spin-very-slow': 'spin 24s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
