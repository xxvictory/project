<template>
  <div class="swiperBox">
    <swiper class="swiper1" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <ToPolyline/>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>
    <ul class="navigator">
      <li @click="getIndex(0)" class='navigatorItem' :class="{active:cur == 0}">新增疑似/新增确诊</li>
      <li class='navigatorItem'  @click="getIndex(1)" :class="{active:cur == 1}">现存确诊/现存疑似</li>
      <li class='navigatorItem'  @click="getIndex(2)" :class="{active:cur == 2}">死亡/治愈</li>
      <li class='navigatorItem'  @click="getIndex(3)" :class="{active:cur == 3}">病死率</li>
      <li class='navigatorItem'  @click="getIndex(4)" :class="{active:cur == 4}">治愈率</li>
    </ul>
  </div>
</template>

<script>
  import ToPolyline from './ToPolyline'
export default {
  components: {
    ToPolyline
  },
  data() {
    return {
      swiperOptions: {
        on: {
          slideChangeTransitionEnd: ()=> {
            this.cur = this.swiper.activeIndex;
          }
        }
      },
      cur: 0
    };
  },

  methods: {
    getIndex(index) {
      this.cur = index;
      this.swiper.slideTo(index, 300);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>

<style>
.swiperBox {
  margin: 20px 0;
  height: 300px;
}
.swiper1 {
  height: 280px;
}

.navigator {
    font-size: 0.12rem;
    list-style: none;
    display: flex;
    padding: 0 0.16rem;
    justify-content: center;
    margin: 0.06rem 0 0;
}
.navigatorItem {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
    width: calc(20  - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
    margin-left: 0.025rem;
}
.active {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
}
</style>
