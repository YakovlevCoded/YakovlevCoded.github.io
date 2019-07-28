module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_variables.scss";
               @import "@/scss/_grid.scss";
               @import "@/scss/_magnific-popup.scss";
               `
      }
    }
  }
};
