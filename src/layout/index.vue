<template>
  <router-view />
  <van-tabbar v-model="active" active-color="#717171" inactive-color="#d3d3d3">
    <van-tabbar-item
      v-for="(item, index) in tabbarItems"
      :key="index"
      replace
      :to="item.to"
      :name="item.name"
      :badge="item.badge"
    >
      <svg-icon :icon-class="item.icon" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "LayoutIndex",
};
</script>
<script setup>
import { ref } from "vue";
const active = ref("");
const tabbarItems = ref([
  { name: "", icon: "home", to: "/", badge: "" },
  { name: "messages", icon: "message", to: "/messages", badge: "" },
  { name: "me", icon: "me2", to: "/me", badge: "" },
]);
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
