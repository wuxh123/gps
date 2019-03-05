<template>
  <div id="header" class="clearfix" v-if="headerIsShow">
    <span class="caption">{{caption}}</span>
    <mt-button icon="back" class="goback" @click="goBack"></mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    headerIsShow: {
      type: Boolean,
      default: true
    },
    caption: {
      type: String,
      default: ""
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
</style>