/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}",
    "./html/**/*.{html,js,php}",
    "./*.{html,js,php}",
    "./html/*.{html,js}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat']
    },
    extend: {
      backgroundImage: {
        'bgLogin': "url('/assets/bgLogin.jpg')",
        'capa_lab_cybepunk': "url('/assets/cyberpunk/capa-lab-cyberpunk.png')"
      }
    },
  },
  plugins: [],
}

