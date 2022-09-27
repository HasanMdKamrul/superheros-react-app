/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2690e",
        
"secondary": "#88ea5d",
        
"accent": "#f4e55d",
        
"neutral": "#302631",
        
"base-100": "#F7F6F8",
        
"info": "#ACD6EC",
        
"success": "#186860",
        
"warning": "#FDB35E",
        
"error": "#FB6446",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
