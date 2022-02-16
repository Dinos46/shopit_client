module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bl: '#2a2626',
        bgc: '#1f1d1d',
        wh: '#f5f5f5'
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extends: {}
  },
  plugins: [],
}
