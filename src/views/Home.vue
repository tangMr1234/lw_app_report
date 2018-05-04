<template>
  <div class="xHeaderRight" style="height:100%;">
    <router-view></router-view>
  </div>
</template>

<script type="es6">

  export default {
    components: {},
    data() {
      return {}
    },
    methods: {
      //设置底栏高亮项
      active() {
        return '/' + this.$route.path.split("/")[1];
      },
    },
    mounted() {

    }
  }
</script>
<style>

</style>
