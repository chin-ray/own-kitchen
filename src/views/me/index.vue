<template>
  我的
  <kit-button type="primary" @click="toSignIn">去登录</kit-button>
</template>

<script>
export default {
  name: "MeIndex",
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const toSignIn = () => {
  proxy.$router.replace({
    path: `/redirect/sign-in`,
  });
};
</script>

<style scoped></style>
