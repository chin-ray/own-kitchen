<template>
  <div class="">
    <div class="header p-g">
      <div class="py-1 pr rowBS">
        <div class="rowSC mt-2">
          <van-image
            round
            width="50"
            height="50"
            src="http://ywcd.cc/wp-content/uploads/2021/03/-这就是生活-e1618062167453.jpg"
            @click="toSignIn"
          />
          <div class="userInfo columnSS">
            <b>蔺</b>
            <span>北京 1321321321</span>
          </div>
        </div>
        <svg-icon icon-class="setting" />
      </div>
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in cellList"
          :key="item + index"
          :title="item.title"
          :value="item.badge"
          :to="item.link"
          is-link
        >
          <template #icon>
            <svg-icon :icon-class="item.icon" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeIndex",
};
</script>
<script setup>
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const cellList = ref([
  { title: "home", icon: "home", link: "/", badge: "" },
  { title: "messages", icon: "message", link: "/messages", badge: "" },
  { title: "me", icon: "me2", link: "/me", badge: "" },
]);

const toSignIn = () => {
  proxy.$router.replace({
    path: `/redirect/sign-in`,
  });
};
</script>

<style scoped lang="scss">
.header {
  height: 140px;
  background-color: var(--light);
  .userInfo {
    margin-left: 1em;
    b {
      font-size: 16px;
    }
    span {
      color: #666;
      font-size: 14px;
      margin-top: 0.8em;
    }
  }
}
.content {
  margin-top: 3px;
  background-color: var(--light);
  height: calc(100vh - 100px - 3px - 50px);

  :deep(.van-cell) {
    height: 55px;
    display: flex;
    align-items: center;
    .svg-icon {
      width: 0.8em;
      margin-right: 0.3em;
    }
  }
}
</style>
