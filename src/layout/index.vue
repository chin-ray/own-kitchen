<template>
  <router-view />
  <layout-tabbar />
</template>

<script>
export default {
  name: "LayoutIndex",
};
</script>
<script setup>
import LayoutTabbar from "./modules/Tabbar";
</script>
