export default (app) => {
  // 防重复点击(指令实现)
  app.directive('preventReClick', (el, binding) => {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, binding.value || 1000);
      }
    });
  });
}
