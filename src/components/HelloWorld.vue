<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  msg: String,
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
