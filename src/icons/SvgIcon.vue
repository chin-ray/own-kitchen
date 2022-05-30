<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    // color: {
    //   type: String,
    //   default: '#889aa4',
    // },
  },
  setup(props) {
    return {
      iconName: computed(() => `#icon-${props.iconClass}`),
      svgClass: computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`;
        }
        return "svg-icon";
      }),
    };
  },
});
</script>

<style scoped>
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 16px;
  margin-right: 12px;
  position: relative;
}

.svg-icon {
  width: 1.2em;
  height: 1.2em;
  font-size: 22px;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
