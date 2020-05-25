import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import TasksList from "../components/TasksList";
import TaskBoard from "../components/TaskBoard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/Task/list",
    name: "TasksList",
    component: TasksList
  },
  {
    path: "/Task/board",
    name: "TaskBoard",
    component: TaskBoard
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
