<template>
  <div class="page-header">
    <kit-navbar title="聊天群组" @click-left="toBack"></kit-navbar>
  </div>
  <div class="page-content p-g">
    <h3>Content</h3>
  </div>
</template>

<script>
export default {
  name: "MessagesDetail",
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const toBack = () => {
  proxy.$router.replace({
    path: `/redirect/messages`,
  });
};
</script>
