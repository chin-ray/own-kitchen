<template>
  <div>
    <kit-navbar title="" leftIcon="logo" leftLogo rightIcon="add"></kit-navbar>
    <van-swipe-cell v-for="item in mesList" :key="item.avatar">
      <van-card :title="item.nickname" :desc="item.mes" @click="toDetail">
        <template #thumb>
          <van-image round width="45" height="45" :src="item.avatar" />
        </template>
        <template #num> {{ item.time }} </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" />
      </template>
    </van-swipe-cell>
    <div
      class="last-content bg-default"
      :style="`height: calc(100vh - 46px - ${mesList.length * 67}px)`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MessagesIndex",
};
</script>
<script setup>
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const mesList = ref([
  {
    avatar: "http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png",
    nickname: "李某",
    mes: "蔺，你好，我是李某",
    time: "11:51",
  },
  {
    avatar: "http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png",
    nickname: "张某",
    mes: "蔺，你好，我是张某",
    time: "11:51",
  },
  {
    avatar: "http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png",
    nickname: "王某",
    mes: "蔺，你好，我是王某",
    time: "11:51",
  },
  {
    avatar: "http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png",
    nickname: "宋某",
    mes: "蔺，你好，我是宋某",
    time: "11:51",
  },
]);

const toDetail = () => {
  proxy.$router.replace({
    path: `/redirect/messages/detail`,
  });
};
</script>

<style scoped lang="scss">
:deep(.van-swipe-cell) {
  .van-card::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: var(--van-padding-md);
    bottom: 0;
    left: var(--van-padding-md);
    border-bottom: 1px solid var(--van-cell-border-color);
    transform: scaleY(0.5);
  }
  .van-card__thumb {
    width: 50px;
    height: 50px;
  }
  .van-card__content {
    min-height: 0;
    display: flex;
    justify-content: center;
    .van-card__title {
      // font-weight: 600;
      font-size: 14px;
      color: #000;
    }
    .van-card__desc {
      color: #b2b2b2;
    }
    .van-card__num {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .van-button {
    width: 60px;
    height: 100%;
  }
}
.last-content {
  padding-bottom: 50px;
}
</style>
