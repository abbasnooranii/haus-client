/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "#f7f0e7",
        textBlack: "#3D3D3C",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#F08808",
          secondary: "#0870F0",
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
