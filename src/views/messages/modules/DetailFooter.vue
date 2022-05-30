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
      @focus="onInputFocus"
    />
    <div class="rowCC mx-1">
      <svg-icon icon-class="face" />
      <svg-icon
        v-if="!state.inputFocus && state.inputValue == ''"
        icon-class="add"
        class="ml"
        @click="state.inputFocus = true"
      />
      <svg-icon
        v-else-if="state.inputValue == ''"
        icon-class="minus"
        class="ml"
        @click="state.inputFocus = false"
      />
      <kit-button
        v-else
        type="primary"
        style="width: 3rem; margin-left: 8px"
        @click="onSend"
      >
        发送
      </kit-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits, watchEffect } from "vue";

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
  inputFocus: false,
});

// 输入框获取焦点时触发
const onInputFocus = () => {
  setTimeout(() => (document.body.scrollTop = document.body.scrollHeight), 500);
};

const emits = defineEmits("onSend");

// 发送消息
const onSend = () => {
  emits("onSend", state.inputValue);
  state.inputValue = "";
};

watchEffect(() => {
  state.inputValue = props.text;
});
</script>

<style scoped lang="scss">
.footer-wrap {
  height: 50px;
  width: 100%;
  position: fixed;
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
