<template>
  <div>
    <!-- <section>
      {{ $store.state.str }}
    </section> -->
    <h1>로그인 페이지</h1>
    <!-- TODO: 가입된 회원으로 로그인 할 수 있는 로직을 구현해보세요. -->
    <form @submit.prevent="submitForm">
      <div>id: <input type="text" v-model="username" /></div>
      <div>pw: <input type="text" v-model="password" /></div>
      <button type="submit">로그인</button>
    </form>
    <button @click="fetchLearningNotes">조회</button>
  </div>
</template>

<script>
import { loginUser, fetchNotes } from "../api";
/**
 * 쉬는 시간 5시 30분까지
 * [실습 절차]
 * 1. 라우터 등록
 * 2. 페이지 컴포넌트에 컴포넌트 설계 및 등록
 * 3. API 문서를 보고 로그인 API 스펙을 확인한 뒤 로그인 기능 구현
 * 4. API 함수 모듈화
 */

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      loginUser({
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(response);
          var token = response.data.token;
          this.$store.commit("setToken", token);
        })
        .catch(error => console.log(error));
    },
    fetchLearningNotes() {
      fetchNotes();
    }
  }
  // render(createElement) {
  //   return createElement("h1", "로그인 페이지");
  // }
};
</script>

<style></style>
