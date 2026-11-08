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
        // Luxury warm ivory & stone (Light Mode)
        ivory: {
          50: '#fdfcf9',
          100: '#fbfaf7',
          200: '#f5f3ee',
          300: '#eeeae2',
          400: '#e3dfd7',
          500: '#d5cfc4',
          600: '#a8a297',
        },
        // Deep charcoal & obsidian (Dark Mode)
        charcoal: {
          950: '#0a0a0c',
          900: '#0e0e11',
          850: '#131317',
          800: '#18181e',
          700: '#22222a',
          600: '#32323e',
        },
        editorial: {
          dark: '#141416',
          muted: '#767571',
          light: '#f7f6f2',
          lightMuted: '#9e9c96',
          borderLight: '#e4dfd5',
          borderDark: '#232329',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest': '0.15em',
        'luxury': '0.25em',
        'ultra': '0.35em',
      },
    },
  },
  plugins: [],
};
