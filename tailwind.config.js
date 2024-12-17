/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'Header': "url('../assets/img/Header.png')",
        '1stProject': "url('../assets/img/Project1.jpeg')",
        '2ndProject': "url('../assets/img/Project2.jpeg')",
        '3rdProject': "url('../assets/img/Project3.jpeg')",
        '4thProject': "url('../assets/img/Project4.jpeg')",
        '5thProject': "url('../assets/img/Project5.jpeg')",
        '6thProject': "url('../assets/img/Project6.jpeg')",
      },      
    },
  },
  plugins: [],
}