/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    screen: {},
    extend: {
      fontFamily: {
        body: ["Inter"]
      },

      colors: {
        purple: {
          primary: "#402381",
          secondary: "#4F2A9D",
          tertiary: "#4B2CCD",
          light:"#6942bc",
          soft: "#F1EFF6"
        },
        white: {
          primary: "#FFFFFF",
          light: "#FFFFFF99"
        },
        black: {
          primary: "#2D313B"
        },
        gray: {
          primary: "#3E4451",
          secondary: "#7A7C80",
          tertiary: "#CCCED5",
          light: "#F1EFF6"
        },
        yellow: {
          primary: "#FCBA10",
          light: "#FFF8E1"
        },
        green: {
          primary: "#29C76F"
        },
        red: {
          primary: "#FA3434",
          secondary:"#E5533F"
        },
        blue: {
          primary: "#0051FF",
          soft: "#3C90F3"
        }
      },
      border: {
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        24: "24px",
        28: "28px",
        30: "30.4px",
        32: "32px"
      }
    },
    fontFamily: {
      custom: ["inter"]
    }
  },
  plugins: []
};