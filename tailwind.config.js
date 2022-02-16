module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": `url(${process.env.PUBLIC_URL + "/img/banniere.webp"}`,
      },
      height: {
        "10vh": "10vh",
        "5vh": "5vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      colors: {
        cream: "#F5F2E5",
        kaki: "#5C675E",
        brown: "#A36B5D",
        borderKaki: "#36483B",
      },
      padding: {
        "1500px": "1500px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
