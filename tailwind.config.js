/* eslint-disable semi */
module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
  },
  theme: {
    extend: {
      colors: {
        deitsch: {
          pink: {
            light: '#f00079',
            DEFAULT: '#d6006c',
          },
          purple: {
            DEFAULT: '#7928ca',
          },
        },
      },
    },
  },
  plugins: [],
}
