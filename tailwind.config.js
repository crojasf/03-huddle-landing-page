module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
      },
      fontFamily: {
        sans: [
          '"Open Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        headings: ['Poppins'],
      },
      backgroundImage: {
        'body-sm': "url('../images/bg-mobile.svg')",
        'body-xl': "url('../images/bg-desktop.svg')",
      },
    },
  },
  variants: {},
  plugins: [],
}
