module.exports = {
   content: ["./public/index.html"],
   theme: {
      fontFamily: {
         exo: ["Exo", "sans-serif"],
      },
      extend: {
         backgroundImage: {
            "header-image": "url('./img/background01.png')",
            "photo-bg": "url('./img/background02.png')",
            "features-bg": "url('./img/background03.png')",
            "resposive-p-bg": "url('./img/background05.png')",
            "company-p-bg": "url('./img/background04.png')",
            "footer-p-bg": "url('./img/backgroundFooter.png')",
         },

         colors: {
            "main-clr": "#ff6d6d",
            "gray-p-bg": "#f6f5f3",
            "blue-p-bg": "#323969",
            "input-bg": "#464c77",
         },
      },

      container: {
         center: true,
         padding: "1rem",
      },
   },
   plugins: [],
};
