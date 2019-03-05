<template>
  <div>
    <stsHeader></stsHeader>
    <div id="allmap" v-bind:style="mapStyle" v-bind:class="anchorBL"></div>
    <BDMap ref="bdmap"></BDMap>
    <watchFooter></watchFooter>
  </div>
</template>

<script>
//百度地图组件
import BDMap from "@/components/map/bdmap.js";
export default {
  data() {
    return {
      mapStyle: {
        width: "100%",
        height: localStorage.getItem('screenHeight')
      },
      map: BDMap
    };
  },
  components: {
    BDMap
  },
  created() {},
  mounted() {
    this.map = this.$refs.bdmap;
    console.log(this.$route.params.a);
    console.log(this.$utils.getUrlKey("devNo"));
    this.map.init();
  },
  methods: {
  }
};
</script>

