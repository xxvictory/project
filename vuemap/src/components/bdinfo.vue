<template>
  <div class="info">
      <p class="title">
          <i></i>
          病毒信息
      </p>
      <div class="content">
          <p class="one-txt-cut">{{info.remark1}}</p>
          <p class="one-txt-cut">{{info.remark2}}</p>
          <p class="one-txt-cut">{{info.remark3}}</p>
          <p class="one-txt-cut">{{info.note1}}</p>
          <p class="one-txt-cut">{{info.note2}}</p>
          <p class="one-txt-cut">{{info.note3}}</p>
      </div>
  </div>
</template>

<script>

export default {
    props:{
        info:{
            type:Object,
            required:true,
            default:function(){
                return {}
            }
        }
    }
}
</script>

<style lang='less' scoped>
.info{
    padding:0 0.16rem;
    background: #fff;
    border-bottom:1px solid #f1f1f1;
    .title{
        font-size:0.17rem;
        i{
            display: inline-block;
            width:0.04rem;
            height:0.16rem;
            margin-right:0.03rem;
            background: #4169e2;
            vertical-align: middle;
        }
    }
    .content{
        padding: 0.06rem 0.16rem;
        p{
            font-size: 13px;
            margin: 5px 0;
        }
    }
}
</style>