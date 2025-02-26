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
        primary: {
          DEFAULT: '#1a1a1a',
          hover: '#333333',
        },
        buttonRed: '#FF0000',
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
