<template>
  <div>
    <h1>회원 가입</h1>
    <SignupForm></SignupForm>
    <!-- <signup-form></signup-form> -->
  </div>
</template>

<script>
import SignupForm from "../components/signup/SignupForm.vue";

export default {
  components: {
    SignupForm
    // 'signup-form': SignupForm,
    // SignupForm: SignupForm,
  }
};
</script>

<style></style>
