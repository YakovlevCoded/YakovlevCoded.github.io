module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    './' : './',

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_variables.scss";
               @import "@/scss/_grid.scss";
               @import "@/scss/_magnific-popup.scss";
               @import "@/scss/_vue-select.scss";
               @import "@/scss/_adaptives.scss";
               `
      }
    }
  }
};
