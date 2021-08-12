<template>
  <div class="divider-wrap">
    <span class="name">{{title}}</span>
    <span class="divider"></span>
  </div>
</template>
<script>
export default {
  name:'Divider',
  props:{
    title:{
      type:String,
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  .divider-wrap{
    padding:20px 0;
    display:flex;
    align-items: center;
    .name{
    color:#4a83d6;
    margin-right:25px;
  }
  .divider{
    flex:1;
    height:2px;
    width:100%;
    background-color:#4a83d6;
  }
  }

</style>