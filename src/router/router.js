import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

export const routes = [{ path: "/", component: Home, name: "home" }];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
