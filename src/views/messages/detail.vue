<template>
  <kit-navbar :title="state.userInfo.name" @click-left="toBack"></kit-navbar>
  <div class="bg-default p-g" style="height: calc(100vh - 46px)">
    <message-item
      v-for="(item, index) in state.messageList"
      :key="item.id + index"
      :mesInfo="item"
    />
  </div>
  <detail-footer text="123" />
</template>

<script>
export default {
  name: "MessagesDetail",
};
</script>
<script setup>
import {
  getCurrentInstance,
  defineProps,
  reactive,
  watchEffect,
  onMounted,
} from "vue";
import MessageItem from "./modules/MessageItem.vue";
import DetailFooter from "./modules/DetailFooter.vue";

const { proxy } = getCurrentInstance();

const props = defineProps({
  userInfo: {
    type: Object,
    default() {
      return { name: "秦某" };
    },
  },
});
const state = reactive({
  userInfo: {},
  messageList: [],
});

// 获取聊天记录
const getMessageList = () => {
  let messageList = [
    { name: "秦某", mes: "你好" },
    { name: "秦某", mes: "你好", isMe: true },
  ];
  state.messageList = messageList;
};

onMounted(() => {
  getMessageList();
});

const toBack = () => {
  proxy.$router.replace({
    path: `/redirect/messages`,
  });
};

watchEffect(() => {
  state.userInfo = props.userInfo;
});
</script>
