<template>
  <div class="page-field">
    <capHeader :caption="caption"></capHeader>
    <div class="page-field-wrapper">
      <div class="page-part">
        <mt-field label="设备号" placeholder="设备号" :attr="{maxlength: 10}" v-model="devname"></mt-field>
        <mt-field label="密码" placeholder="设备密码" :attr="{maxlength: 10}" v-model="password"></mt-field>
      </div>
    </div>
    <mt-button size="large" type="primary">添加</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      caption: "添加设备",
      devname: "",
      password: ""
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>