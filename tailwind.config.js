module.exports = {
  content: ["./src/**/*.{html,js,css,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      color1: "rgb(0,126,229)",
      color2: "rgb(255,255,255)",
      color3: "rgb(247,247,247)",
      color4: "rgb(255, 111, 26)",
      color5: "rgb(181,222,255)",
      button: "rgb(251,251,251)",
      b2bButton: "rgb(211,206,210)",
      borderColor: "rgb(172,172,172)",
      asideBarBgColor: "rgb(251,251,253)",
      color64: "rgb(64,64,64)",
      color51: "rgb(51,51,51)",
      color74: "rgb(74,74,74)",
      color456: "rgb(46,56,66)",
      color889: "rgb(80,87,94)",
      headerBack: "rgb(46,56,66)",
      footerText: "rgb(48,47,47)",
      borderLine: "rgb(0,0,0, 0.24)",
      blue: "rgb(0,93,255)",
      maplsite: "rgb(155,4,191)",
      logoColor: "rgb(239 39 44)",
      linkColor: "rgb(8, 82, 178)",
      green: "rgb(0,197,105)",
      transparentBg: "rgba(0,0,0,0.5)",
      searchBg: "rgb(4,4,4, 0.5)",
      yellowGreen: "rgb(199, 255, 79)",
      yellowDark: "rgb(255, 230, 3)",
    },
    fontFamily: {
      montserrat: "Montserrat",
      sm: "Source Sans, sans-serif",
      openSans: "Open Sans, sans-serif",
      raleway: "Raleway, sans-serif",
      roboto: "Roboto, sans-serif",
    },
  },
  plugins: [],
};
