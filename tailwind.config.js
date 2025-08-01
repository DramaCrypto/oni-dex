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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
