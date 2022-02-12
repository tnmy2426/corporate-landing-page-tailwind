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
         },

         colors: {
            "main-clr": "#ff6d6d",
            "gray-text": "#99999a",
         },
      },

      container: {
         center: true,
         padding: "1rem",
      },
   },
   plugins: [],
};
