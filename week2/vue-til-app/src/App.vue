<template>
  <div>
    <!-- <div>
      <h1>컴포넌트 로직</h1>
      <p>{{ str }}</p>
      <button @click="changeString">변경</button>
    </div>
    <div>
      <h1>뷰엑스 로직</h1>
      <p>{{ $store.state.str }}</p>
      <button @click="$store.commit('changeString')">변경</button>
    </div> -->
    <header>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원 가입</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "hi"
    };
  },
  methods: {
    changeString() {
      this.str = this.str + "!";
    }
  },
  created() {
    console.log(this.$store);
  }
  // data() {
  //   return {
  //     str: "hi",
  //     num: 10
  //   };
  // }
  // created() {
  //   console.log("디버깅");
  // }
};
</script>

<style></style>
