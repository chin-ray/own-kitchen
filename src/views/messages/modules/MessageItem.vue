<template>
  <div class="rowEC item" v-if="state.mesInfo.isMe">
    <div class="rowES">
      <div class="columnSE mr-1">
        <span v-if="false" style="color: #323233">
          {{ state.mesInfo.name }}
        </span>
        <message-bubble :text="state.mesInfo.mes" :isMe="state.mesInfo.isMe" />
      </div>
      <van-image
        round
        width="35"
        height="35"
        src="http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png"
      />
    </div>
  </div>
  <div class="rowSS item" v-else>
    <van-image
      round
      width="35"
      height="35"
      src="http://ywcd.cc/wp-content/uploads/2021/03/IUG7G@ZVME278C@GU.png"
    />
    <div class="columnSS ml-1">
      <span v-if="false" style="color: #323233">{{ state.mesInfo.name }}</span>
      <message-bubble :text="state.mesInfo.mes" :isMe="state.mesInfo.isMe" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, watchEffect } from "vue";
import MessageBubble from "./MessageBubble.vue";

const props = defineProps({
  mesInfo: {
    type: Object,
    default() {
      return {};
    },
  },
});

const state = reactive({});

watchEffect(() => {
  state.mesInfo = props.mesInfo;
});
</script>

<style scoped lang="scss">
.item {
  height: 45px;
}
</style>
