import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { path: "brand1" }
  },
  {
    path: "/brand1",
    name: "brand1",
    component: () => import("@views/BrandCompany.vue")
  },
  {
    path: "/brand2",
    name: "brand2",
    component: () => import("@views/BrandCRS.vue")
  },
  {
    path: "/brand3",
    name: "brand3",
    component: () => import("@views/BrandService.vue")
  },
  {
    path: "/brand4",
    name: "brand4",
    component: () => import("@views/BrandRnD.vue")
  },
  {
    path: "/brand5",
    name: "brand5",
    component: () => import("@views/BrandPhilosohy.vue")
  },
  {
    path: "/brand6",
    name: "brand6",
    component: () => import("@views/BrandHistory.vue")
  },
  {
    path: "/lifestyle",
    name: "LifeStyle",
    component: () => import("@views/LifeStyle.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
