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
        fadeInUppp: {
          '0%': { "opacity": "1", "transform": 'translateY(-60%)' },
          '100%': { "opacity": "1", "transform": 'translateY(0)' },
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
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        pop: {
          "0%": {
            "transform": "scale(1)"
          },
          "50%": {
            "transform": "scale(1.1)"
          },
          "100%": {
            "transform": "scale(1)"
          }
        }
      },
      animation: {
        spinText: 'spinText 30s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideInLeft: "slideInLeft 0.5s ease-out",
        fadeInDown: "fadeInDown 0.6s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        slideUpFade: "slideUpFade 1.1s ease-out",
        slideDownFade: "slideDownFade 1.1s ease-out",
        infiniteScroll: 'infiniteScroll 50s linear infinite',
        pop: "pop 0.6s ease-out",
        fadeInUppp: "fadeInUppp 700ms cubic-bezier(.90, .06, .15, .90) forwards",
        fadeInDownnn: "fadeInUp 400ms cubic-bezier(.90, .06, .15, .90) forwards"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom right, #bc9f71,#29522f)',
      },
    }
  },
  variants: {},
  plugins: [],
};
