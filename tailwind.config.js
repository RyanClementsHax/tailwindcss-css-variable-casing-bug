const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryThing: {
          500: "blue",
        },
        secondaryThing: {
          500: "red",
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      /* this doesn't work */
      addBase({
        ":root": {
          "--colors-primaryThing-500": "0, 0, 255",
          "--colors-secondaryThing-500": "255, 0, 0",
        },
      });
    }),
  ],
};
