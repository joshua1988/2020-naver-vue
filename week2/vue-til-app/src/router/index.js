import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  // 라우터 내용 정의
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/signup",
      component: SignupPage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "*",
      component: NotFoundPage
    }
  ]
});

export default router;
