/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['var(--next-bellefair)'],
        'barlow': ['var(--next-barlow)'],
        'barlow-condensed': ['var(--next-barlow-condensed)'],
      },
      transitionDelay: {
        'delay-400': 'transition-delay: 400ms',
      },
      colors: {
        'c-black': '#0B0D17',
        'c-blue': '#D0D6F9',
      },
    },
  },
  plugins: [],
};
