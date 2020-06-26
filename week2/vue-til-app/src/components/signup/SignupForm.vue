<template>
  <form v-on:submit.prevent="submitForm">
    <div>email: <input type="text" v-model="username" /></div>
    <div>pw: <input type="text" v-model="password" /></div>
    <div>nickname: <input type="text" v-model="nickname" /></div>
    <button type="submit">가입</button>
  </form>
</template>

<script>
// import axios from "axios";
import { registerUser } from "../../api/index";

// 이메일, 비밀번호, 닉네임
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    submitForm() {
      // event.preventDefault();
      // var data = {
      //   username: this.username,
      //   password: this.password,
      //   nickname: this.nickname
      // };
      registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname
      })
        // axios
        //   .post("http://localhost:3000/signup", {
        //     username: this.username,
        //     password: this.password,
        //     nickname: this.nickname
        //   })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
