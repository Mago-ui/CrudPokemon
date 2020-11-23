import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import cardCreate from "../components/cardCreate.vue";
import cardEdit from "../components/cardEdit.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cardCreate",
    name: "create",
    component: cardCreate
  },
  {
    path: "/cardEdit/:_id",
    name: "edit",
    component: cardEdit
  },

  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
