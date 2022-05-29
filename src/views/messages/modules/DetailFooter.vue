<template>
  <div class="footer-wrap rowAC">
    <div class="mx-1">
      <svg-icon icon-class="home" />
    </div>
    <input class="input px-1" />
    {{ props.text }}
    <div class="rowCC mx-1">
      <svg-icon icon-class="home" />
      <svg-icon icon-class="home" class="ml-1" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  isMe: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.footer-wrap {
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: var(--van-white);

  .input {
    width: 100%;
    height: 30px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
  }
}
</style>
