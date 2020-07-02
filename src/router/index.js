import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/homePage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: homePage
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
