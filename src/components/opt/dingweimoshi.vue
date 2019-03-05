<template>
<div>
    <capHeader :caption="caption"></capHeader>
    <div class="page-picker-wrapper">
        <mt-picker :slots="intervalSlot" @change="onYearChange"
        :visible-item-count="5"></mt-picker>
    </div>
    <p class="page-picker-desc">定位模式:{{ interval }}</p>
    <div class="center">
     <img src="../../static/imgs/opt/ok.png" class="center" @click="call" height="48px" width="48px">
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            caption:"定位模式",
            intervalSlot: [{
                flex: 1,
                values: ['1分钟一次定位', '5分钟一次定位', '10分钟一次定位', '30分钟一次定位', '1小时一次定位'],
                className: 'slot1'
            }],
            interval:''
        }
    },
    methods:{
        call(){
            console.log(11111111);
        },
        onYearChange(picker, values) {
            this.interval = values[0];
        },
    }
}
</script>
<style scoped>
.center{
    text-align: center;
    background-color:white
}
</style>
