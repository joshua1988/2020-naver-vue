<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add="addTodoItem"></todo-input>
    <todo-list v-bind:todos="items"></todo-list>
  </div>
</template>

<script>
// import 컴포넌트 이름 from '컴포넌트 파일 경로'
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

// var todoHeader = {
//   template: '<h1>투두 헤더</h1>'
// }

// ES6 Modules
export default {
  // 인스턴스 옵션 속성
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList
  },
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
    },
    addTodoItem: function(item) {
      this.items.push(item);
      localStorage.setItem(item, item);
    }
  },
  created: function() {
    this.fetchItems();
  }
};
</script>

<style></style>
