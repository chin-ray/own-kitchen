<template>
  <div :class="`bubble-wrap bg-white rowCC ${isMe ? 'isMe' : 'isTa'}`">
    {{ props.text }}
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
.bubble-wrap {
  height: 1.8rem;
  display: inline-flex;
  padding: 0 12px;
  border-radius: 6px;
}
.isTa {
  border-top-left-radius: 0;
  margin-top: 0.2rem;
}
.isMe {
  border-top-right-radius: 0;
  margin-top: 0.2rem;
}
</style>
