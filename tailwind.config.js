/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  daisyui: {
    styled: true,
    themes: false,
    darkTheme: "light",
  },
  plugins: [require("daisyui")],
  


  
}