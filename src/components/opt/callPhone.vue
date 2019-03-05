
<template>
<div>
    <capHeader :caption="caption"></capHeader>
    <mt-field label="电话:" placeholder="输入电话" type="tel" v-model="phoneNo"></mt-field>
    <div class="center">
     <img src="../../static/imgs/opt/dianhua.png" class="center" @click="call" height="48px" width="48px">
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            phoneNo:'13000000001',
            caption:'紧急电话'
        }
    },
    props: {
    },
    methods:{
        call(){
            console.log(11111111);
        }
    }
}
</script>
<style scoped>
.center{
    text-align: center;
    background-color:white
}
</style>