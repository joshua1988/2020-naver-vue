<template>
  <div>
    <!-- <button v-on:click="fetchItems">출력</button> -->
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    fetchItems: function() {
      // var arr = [];
      for (var i = 0; i < localStorage.length; i++) {
        var value = localStorage.key(i);
        this.items.push(value);
      }
      // return arr;
    }
  },
  created: function() {
    this.fetchItems();
  }
};
</script>

<style></style>
