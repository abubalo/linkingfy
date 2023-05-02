/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(113.28deg, #FF8A00 4.91%, #FF2B68 94.62%)",
      },
      
      colors:{
        primary: "#FF2B68",
        inputColor: "#E8F0FE",
      }
    },

   
  },
  plugins: [],
};
