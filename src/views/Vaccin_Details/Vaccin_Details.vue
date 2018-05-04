<template>
  <div style="height:100%;">
    <group :gutter="0">
      <cell title="请选择模板">
        <div slot="default" @click="$emit('reset');">
          <x-icon type="ios-close-outline" style="fill:red;"></x-icon>
        </div>
      </cell>
    </group>
    <b-scroll class="wrapper" style="height: calc(100% - 49px);">
      <div class="content">
        <!-- 选择列表 -->
        <group v-for="(data, index) in app_data" :key="index" :gutter="(index===0)?20:5"
               @click.native="select_mb($event, data.title)">
          <flexbox :gutter="20">
            <flexbox-item :span="2/5"><img :src="data.src" @click="show(index)" class="previewer-demo-img"
                                           style="width:100%;" alt=""></flexbox-item>
            <flexbox-item>
              <h2 style="font-size:22px;">{{data.title}}</h2>
              <div>{{data.content}}</div>
            </flexbox-item>
          </flexbox>
        </group>
        <group>
          <swiper :options="swiperOptionTab" ref="mySwiperTab">
            <swiper-slide>
              <cell is-link>
                <div slot="title" style="color:deepskyblue;">海量模板与模板管理，请至应用中心模板区</div>
                <div slot="default">去选择</div>
              </cell>
            </swiper-slide>
          </swiper>
        </group>
      </div>
    </b-scroll>
    <!-- 打开大图 -->
    <div v-transfer-dom>
      <previewer :list="app_data" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script type="es6">
  import {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Previewer,
    TransferDom
  } from 'vux'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {getMessage} from '@/api/api';

  export default {
    directives: {
      TransferDom
    },
    components: {
      Flexbox, FlexboxItem, Group, Cell, swiper, swiperSlide, Previewer
    },
    data() {
      return {
        options: {
          getThumbBoundsFn(index) {
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }, //打开大图的初始化配置
        //tab轮播初始化
        swiperOptionTab: {
          autoplay: false,
          slidesPerView: 1,
          allowTouchMove: false, //禁止滑动、滚动
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
        },
        app_data: [], //数据
      }
    },
    //获取swiper对其进行操作
    computed: {
      swiper() {
        return this.$refs.mySwiperTab.swiper
      }
    },
    methods: {
      show(index) {
        this.$refs.previewer.show(index)
      },
      logIndexChange(arg) {
        console.log(arg)
      },
      load_Data() {
        this.app_data = [
          {
            id: 1,
            src: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            msrc: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            title: "模板一",
            content: "没有某项功能的模板"
          }, {
            id: 1,
            src: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            msrc: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            title: "模板二",
            content: "没有某项功能的模板"
          }, {
            id: 1,
            src: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            msrc: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            title: "模板三",
            content: "没有某项功能的模板"
          }, {
            id: 1,
            src: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            msrc: "//pic.qiantucdn.com/58pic/27/71/82/97S58PICtkM_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            title: "模板四",
            content: "没有某项功能的模板"
          },
        ]
      },
      //  选择模板
      select_mb(event, param) {
        if (event.srcElement.localName != "img") {
          this.$emit('select_mb', param);
          this.$emit('reset');
        }
      }
    },
    mounted() {
      this.load_Data();
      this.loadingRemove(); //  使用main中的全局方法关闭loading
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">

</style>
