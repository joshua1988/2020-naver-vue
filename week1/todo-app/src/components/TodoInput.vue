<template>
  <div>
    <input type="text" v-model="inputText" />
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    addTodo: function() {
      console.log("clicked", this.inputText);
      var value = this.inputText;
      localStorage.setItem(value, value);
      this.initForm();
    },
    initForm: function() {
      this.inputText = "";
    }
  }
};
</script>

<style></style>
