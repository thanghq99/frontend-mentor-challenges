/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-step-selector': 'url(/assets/images/bg-sidebar-mobile.svg)',
        'form-step-selector-desktop':
          'url(/assets/images/bg-sidebar-desktop.svg)',
      },
      colors: {
        'light-blue': 'hsl(206, 94%, 87%)',
        'marine-blue': 'hsl(213, 96%, 18%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
