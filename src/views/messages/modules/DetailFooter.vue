<template>
  <div class="footer-wrap rowAC">
    <div class="mx-1">
      <svg-icon icon-class="speech" />
    </div>
    <input
      ref="input"
      v-model="state.inputValue"
      class="input px-1"
      placeholder="请输入聊天内容"
    />
    <div class="rowCC mx-1">
      <svg-icon icon-class="face" />
      <svg-icon icon-class="add" class="ml-1" />
      <van-icon name="add-o" size="24px" />
      <svg-icon icon-class="minus" class="ml-1" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, watchEffect } from "vue";

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

const state = reactive({
  inputValue: "",
});

watchEffect(() => {
  state.inputValue = props.text;
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
    height: 40px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
  }
}
</style>
