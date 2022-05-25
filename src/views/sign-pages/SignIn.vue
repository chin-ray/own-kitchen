<template>
  <kit-button type="primary" @click="handleSignIn">登录</kit-button>
</template>

<script>
export default {
  name: "SignIn",
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const handleSignIn = () => {
  proxy.$router.replace({
    path: `/redirect/me`,
  });
};
</script>
