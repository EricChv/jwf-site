/** @type {import('tailwindcss').Config} */
export default {
  // Sets default dark mode detection to system preference
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      // Defining custom colors using OKLCH
      colors: {
        theme: {
          // Shared Primary Color
          'primary': 'oklch(0.9 0.17 100)',
          
          // Dark Mode Defaults (used when .dark class is active or system is dark)
          'bg-dark': 'oklch(0.1 0 264)',
          'bg-main': 'oklch(0.2 0 264)',
          'bg-light': 'oklch(0.3 0 264)',
          'text': 'oklch(0.96 0 264)',
          'text-muted': 'oklch(0.76 0 264)',

          // Light Mode Overrides (used by default when system is light, or when .dark class is NOT present)
          'light-primary': 'oklch(0.65 0.15 264)',
          'light-bg-dark': 'oklch(0.92 0 264)',
          'light-bg-main': 'oklch(0.96 0 264)',
          'light-bg-light': 'oklch(1 0 264)',
          'light-text': 'oklch(0.15 0 264)',
          'light-text-muted': 'oklch(0.4 0 264)',
        }
      },
      // Define a custom shadow using the OKLCH values
      boxShadow: {
        // This shadow definition attempts to replicate your provided CSS comment
        'theme-s': 'inset 0 1px 2px #ffffff30, 0 1px 2px #00000030, 0 2px 4px #00000015',
      }
    },
  },
  plugins: [],
}