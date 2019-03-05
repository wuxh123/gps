  <template>
  <mt-popup v-model="popupVisible" position="middle" class="mint-popup">
    <div class="popup-div">
       <mt-field label="手机" placeholder="手机号" :attr="{maxlength: 10}" v-model="username"></mt-field>
    </div>   
  </mt-popup>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: true,
      selected:"queren"
    };
  },
  methods: {
    oncancel: function(v) {
      console.log(v);
    },
    onsure: function(v) {
      console.log(v);
    }
  }
};
</script>

<style scoped>
.mint-popup {
  width: 98%;
}
.popup-div {
  height: 100px;
  text-align: center;
}
</style>