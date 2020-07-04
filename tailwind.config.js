const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
};