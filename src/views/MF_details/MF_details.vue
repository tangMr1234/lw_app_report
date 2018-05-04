<template>
  <div class="details" style="height:100%;">
    <!-- 头部 -->
    <x-header :title="this.$route.name" style="background-color:#409eff;"></x-header>
    <!-- 主体 -->
    <b-scroll class="wrapper" style="height:calc(100% - 46px);">
      <div class="content">
        <!-- 单位与设备选择 -->
        <group title="111">
          <popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"
                        show-name></popup-picker>
        </group>
        <!-- 日期选择 -->
        <group>
          <calendar v-model="star_time" title="开始日期" disable-future></calendar>
          <calendar v-model="end_time" title="结束日期" disable-future></calendar>
        </group>
        <!-- 模板选择 -->
        <group>
          <cell title="请选择模板" :value="selected_mb" is-link @click.native="show"></cell>
        </group>
        <!-- 展示字段选择 -->
        <box gap="30px 0">
          <divider>需要展示和操作的字段</divider>
          <div class="box">
            <checker
              v-model="demo1"
              type="checkbox"
              default-item-class="demo5-item"
              selected-item-class="demo5-item-selected"
            >
              <checker-item v-for="i in 10" :key="i" :value="i" style="margin-top:10px;">{{['good']+i}}
              </checker-item>
            </checker>
          </div>
        </box>
        <!-- 查询按钮 -->
        <box gap="30px 10px">
          <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="search">查询</x-button>
        </box>
      </div>
    </b-scroll>
    <!-- 弹出的选择模板 -->
    <div v-transfer-dom>
      <popup v-model="show1" style="height:calc(100% - 46px);">
        <div style="height:100%;overflow: hidden;">
          <v-details style="height:100%;overflow: hidden;" @reset="show" @select_mb="listen_select_mb"></v-details>
        </div>
      </popup>
    </div>
  </div>
</template>

<script type="es6">
  import {
    TransferDom,
    PopupPicker,
    Calendar,
    Checker, CheckerItem,
    Box,
    XButton,
    Divider,
    Popup,
    XHeader,
    Group,
    Cell,
    Loading
  } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      PopupPicker, Calendar, Checker, CheckerItem, Box, XButton, Divider, Popup, XHeader, Group, Cell, Loading,
      VDetails:
        resolve => {
          require(['@/views/Vaccin_Details/Vaccin_Details.vue'], resolve)
        }
    },
    data() {
      return {
        title3: '请选择冷链装备',
        list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }, {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        }, {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        }, {
          name: '广西001',
          value: 'gx001',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'gx002',
          parent: 'china002'
        }, {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        }, {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        }, {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        }, {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }],
        value3: [],

        star_time: 'TODAY',
        end_time: 'TODAY',

        selected_mb: '',

        demo2: true,

        demo1: [],

        show1: false,
      }
    },
    methods: {
      //打开详情页
      show() {
        this.show1 = !this.show1;
      },
      //  子组件传递过来的选中的值
      listen_select_mb(select) {
        this.selected_mb = select;
      },
      //  查询结果
      search() {
        this.$router.push('/result');
      }
    },
    mounted() {
      this.loadingRemove();
    }
  }
</script>

<style scoped lang="less">
  .card-padding {
    padding: 15px;
  }

  .box {
    padding: 0 15px;
  }

  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }

  .demo1-item-selected {
    border: 1px solid green;
  }

  .demo5-item {
    width: 31%;
    min-width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .demo5-item-selected {
    background: #ffffff url(../../assets/checker-active.png) no-repeat right bottom;
    border-color: #ff4a00;
  }
</style>
