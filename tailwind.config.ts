import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        bg: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          overlay: 'rgba(0, 0, 0, 0.5)',
          hover: '#F3F4F6'
        },
        // Text Colors
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          light: '#6B7280'
        },
        // Border Colors
        border: {
          light: '#E5E7EB',
          main: '#D1D5DB'
        },
        // Button Colors
        button: {
          red: '#CC5500',
          dark: '#111827'
        },
        // Gray Scale
        gray: {
          lightest: '#F9FAFB',
          light: '#F3F4F6',
          medium: '#E5E7EB',
          dark: '#4B5563',
          darkest: '#111827'
        }
      },
      fontFamily: {
        sans: ["Jost", "Arial", "Helvetica", "sans-serif"],
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards', // Add slide-up animation
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'background-shine': {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
