<template>
  <van-tabbar v-model="active" active-color="#717171" inactive-color="#d3d3d3">
    <van-tabbar-item
      v-for="(item, index) in tabbarItems"
      :key="index"
      replace
      :to="item.link"
      :name="item.name"
      :badge="item.badge"
    >
      <svg-icon :icon-class="item.icon" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default { name: "LayoutTabbar" };
</script>
<script setup>
import { ref, watch, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const active = ref(proxy.$route.name);
const tabbarItems = ref([
  { name: "home", icon: "home", link: "/", badge: "" },
  { name: "messages", icon: "message", link: "/messages", badge: "" },
  { name: "me", icon: "me2", link: "/me", badge: "" },
]);

watch(
  () => {
    return proxy.$route.name;
  },
  (val) => {
    active.value = val;
  }
);
</script>

<style scoped>
.van-hairline--top-bottom:after,
.van-hairline-unset--top-bottom:after {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.van-tabbar-item .van-badge__wrapper .van-tabbar-item__icon {
  width: 1em !important;
  margin-bottom: 0px;
}
</style>
