/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}



// plugins: [require('@tailwindcss/typography'), require('daisyui')],
//     daisyui: {
//         prefix: 'dy-',
//         themes: ['light']
//     }