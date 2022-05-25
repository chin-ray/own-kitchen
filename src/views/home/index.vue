<template>
  <div class="page-wrapper scroll-y">
    <div class="page-header">Header</div>
    <div class="page-content">
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
  padding: $globalPadding;
  background-color: $colorHeader;
}
.page-content {
  height: 1000px;
  padding: $globalPadding;
  background-color: $colorContent;
  border-top-left-radius: $contentBorderRadius;
  border-top-right-radius: $contentBorderRadius;
  margin-top: calc(0px - #{$contentBorderRadius});
}
</style>
