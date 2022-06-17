module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 480px)
        sm: "480px",
      },
      spacing: {
        big: "40rem",
        "1/8": "12.5%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/3": "33.33%",
        "1/2": "50%",
      },
    },
    fontFamily: { nunito: ["Nunito", "sans-serif"] },
  },
  plugins: [],
};
