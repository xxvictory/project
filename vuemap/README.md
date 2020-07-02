1. 管理接口
    专门创建一个接口文件，管理所有的接口，方便维护
    base.js ：专门管理接口地址的
    index.js: 专门定义请求方法的
2. 安装 less-loader，就可以使用less
3. 让eslint不检测代码
    创建vue.config.js配置文件，添加一个属性
        lintOnSave:false
4. 使用echarts图表，展示地图
    - 安装：npm i -S echarts
    - 引入echarts，引入中国地图(china.js)
5. 轮播图
    - 安装：npm install swiper vue-awesome-swiper --save
    - 全局配置
        import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/css/swiper.css'
        Vue.use(VueAwesomeSwiper)
    - swiper的方法
        -slideTo() :控制Swiper切换到指定slide
        -slideChangeTransitionEnd:回调函数，swiper从一个slide过渡到另一个slide结束时执行,能获取到当前活动的slide下标
