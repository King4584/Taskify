/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  // Looks inside the src folder for JavaScript and TypeScript files
    "./public/index.html",         // Optionally include this if you are using classes in HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

