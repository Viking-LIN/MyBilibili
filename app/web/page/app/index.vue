<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </Layout>
</template>
<script type="text/babel">
  import Layout from 'component/layout/app/index.vue';
  export default {
    components: {
      Layout
    },
    mounted(){

    }
  }
</script>
