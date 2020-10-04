import Vue from "vue";
import VueRouter from "vue-router";
import Showroom from "@views/Showroom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Showroom",
    component: Showroom
  },
  {
    path: "/crs",
    name: "Brand",
    component: () => import("@views/BrandCRS.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
