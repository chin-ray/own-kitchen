<template>
  <div class="page-wrapper global-padding scroll-y">
    <div class="page-header">Header</div>
    <!-- <div class="page-content global-padding">
      <h3>Content</h3>
    </div> -->
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
  height: 100vh;
}
.page-content {
  height: 1000px;
  background-color: #ebecef;
  border-top-left-radius: $contentBorderRadius;
  border-top-right-radius: $contentBorderRadius;
  margin-top: calc(0px - #{$contentBorderRadius});
}
</style>
