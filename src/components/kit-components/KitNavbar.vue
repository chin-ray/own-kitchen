<template>
  <van-nav-bar>
    <template #left>
      <svg-icon
        :icon-class="props.leftIcon"
        :class="props.leftLogo && 'leftLogo'"
      />
    </template>
    <template #right>
      <svg-icon :icon-class="props.rightIcon" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  leftLogo: {
    type: Boolean,
    default: false,
  },
  leftIcon: {
    type: String,
    default: "left_arrow",
  },
  rightIcon: {
    type: String,
    default: "more",
  },
});
</script>

<style scoped lang="scss">
:deep(.van-nav-bar__left) {
  .leftLogo {
    width: 3em;
  }
}
:deep(.van-nav-bar__title) {
  margin: 0 54px;
  font-weight: 600;
}
</style>
