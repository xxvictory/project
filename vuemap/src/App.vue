<template>
  <div id="app">
    <div>
      <img src="./assets/1.jpg" alt />
    </div>
    <!-- 病毒信息 -->
    <bdinfo :info='info' />
    <!-- 全国统计数据 -->
    <tongji :count='count' />
    <!-- 地图 -->
    <mymap />
    <!-- 趋势 -->
    <qushi />
    <!-- 新闻 -->
    <news :news='news' />
    <!-- 尾部图片 -->
    <div>
      <img src="./assets/2.jpg" alt="">
    </div>
  </div>
</template>

<script>
import bdinfo from "./components/bdinfo";
import tongji from './components/Ttongji'
import mymap from './components/mymap'
import qushi from './components/qushi'
import news from './components/news'
import {getncov} from './api/index'
export default {
  name: "App",
  components: {
    bdinfo,
    tongji,
    mymap,
    qushi,
    news
  },
  data() {
    return {
      info: {
        remark1: "",
        remark2: "",
        remark3: "",
        note1: "",
        note2: "",
        note3: ""
      },
      count:{
        time:'',
        currentConfirmedCount:'',
        confirmedCount:'',
        suspectedCount:'',
        curedCount:'',
        deadCount:'',
        seriousCount:'',
        suspectedIncr:'',
        currentConfirmedIncr:'',
        confirmedIncr:'',
        curedIncr:'',
        deadIncr:'',
        seriousIncr:''
      },
      news:[]
    };
  },
  mounted() {
    getncov().then(data => {
      console.log(data);
      let desc = data.data.newslist[0].desc;
      // 病毒信息
      this.info.remark1 = desc.remark1;
      this.info.remark2 = desc.remark2;
      this.info.remark3 = desc.remark3;
      this.info.note1 = desc.note1;
      this.info.note2 = desc.note2;
      this.info.note3 = desc.note3;

      // 统计数据
      this.count.time= desc.modifyTime;
      this.count.currentConfirmedCount = desc.currentConfirmedCount;
      this.count.confirmedCount=desc.confirmedCount;
      this.count.suspectedCount = desc.suspectedCount;
      this.count.curedCount = desc.curedCount;
      this.count.deadCount = desc.deadCount;
      this.count.seriousCount = desc.seriousCount;
      this.count.suspectedIncr = desc.suspectedIncr;
      this.count.currentConfirmedIncr = desc.currentConfirmedIncr;
      this.count.confirmedIncr=desc.confirmedIncr;
      this.count.curedIncr = desc.curedIncr;
      this.count.deadIncr = desc.deadIncr;
      this.count.seriousIncr = desc.seriousIncr;
      // 新闻数据
      this.news = data.data.newslist[0].news;
    });
  }
};
</script>

<style>
</style>
