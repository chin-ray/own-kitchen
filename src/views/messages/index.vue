<template>
  <div>
    <h3 class="p-g">Content</h3>
    <van-cell-group>
      <van-cell value="周三 22:11" label="描述信息">
        <template #icon>
          <van-image width="45" height="45" />
        </template>
        <template #title>
          <span>单元格</span>
        </template>
      </van-cell>
      <van-cell title="单元格" value="周二 12:12" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "MessagesIndex",
};
</script>

<style scoped lang="scss">
:deep(.van-cell) {
  .van-image {
    margin-right: 10px;
  }
  .van-cell__value {
    font-size: var(--van-font-size-xs);
  }
}
</style>
