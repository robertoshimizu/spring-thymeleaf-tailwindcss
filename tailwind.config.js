const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/main/resources/templates/**/*.html'],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'taming-thymeleaf-green':'#166538'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
