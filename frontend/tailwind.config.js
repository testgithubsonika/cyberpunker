/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colours:{
        primary: '#4CAF50',
        secondary: '#98FB98',
        tertiary: '#228B22',
      }
    },
  },
  plugins: [],
}
//? Use Mint Green (#98FB98) or Fresh Leaf Green (#4CAF50) as your primary color.
// earthy, natural look → Use Forest Green (#228B22) or Olive Green (#6B8E23) with beige or brown accents.
// For contrast → Use a darker green (Forest Green) for buttons and a lighter green (Mint Green) for backgrounds.
// Primary Green (Fresh Leaf Green) – #4CAF50 (Main UI color, buttons, accents)
// Secondary Green (Mint Green) – #98FB98 (Backgrounds, highlights)
// Dark Accent (Forest Green) – #228B22 (Headers, footer, contrast elements)
// Muted Green (Olive Green) – #6B8E23 (Subtle backgrounds, secondary UI elements)
// Complementary Neutral (Beige/Light Cream) – #F5F5DC (Background for a natural feel)