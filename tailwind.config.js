/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      'tb': '481px',
      // => @media (min-width: 481px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'pc': '769px',
      // => @media (min-width: 769px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {},
  plugins: []
}
