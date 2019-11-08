import Vue from "vue";
import VueRouter from "vue-router";
import TermPlansComponent from '@/components/TermPlansComponent.vue';
import TermDetailsComponent from '@/components/TermDetailsComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TermPlansComponent
  },
  {
    path: "/allplans",
    name: "allplans",
    component: TermDetailsComponent
  },
  {
    path: "/allplans/search/:searchstring",
    name: "search",
    component: TermDetailsComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
