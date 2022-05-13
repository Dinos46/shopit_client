module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bl: '#1d1a1a',
        bgc: '#2a2a2a',
        wh: '#f5f5f5',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(270px, 1fr))',
        'cart-grid': '1fr 3fr 1fr 1fr',
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}
