<template>
  <div style="width:100%;height: 100%;overflow: hidden;">
    <x-header slot="header" :title="this.$route.name" @on-click-back="goBack" :left-options="{preventGoBack: true}"
              style="background-color:#409eff;">
    </x-header>
    <!-- 面板 -->
    <b-scroll class="wrapper" style="height:calc(100% - 46px);overflow-x:hidden;background:#eee;">
      <div class="content" style="width:92%;margin:0 auto;padding-bottom:10px;">
        <group :gutter="10" style="box-shadow: 0 0 5px #ddd;" v-for="(data, index) in data" :key="index"
               @click.native="goList(data.link)">
          <cell>
            <div slot="title" style="padding: 10px 0;">
              <b style="font-size:18px;color:#333;">{{data.title}}</b>
              <div style="color:#999;margin-top:8px;">
                <p style="margin-bottom:8px;">{{data.comment}}</p>
              </div>
            </div>
            <div slot="default">
              <img :src="data.src" style="width:60px;"
                   alt="">
            </div>
          </cell>
        </group>
      </div>
    </b-scroll>
  </div>
</template>

<script type="es6">
  import {Group, Cell, XHeader} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XHeader
    },
    data() {
      return {
        data: [
          {
            id: '1',
            title: "历史温度一览表",
            comment: "查看所有保温箱温度状态信息",
            src: "http://pic.qiantucdn.com/58pic/17/60/31/59t58PIC4dw_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            link: "mf_details"
          },
          {
            id: '2',
            title: "装备一览表",
            comment: "查看所有保温箱位置",
            src: "//pic.qiantucdn.com/58pic/27/02/56/43i58PICSXe_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS40LnBuZw==/align/center",
            link: "mf_details"
          },
          {
            id: '3',
            title: "设备一览表",
            comment: "查看所有保温箱订单",
            src: "//pic.qiantucdn.com/58pic/27/02/56/25b58PICmsq_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS40LnBuZw==/align/center",
            link: "mf_details"
          },
          {
            id: '4',
            title: "管理评估表",
            comment: "查看所有保温箱订单",
            src: "//pic.qiantucdn.com/58pic/26/65/14/99z58PICjXD_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0",
            link: "mf_details"
          },
          {
            id: '5',
            title: "设备评分表",
            comment: "查看所有保温箱订单",
            src: "//pic.qiantucdn.com/58pic/19/87/10/55f68752a32c9_1024.jpg!/fw/780/watermark/url/l3dhdgvybwfyay12ms4zlnbuzw==/align/center/crop/0x1009a0a0",
            link: "mf_details"
          }
        ]
      }
    },
    mounted() {
      if (!sessionStorage.getItem('warn')) {
        this.alert("提示", "试用应用的演示数据，仅供APP体验，试用期间该弹窗可暂时关闭！", "知道了", this.setSession); //使用main中的全局方法调用弹窗
      }
      this.loadingRemove();
    },
    methods: {
      //设置sessionstorage来打开warn弹窗
      setSession() {
        sessionStorage.setItem('warn', 'yes');
      },
      //  通过postMessage调用iframe父组件的方法
      goBack() {
        let link = parent.window.location.href.split("#");
        window.parent.postMessage('closeLwFrame', link[0]);
      },
      //  打开列表页
      goList(link) {
        sessionStorage.setItem("BWX_openListt", link); //设置sessionStorage请求不一样的列表详情页
        this.$router.push(link);
      }
    }
  }
</script>
