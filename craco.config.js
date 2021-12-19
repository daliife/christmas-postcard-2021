// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    theme: {
      extend: {
        colors: {
          primary: '#5c130c',
          secondary: '#5c130c',
          tertiary: '#5c130c',
        }
      }
    }
  }