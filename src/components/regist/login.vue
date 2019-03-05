<template>
  <div>
  </div>
</template>

<script>
import myError from "@/components/message/myError.vue";
export default {
  data() {
    return {
      auth: ""
    };
  },
  components: {
    myError,
  },
  mounted() {
    console.log(this.$utils.getUrlKey("auth"));
    this.auth = this.$utils.getUrlKey("auth");
    this.onLogin();
  },
  methods: {
    onLogin() {
      const { auth } = this;
      const data = {
        auth
      };
      console.log("begin login" + JSON.stringify(data));
      this.clearCache();
      this.$http
        .post("/login", data)
        .then(res => {
          console.log(res);
          // 登录成功
          if (res.data.token) {
            console.log(
              "token=",
              res.data.token,
              "username=",
              res.data.username
            );
            // 储存 token
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            console.log(document.documentElement.clientHeight - 64 + "px")
            localStorage.setItem("screenHeight",document.documentElement.clientHeight - 64 + "px")
            this.$router.push({ name: "select", params: {} });
          }
        })
        .catch(e => {
          console.log(e);
          // 登录失败
          // 验证后端返回的错误字段，如果匹配，提示用户
          // axios 配置里必须要 return Promise.reject(error.response.data) 才能拿到错误字段
          console.log(JSON.stringify(e));
        });
    },
    clearCache() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
  }
};
</script>

