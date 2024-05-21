/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        spinText: {
          to: { transform: 'rotate(360deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
        slideInLeft: {
          '0%': { transform: "translateX(-20px)" },
          '100%': { transform: "translateX(0)"}
        },
        fadeInDown: {
          "0%": {"opacity": "0",
            "transform": "translateY(-20px)" },
          "100%": { "opacity": "1",
            "transform": "translateY(0)"}
        },
        fadeInUp: {
          "0%": {"opacity": "0",
            "transform": "translateY(20px)"},
          "100%": {"opacity": "1",
            "transform": "translateY(0)"}
        },
        slideUpFade: {
          "0%": {
            "opacity": "0",
            "transform": "translateY(50px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        slideDownFade: {
          "0%": {
            "opacity": "0",
            "transform": "translateY(-50px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
      },
      animation: {
        spinText: 'spinText 30s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideInLeft: "slideInLeft 0.5s ease-out",
        fadeInDown: "fadeInDown 0.6s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        slideUpFade: "slideUpFade 1.1s ease-out",
        slideDownFade: "slideDownFade 1.1s ease-out"

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    }
  },
  variants: {},
  plugins: [],
};
