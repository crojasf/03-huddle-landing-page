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
      backgroundImage: {
        'body-sm': "url('../images/bg-mobile.svg')",
        'body-xl': "url('../images/bg-desktop.svg')",
      },
    },
  },
  variants: {},
  plugins: [],
}
