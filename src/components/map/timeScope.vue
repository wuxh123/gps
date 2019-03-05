<template>
<div>
     <capHeader :caption="caption"></capHeader>
    <div class="page-radio-wrapper">
      <mt-radio class="page-part" 
        title="请选择查询范围"
        v-model="value1"
        :options="options1">
      </mt-radio>
      </div>
      <div v-if='value1=="自定义"'>
       <mt-field placeholder="开始时间" :attr="{maxlength: 10}" v-model="username" > <mt-button size="small" type="primary">选择</mt-button></mt-field>
       <mt-field placeholder="结束时间" :attr="{maxlength: 10}" v-model="username" > <mt-button size="small" type="primary">选择</mt-button></mt-field>
      </div>
      <mt-button  size="large" type="primary">查询</mt-button>
</div>
</template>
<script>
    export default{
        data(){
            return{
                value1: '',
                caption:"历史轨迹"
            }
        },
        created(){
            this.options1 = ['今日', '昨日', '自定义'];
        }

    }
</script>
<style scoped>
</style>
