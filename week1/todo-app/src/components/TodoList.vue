<template>
  <div>
    <!-- <button v-on:click="fetchItems">출력</button> -->
    <ul>
      <li v-for="(item, index) in todos" v-bind:key="index">
        {{ item }}
        <button v-on:click="removeTodo(item, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  // data() {
  //   return {
  //     items: []
  //   };
  // },
  methods: {
    // fetchItems: function() {
    //   // var arr = [];
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var value = localStorage.key(i);
    //     this.items.push(value);
    //   }
    //   // return arr;
    // },
    removeTodo: function(item, index) {
      console.log("removed", item, index);
      this.items.splice(index, 1);
      localStorage.removeItem(item);
    }
  }
  // created: function() {
  //   this.fetchItems();
  // }
};
</script>

<style></style>
