<template>
  <div class="footer-wrap rowAC">
    <div class="mx-1">
      <svg-icon icon-class="speech" />
    </div>
    <input
      ref="input"
      :value="props.text"
      class="input px-1"
      placeholder="请输入聊天内容"
    />
    <div class="rowCC mx-1">
      <svg-icon icon-class="face" />
      <svg-icon icon-class="add" class="ml-1" />
      <svg-icon icon-class="add" class="ml-1" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const input = ref("");

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

watch(input.value, (val) => {
  console.log(val);
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
