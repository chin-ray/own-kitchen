<template>
  <van-nav-bar>
    <template #left>
      <svg-icon icon-class="left_arrow" />
    </template>
    <template #right>
      <svg-icon icon-class="more" />
    </template>
  </van-nav-bar>
</template>

<style scoped>
:deep(.van-nav-bar__title) {
  margin: 0 54px;
  font-weight: 600;
}
</style>
