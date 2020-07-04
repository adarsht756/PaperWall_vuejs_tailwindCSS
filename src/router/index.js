import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/homePage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import WallpapersView from "../views/WallpapersView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/",
    component: homePage,
    // name: "HomePage",
    children: [
      {
        path: "/:key?",
        name: "/Home",
        component: WallpapersView,
        props: true
      }
    ]
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
