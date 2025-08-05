/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-[#7703CC]',
    'bg-[#F0B90B]',
    'bg-[#4E6FEC]',
    'bg-[#6608DE]',
    'bg-[#12AAFF]',
    'bg-[#E84142]',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'grey': 'rgb(117,132,157)',
        'light': '#E2EBFB',
        'grey-23': '#232e42',
        'grey-27': '#273855',
        'grey-75': '#75849d',
        'grey-47': '#475875',
        'green': '#4dbad6',
        'black': '#121526',
        'dark-grey-light': '#2e3c56'
      },
      letterSpacing: {
        'base': '0.03em',
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(90deg, #33ff9b, #0cf)',
      },
    },
  },
  plugins: [],
}

// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
