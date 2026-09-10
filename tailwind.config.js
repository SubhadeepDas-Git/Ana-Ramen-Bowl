/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF9',
          100: '#FDF9F3', // Primary base background from reference
          200: '#F4EFEA', // Subtle card background
          300: '#EFE8DE', // Deeper warm cream
          400: '#DFD3C3', // Border shade
          500: '#C9BAA7',
        },
        plum: {
          900: '#231B17',
          800: '#2D241F', // Reference primary text color
          700: '#3D312A',
          600: '#4F4038',
          500: '#6D5F55', // Reference muted text color
          400: '#8A7A6F',
        },
        lavender: {
          100: '#F3EFFF',
          200: '#E2D9FD',
          300: '#C7BCFB',
          400: '#B2A4FF', // Reference ethereal highlight
          500: '#9684F5',
        },
        sage: {
          100: '#EDF6F6',
          200: '#D5EBEC',
          300: '#BCE0E1',
          400: '#A8DADC', // Reference celestial accent
          500: '#7FAFB2',
        },
        blush: {
          100: '#FDF0EE',
          200: '#FBE2DE',
          300: '#F6D6D6',
          400: '#EFA698',
          500: '#D97768',
        },
        yolk: {
          400: '#F4D35E',
          500: '#E9C46A', // Warm ajitama golden highlight
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -1px rgba(45, 36, 31, 0.04), 0 1px 4px -1px rgba(45, 36, 31, 0.02)',
        'warm-md': '0 8px 24px -4px rgba(45, 36, 31, 0.07), 0 4px 8px -2px rgba(45, 36, 31, 0.03)',
        'warm-lg': '0 16px 36px -6px rgba(45, 36, 31, 0.09), 0 6px 12px -3px rgba(45, 36, 31, 0.04)',
        'glow-lavender': '0 0 25px rgba(178, 164, 255, 0.28)',
        'glow-warm': '0 0 30px rgba(233, 196, 106, 0.25)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'steam-rise': 'steamRise 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        steamRise: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.1' },
          '50%': { transform: 'translateY(-20px) scaleX(1.3)', opacity: '0.45' },
          '100%': { transform: 'translateY(-45px) scaleX(1.8)', opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(0.97)' },
        }
      }
    },
  },
  plugins: [],
}