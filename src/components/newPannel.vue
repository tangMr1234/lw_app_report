<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd" v-if="header" @click="onClickHeader" v-html="header">
      <slot name="header"></slot>
    </div>
    <div class="weui-panel__bd">
      <slot name="body">
        <template>
          <div class="weui-media-box weui-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <div class="weui-media-box_appmsg">
              <div class="weui-media-box__hd" v-if="item.src">
                <img class="weui-media-box__thumb" @error="onImgError(item, $event)" :src="item.src" alt="">
              </div>
              <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title" v-html="item.title"></h4>
                <p class="weui-media-box__desc" v-html="item.desc"></p>
                <ul class="weui-media-box__info" v-if="item.desc_meta">

                  <li class="weui-media-box__info__meta weui-media-box__desc"
                      v-for="(data, index) in item.desc_meta" :key="index" v-if="index<4"
                      v-html="data.label"></li>
                  <li class="weui-media-box__info__meta" v-if="item.desc_meta.length>4">...</li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<script>
  import {go, getUrl} from '@/utils/pannel'

  export default {
    name: 'panel',
    props: {
      header: String,
      footer: Object,
      list: Array,
      type: {
        type: String,
        default: '1'
      }
    },
    methods: {
      onImgError(item, $event) {
        this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
        if (item.fallbackSrc) {
          $event.target.src = item.fallbackSrc
        }
      },
      getUrl(url) {
        return getUrl(url, this.$router)
      },
      onClickFooter() {
        this.$emit('on-click-footer')
        go(this.footer.url, this.$router)
      },
      onClickHeader() {
        this.$emit('on-click-header')
      },
      onItemClick(item) {
        this.$emit('on-click-item', item)
        go(item.url, this.$router)
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/weui/widget/weui_cell/weui_cell_global';
  @import '~vux/src/styles/weui/widget/weui_cell/weui_access';
  @import '~vux/src/styles/weui/widget/weui_panel/weui_panel';
  @import '~vux/src/styles/weui/widget/weui_media_box/weui_media_box';
</style>
