<template>
  <kit-navbar :title="state.userInfo.name" @click-left="toBack"></kit-navbar>
  <div class="content bg-default p-g">
    <message-item
      v-for="(item, index) in state.messageList"
      :key="item.id + index"
      :mesInfo="item"
    />
  </div>
  <detail-footer text="123" @onSend="onSend" />
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
    { id: "1", name: "秦某", mes: "你好" },
    { id: "2", name: "秦某", mes: "你好", isMe: true },
  ];
  state.messageList = messageList;
};

// 发送消息
const onSend = (val) => {
  let mesList = [...state.messageList];
  mesList.push({ id: mesList.length, name: "", mes: val, isMe: true });
  state.messageList = mesList;
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

<style scoped lang="scss">
.content {
  height: calc(100vh - 46px - 50px);
  overflow: auto;
}
</style>
