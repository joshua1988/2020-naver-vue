import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  // 라우터 내용 정의
  routes: [
    // {
    //   path: "/",
    //   redirect: "/login"
    // },
    {
      path: "/signup",
      // component: SignupPage
      component: () => import("../views/SignupPage.vue")
    },
    {
      path: "/login",
      component: LoginPage
      // beforeEnter(to, from, next) {
      //   if (!token) {
      //     next("/");
      //   }
      // }
    },
    // 페이지 추가 정의
    // 조회 페이지, 생성 페이지
    {
      path: "*",
      component: NotFoundPage
    }
  ]
});

export default router;
