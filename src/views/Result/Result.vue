<template>
  <div class="details" style="height:100%;">
    <!-- 头部 -->
    <x-header :title="this.$route.name" style="background-color:#409eff;"></x-header>
    <!-- 主体 -->
    <!-- 操作栏目 -->
    <div v-transfer-dom>
      <actionsheet
        v-model="show7"
        :menus="menu7"
        theme="android"
        @on-click-menu="click"
        @on-after-hide="log('after hide')"
        @on-after-show="log('after show')">
      </actionsheet>
    </div>
    <div v-transfer-dom>
      <popup v-model="show13" style="height:60%;overflow:hidden;">
        <group :gutter="0">
          <cell>
            <div slot="icon" @click="show13=false">关闭</div>
            <div slot="title">
              <x-input v-model="search_sn" novalidate :icon-type="iconType" placeholder="请输入要查找的设备号"
                       style="margin:0 20px;background:#eee;">
              </x-input>
            </div>
            <div slot="default">
              <x-button slot="right" type="primary" @click.native="search" mini>搜索</x-button>
            </div>
          </cell>
        </group>

        <div style="height:calc(100% - 60px);overflow-x:hidden;">
          <group :gutter="10">
            <radio :options="options"></radio>
          </group>
          <div style="padding: 15px;">
            <x-button @click.native="show12 = false" type="primary">确认打印</x-button>
          </div>
        </div>

      </popup>
    </div>
    <!-- 展示 -->
    <b-scroll class="wrapper" style="height:calc(100% - 46px);">
      <div class="content">
        <a @click="show7=true">111</a>
        <!-- 加载组件 -->
        <component :is="item.component" :text="item.text" v-for="(item, index) in items" :key="index"
                   style="margin:20px 0;"></component>
      </div>
    </b-scroll>
  </div>
</template>

<script type="es6">
  import {XHeader, Actionsheet, Popup, Group, Cell, XButton, XInput, Radio, TransferDom} from 'vux'
  import aComponent from '@/views/Result/Grid.vue'
  import bComponent from '@/views/Result/Curve.vue'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      Popup,
      Group,
      Cell,
      XButton,
      XInput,
      Radio,
      TransferDom,
      aComponent,
      bComponent
    },
    data() {
      return {
        items: [{
          component: 'a-component',
          text: "1"
        }, {
          component: 'b-component',
          text: "2"
        }],
        show7: false,
        menu7: {
          menu1: '导出excel',
          menu2: '导出PDF',
          menu3: '普通打印',
          menu4: '便携式打印'
        },
        show13: false,
        options: [{
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '001',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '011',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '0201',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '0301',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '1001',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '0041',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '0051',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '00531',
          value: '便携式001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '03501',
          value: '便携式0099'
        }],
        search_sn: "", //搜索输入框的值
        iconType: "", //搜索框错误的图标
      }
    },
    methods: {
      click(key) {
        if (key == "menu4") {
          this.show13 = true;
        }
      },
      //  搜索打印机编号
      search() {
        if (this.search_sn != "") {
          this.iconType = '';
        } else {
          this.iconType = 'error';
        }
      }
    },
    mounted() {
      this.loadingRemove();
    }
  }
</script>

<style scoped lang="less">

</style>
