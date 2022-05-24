<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/home">
      <svg-icon icon-class="home" />
    </van-tabbar-item>
    <van-tabbar-item>
      <svg-icon icon-class="message" />
    </van-tabbar-item>
    <van-tabbar-item>
      <svg-icon icon-class="me2" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
const active = ref(0);
</script>

<style></style>
