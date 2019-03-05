<template>
  <div>
    <capHeader :caption="caption"></capHeader>
      <mt-cell
        title="APP"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/app.png" width="24" height="24">
      </mt-cell>      
      <mt-cell
        title="导航"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/daohang.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="计步"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/jibu.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="离线"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/lixian.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="设备消息"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/shebeixiaoxi.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="设置"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/shezhi.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="电子围栏"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/weilan.png" width="24" height="24">
      </mt-cell>  
      <mt-cell
        title="心率"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/xinlv.png" width="24" height="24">
      </mt-cell> 
      <mt-cell
        title="关于"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/guanyu.png" width="24" height="24">
      </mt-cell> 
      <mt-cell
        title="说明"
        is-link
        :to="{path:''}"
        algin="left"
        width="36"
        height="36"
      >
        <img src="../../static/imgs/more/shuoming.png" width="24" height="24">
      </mt-cell>  
    </div>
</template>

<script>
export default {
  data() {
    return {
      caption: "更多"
    };
  },
  mounted: function() {   
  },
  methods: {
  }
};
</script>