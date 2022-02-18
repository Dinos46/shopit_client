module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bl: '#1d1a1a',
        bgc: '#f5f5f5',
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
