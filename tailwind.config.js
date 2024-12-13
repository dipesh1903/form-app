/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
        onSurfacePrimary: "#000000",
        onSurfaceSecondary: "rgba(0, 0, 0, 0.6)",
        onPrimary: "#ffffff",
        secondary: "rgba(245, 245, 245, 0.5)",
        onSecondary: "rgba(0, 0, 0, 0.6)",
        gradientLeft: "#5DE0E6",
        gradientLeftOpaque: "rgba(93, 224, 230, 0.5)",
        gradientRight: "#004AAD",
        gradientRightOpaque: "rgba(0, 74, 173, 0.5)",
        locationBackground: "#D9D9D9"
      },
      fontFamily: {
        sansAlbert: ['sans-albert'],
        sans: ['"sans-albert"', 'sans-serif']
      },
      boxShadow: {
        drawerShadow: '0 -1px 28px -3px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

