/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'log': "url('../src/images/login.avif')",
        'sign': "url('../src/images/signup.avif')",
      },
    },
  },
  plugins: [],
}

