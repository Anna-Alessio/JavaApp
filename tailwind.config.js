/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class" ,
  theme: {

    fontFamily : {
          "sans" : ["Work Sans","serif"]
    },

    extend: {
      colors: {

        primario:"rgb(249,194,40)",
        secondario:"rgb(71, 71, 71)",
  
  
        // Colori dark mode
        terziario:"rgb(0, 14, 41)",
        quaternario:"rgb(4, 104, 101)"

      }
    
      

    },
  },
  plugins: [],
}

