import Vue from "vue";
import VueRouter from "vue-router";
import Showroom from "@views/BrandCompany.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Showroom",
    component: Showroom
  },
  {
    path: "/brand",
    name: "Brand",
    component: () => import("@views/BrandCRS.vue")
  },
  {
    path: "/news&events",
    name: "News&Events",
    component: () => import("@views/BrandService.vue")
  },
  {
    path: "/lifestyle",
    name: "Lifestyle",
    component: () => import("@views/BrandRnD.vue")
  },
  {
    path: "/worldwide",
    name: "Worldwide",
    component: () => import("@views/BrandPhilosohy.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
