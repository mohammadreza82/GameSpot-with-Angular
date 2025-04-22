/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400"
  ],
  theme: {
    extend: {
       fontFamily: {
              "Dana": "Dana",
              "DanaBold": "Dana DemiBold",
              "DanaMedium": "Dana Medium",
              "VazirBlack": "VazirBlack",
              "MorabbaMedium": "Morabba Medium",
              "MorabbaBold": "Morabba Bold",
              "MorabbaLight": "Morabba Light",
            },
    },
  },
  plugins: [],
};
