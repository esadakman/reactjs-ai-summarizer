/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true,
//   },
//   purge: {
//     content: ["./src/**/*.js", "./src/**/**/*.js"],
//   },
//   theme: {
//     fill: (theme) => ({
//       red: theme("colors.red.primary"),
//     }),
//     colors: {
//       white: "#ffffff",
//       blue: {
//         medium: "#005c98",
//       },
//       black: {
//         light: "#262626",
//         faded: "#00000059",
//       },
//       gray: {
//         base: "#616161",
//         background: "#fafafa",
//         primary: "#dbdbdb",
//       },
//       red: {
//         primary: "#ed4956",
//       },
//     },
//   },
//   variants: {
//     extend: {
//       display: ["group-hover"],
//     },
//   },
// };
