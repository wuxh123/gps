<template>
  <div v-bind:style="mystyle">
    <capHeader :caption="caption"></capHeader>
    <a>可能原因:
      <br>1.网络信号弱
      <br>2.密码不正确
      <br>3.地址不存在
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myStyle: {
        width: "100%",
        height: document.documentElement.clientHeight - 50 + "px"
      },
      caption: "出错了"
    };
  }
};
</script>
<style scoped>
div a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
