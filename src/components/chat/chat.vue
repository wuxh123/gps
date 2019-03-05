<template>
    <div>
        <capHeader :caption="caption"></capHeader>
        <section class="chatlist" :class="showSelBox>0?'chatlist-bottom-collapse':'chatlist-bottom'">
            <mt-loadmore :top-method="loadTop" top-pull-text="加载更多" top-drop-text="释放加载" @top-status-change="handleTopChange" ref="loadmore">
                <ul>
                    <template v-for="(item,i) in records">
                        <li class="chat-mine" v-if="item.type==1" :key='i'>
                            <div class="chat-user"><img src="../../static/imgs/chat/wo.png"></div>
                            <div class="time"><cite><i>{{item.time}}</i>{{item.name}}</cite></div>
                            <div class="chat-text" v-html="replaceFace(item.content)"></div>
                        </li>
                        <li v-if="item.type==2" :key='i'>
                            <div class="chat-user"><img src="../../static/imgs/chat/shebeizhineng.png"></div>
                            <div class="time"><cite>{{item.name}}<i>{{item.time}}</i></cite></div>
                            <div class="chat-text" v-html="replaceFace(item.content)"></div>
                        </li>
                    </template>
                </ul>
            </mt-loadmore>
        </section>


        <section class="foot">
            <mt-field id="txtContent" placeholder="请输入消息" class="con" v-model="content"></mt-field>
            <span class="btn-voice" v-on:click="showSelBox=showSelBox==1?0:1"><i class="fa fa-smile-o" aria-hidden="true"></i></span>
            <span class="btn btn-send" v-on:click="sendMsg">发送</span>
            <section class="selbox" :class="showSelBox>0?'show':'hide'">
                <section v-show="showSelBox==1" class="face-box">
                    <mt-swipe :auto="0" :continuous="false">
                         <mt-swipe-item v-for="(n,i) in Math.ceil(EXPS.length/18)" :key='i'>
                            <li v-for="(item, index) in getEXP(n,18)" :key='index'>
                                <img :src="'static/emotion/'+item.file" alt="" :data="item.code" v-on:click="content+=item.code">
                            </li>
                        </mt-swipe-item>
                    </mt-swipe>
                </section>
                <div v-show="showSelBox==2">{{selOther}}</div>
            </section>
        </section>
    </div>
</template>

<script>
import util from '@/components/utils/util.js'
import { Toast } from 'mint-ui';

