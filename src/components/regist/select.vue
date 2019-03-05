<template>
  <div>
    <capHeader :caption="caption"></capHeader>
    <div v-for="(item,index) in devs" :key="index" class="page-cell-wrapper">
      <!-- GPS=0 WATCH=1 PET=2 -->
      <mt-cell
        v-if="item.devType==1"
        v-bind:title="item.username"
        v-bind:label="item.devNo"
        is-link
        :to="{path:'/homewatch?devNo='+item.devNo}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/regist/zhinengshoubiao.png" width="24" height="24">
      </mt-cell>      
    </div>
    <!-- <div class="page-button">
     <div class="page-button-wrapper">
       <div class="page-button-group">
         <mt-button size="small" type="primary" @click="add_dev">设备管理</mt-button>
       </div>
     </div>
    </div>-->
    <registFooter></registFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: "选择设备",
      devs: []
    };
  },
  mounted: function() {
    console.log("username=", localStorage.getItem("username"));
    this.$http
      .post("/device", {
        username: localStorage.getItem("username")
      })
      .then(res => {
        console.log(res);
        this.devs = res.data.list;
      })
      .catch(e => {
        // 登录失败
        // 验证后端返回的错误字段，如果匹配，提示用户
        // axios 配置里必须要 return Promise.reject(error.response.data) 才能拿到错误字段
        console.log(JSON.stringify(e));
      });
  },
  methods: {
    add_dev() {
      this.$router.push({ name: "add_dev", params: {} });
    }
  }
};
</script>