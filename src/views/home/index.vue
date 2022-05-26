<template>
  <div class="page-wrapper scroll-y">
    <div class="page-header global-padding">Header</div>
    <div class="page-content global-padding">
      <h3>Content</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
};
</script>
<script setup></script>

<style scoped lang="scss">
$colorHeader: #f2f2f2;
$colorContent: #fcfcfc;
$contentBorderRadius: 15px;

.page-wrapper {
}
.page-header {
  height: 160px;
  background-color: $colorHeader;
}
.page-content {
  height: 1000px;
  background-color: $colorContent;
  border-top-left-radius: $contentBorderRadius;
  border-top-right-radius: $contentBorderRadius;
  margin-top: calc(0px - #{$contentBorderRadius});
}
</style>
