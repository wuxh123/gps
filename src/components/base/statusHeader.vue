<template>
  <div id="header" class="clearfix" v-if="headerIsShow">
    <span class="status">{{online}}</span>
    <span class="status">电量:</span>
    <span class="status">{{electric}}</span>
    <mt-button icon="back" class="goback" @click="goBack"></mt-button>
    <mt-button class="chat mui-icon-bubble" @click="goBack"></mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "页面顶部"
    };
  },
  props: {
    headerIsShow: {
      type: Boolean,
      default: true
    },
    online: {
      type: String,
      default: "离线"
    },
    electric: {
      type: String,
      default: "80%"
    }
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#header {
  text-align: center;
}
.mui-icon-bubble {
  background: url("../../static/imgs/base/Chat-Bubble.png") no-repeat center;
  background-size: 100%; 
}
</style>