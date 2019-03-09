<template>
  <div id="mqttws">
  <input type="text" id="msg" v-model="msg"/>
    <input type="button" value="Send" @click="send" />
    <input type="button" value="Start" @click="start"/>
    <input type="button" value="Stop" @click="stop"/>
  </div>
</template>
<style>

</style>
<script>
  export default {
    name: 'mqttws',
    data() {
      return {
        hostname: '',
        port: 63623,
        clientId: '',
        userName: 'admin',
        password: '',
        timeout: 5,
        keepAlive: 50,
        cleanSession: false,
        ssl: false,
        topic: 'from/device',
        client:{},
        options: {},
        msg:'order',
        count:0
      }
    },
    created : function() {
      var mydate = new Date();
      var uuid = "smart"+mydate.getDay()+ mydate.getHours()+ mydate.getMinutes()+mydate.getSeconds()+mydate.getMilliseconds()+ Math.round(Math.random() * 10000);
      this.clientId = uuid;
      this.client = new Paho.MQTT.Client(this.hostname, this.port, uuid);
      console.log(this.clientId);
      console.log(this.client);
      var _client=this.client;
      this.options =
        {
          invocationContext: {
            host: this.host,
            port: this.port,
            path: _client.path,
            clientId: this.clientId
          },
          timeout: 5,
          keepAliveInterval: 50,
          cleanSession: false,
          reconnect : true,         // Enable automatic reconnect
          useSSL: false,
          userName: this.userName,
          password: this.password,
          onSuccess: function() {
            console.log("onConnected");
            _client.subscribe('up/device/#');//订阅主题
          },
          onFailure: function (e) {
          console.log(e);
          }
        };
        this.$bus.on('mqtt-send', (val) => {
          var s = this.msg;
          if(s){
            s = val;
            var message = new Paho.MQTT.Message(s);
            message.destinationName = this.topic;
            this.client.send(message);
            this.msg = '';
          }
            });
    //   this.client.connect(opt);//连接服务器并注册连接成功处理事件
    //   this.client.onConnectionLost = this.onConnectionLost;//注册连接断开处理事件

    //   this.client.onMessageArrived = this.onMessageArrived;//注册消息接收处理事件
//      console.log('after onlost');
    },
    mounted : function (){
        var opt = this.options;
        this.client.connect(opt);//连接服务器并注册连接成功处理事件
        this.client.onConnectionLost = this.onConnectionLost;//注册连接断开处理事件

        this.client.onMessageArrived = this.onMessageArrived;//注册消息接收处理事件
        console.log('after onlost');
    },
    methods: {
      onConnectionLost: function (responseObject) {
        if (responseObject.errorCode !== 0) {
          console.log("onConnectionLost:"+responseObject.errorMessage)
          console.log("连接已断开")
        }
      },
      onMessageArrived: function (message) {
        console.log("收到消息:"+message.payloadString);
      },
      onConnect : function() {
        console.log("onConnected");
        this.client.subscribe('up/device/#');//订阅主题
      },
      send : function (){
        var s = this.msg;
        if(s){
          s = "1234567890";
          var message = new Paho.MQTT.Message(s);
          message.destinationName = this.topic;
          this.client.send(message);
          this.msg = '';
        }
      },
      start : function(){
        window.tester = window.setInterval(function(){
          if(this.client.isConnected){
            var s = "1234567890";
            var message = new Paho.MQTT.Message(s);
            message.destinationName = this.topic;
            this.client.send(message);
          }
        }.bind(this), 1000);
      },
      stop : function (){
        window.clearInterval(window.tester);
      }
    }
  }
</script>
