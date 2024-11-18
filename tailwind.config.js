/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "376px",
      md: "576px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},   
    fontFamily:{
      NotoSans:["Noto Sans Elbasan", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"]
    },
    container:{
      center: true,
      padding:"12px",
      md:"32px"
    }
  },
  plugins: [],
}