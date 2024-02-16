/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', "sans-serif"],
      glory: ["glory", "sans-serif"],
      pop: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`,
      roboto: ["Roboto", "sans-serif", "-apple-system", "BlinkMacSystemFont"],
    },

    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      width: {
        "content-lg": "1140px",
        "content-md": "960px",
        "content-sm": "720px",
        profile: "calc(100% + 10px)",
      },
      height: {
        section: "500px",
        profile: "calc(100% + 2px)",
      },
      backgroundImage: {
        church: "url('/src/assets/images/church.jpg')",
        pattern: "url('/src/assets/images/background-pattern.svg')",
        
      },
      margin: {
        login: "auto auto",
      },
      gridTemplateColumns: {
        profile: "auto auto 1fr"
      },
      
    },
  },
  plugins: [],
};
