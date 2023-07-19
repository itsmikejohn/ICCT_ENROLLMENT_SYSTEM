/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "pagCoreBlue": "#003ecf",
        "pagCoreRed": "#e00000",
        "pagCoreBrown": "#a75503",
        "pagCoreWhite": "#dabc94"
      }
    }
  },
  plugins: []
};