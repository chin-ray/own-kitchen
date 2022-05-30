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
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  margin-top: 0.2rem;
  display: inline-flex;
}
.isTa {
  border-top-left-radius: 0;
}
.isMe {
  border-top-right-radius: 0;
}
</style>
