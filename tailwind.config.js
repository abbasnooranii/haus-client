/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#F08808",
          secondary: "#3D3D3C",
          // accent: "#fff",
          // neutral: "#3d4451",
          "base-100": "#ffffff",
          ".btn": {
            "border-radious": "2px",
            "border-width": "2px",
          },
          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
    ],
  },
};
