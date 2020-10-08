const Global = {
  install: function(Vue) {
    //模型目录选择
    Vue.component("nav-header", () => import("./layout/NavHeader"));
    Vue.component("footer-bar", () => import("./layout/FooterBar"));
    Vue.component("number", () => import("./common/Number"));
  }
};

export default Global;