export default {
    name: 'chatlist',
    data() {
        return {
            caption:"语音短信",
            showSelBox: 0, // 0隐藏 1显示表情 2显示其他
            selFace: '表情',
            selOther: '其他功能',
            content:'',
            topStatus: '',
            //聊天记录
            records: [{
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '您',
                content: '雨天路滑,注意安全.'
            }, {
                type: 2,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '设备',
                content: '好的'
            },{
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '您',
                content: '雨天路滑,注意安全.'
            }, {
                type: 2,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '设备',
                content: '好的'
            }],
            // 表情
            EXPS: []
               
        }
    },
    methods: {
        getEXP: function (pageNow,pageSize) {
            return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
        },
        //发送消息
        sendMsg: function(){
            var _this=this;

            if(this.content==''){
                Toast('请输入消息');
                return;
            }

            this.records.push({
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '您',
                content: this.content
            });

            setTimeout(function(){
                _this.records.push({
                    type: 2,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '设备',
                    content: '你好！'
                });
            },100);

            this.content='';

            this.scrollToBottom();
            //this.focusTxtContent();//聚焦输入框
        
        },
        //聚焦输入框
        focusTxtContent:function(){
            document.querySelector("#txtContent input").focus();
        },
        //滚动条滚动到底部
        scrollToBottom:function(){
            setTimeout(function(){
                var chatlist = document.getElementsByClassName('chatlist')[0];
                chatlist.scrollTop=chatlist.scrollHeight;
            },100);
        },
        //替换表情代码
        replaceFace:function(con){
            var _this=this;
            var exps=this.EXPS;
            for(var i=0;i<exps.length;i++){
                //con = con.replace(new RegExp(exps[i].code,'g'), '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
                con = con.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
            }
            return con;
        },
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop(id) {
            var _this=this;
            setTimeout(() => {
                var chatlist = document.getElementsByClassName('chatlist')[0];
                var oldHeight=chatlist.scrollHeight;

                _this.records.unshift({
                    type: 1,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '游客',
                    content: '你好！13213'
                }, {
                    type: 2,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '客户MM',
                    content: '这里是<a target="_blank" href="https://github.com/taylorchen709/vue-chat">源码</a>13213'
                });

                setTimeout(function(){
                    var newHeight=chatlist.scrollHeight;
                    chatlist.scrollTop=newHeight-oldHeight;
                },100);

                this.$refs.loadmore.onTopLoaded(id);
            }, 1500);
        }
    },
    mounted:function(){
        this.scrollToBottom();
        this.focusTxtContent();
    }
    // updated:function(){
    //     this.scrollToBottom();
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .chatlist {
        position: absolute;
        top: 60px;
        bottom: 48px;
        left: 0px;
        right: 0px;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
    }
    
    .chatlist-bottom {
        bottom: 48px;
    }
    
    .chatlist-bottom-collapse {
        bottom: 198px;
    }
    
    .chatlist ul {
        min-height: 300px;
    }
    
    .chatlist ul .chat-mine {
        text-align: right;
        padding-left: 0;
        padding-right: 60px;
    }
    
    .chatlist ul li {
        position: relative;
        /*font-size: 0;*/
        margin-bottom: 10px;
        padding-left: 60px;
        min-height: 68px;
    }
    
    .chat-mine .chat-user {
        left: auto;
        right: 3px;
    }
    
    .chat-user {
        position: absolute;
        left: 3px;
    }
    
    .chat-text,
    .chat-user {
        display: inline-block;
        vertical-align: top;
        /*font-size: 14px;*/
    }
    
    .chat-user img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
    
    .time {
        width: 100%;
    }
    
    cite {
        left: auto;
        right: 60px;
        text-align: right;
    }
    
    cite {
        font-style: normal;
        line-height: 24px;
        font-size: 12px;
        white-space: nowrap;
        color: #999;
        text-align: left;
    }
    
    cite i {
        font-style: normal;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 12px;
    }
    
    .chat-mine .chat-text {
        margin-left: 0;
        text-align: left;
        background-color: #33DF83;
        color: #fff;
    }
    
    .chat-text {
        position: relative;
        line-height: 22px;
        /*margin-top: 25px;*/
        padding: 10px 15px;
        background-color: #eee;
        border-radius: 3px;
        color: #333;
        word-break: break-all;
        max-width: 462px\9;
    }
    
    .chat-text,
    .chat-user {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
    }
    
    .chat-text img {
        max-width: 100%;
        vertical-align: middle;
    }
    
    .chat-user {
        position: absolute;
        left: 3px;
    }
    
    .chat-text:after {
        content: '';
        position: absolute;
        left: -10px;
        top: 15px;
        width: 0;
        height: 0;
        border-style: solid dashed dashed;
        border-color: #eee transparent transparent;
        overflow: hidden;
        border-width: 10px;
    }
    
    .chat-mine .chat-text:after {
        left: auto;
        right: -10px;
        border-top-color: #33DF83;
    }
    
    .foot {
        width: 100%;
        min-height: 48px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background-color: #F8F8F8;
    }
    
    .foot .con {
        position: absolute;
        left: 40px;
        right: 45px;
    }
    
    .foot .btn-voice {
        width: 40px;
        height: 40px;
        padding: 5px 5px;
        margin-top: 5px;
        position: absolute;
        left: 0px;
        background: url("../../static/imgs/chat/yuyin.png") no-repeat center;
        background-size: 100%;
    }
    
    .foot .selbox {
        height: 150px;
        margin-top: 48px;
        border-top: 1px solid #d9d9d9;
    }
    
    .show {
        display: block;
    }
    
    .hide {
        display: none;
    }
    
    .face-box {
        /* position: absolute; */
        /* top: 48px; */
        /* left: 0px; */
        /* right: 0px; */
        /* bottom: 0px; */
        padding: 15px 15px 0px 15px;
        overflow: hidden;
        width: 290px;
        margin: 0px auto;
        height: 135px;
    }
    
    .face-box li {
        width: 30px;
        float: left;
        padding: 6px 10px 0px 8px;
    }
    
    .btn {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        line-height: 32px;
        margin-left: 5px;
        padding: 0 6px;
        background-color: #33DF83;
        color: #fff;
        border-radius: 3px;
    }
    
    .btn-send {
        position: absolute;
        right: 3px;
        top: 8px;
    }
</style>