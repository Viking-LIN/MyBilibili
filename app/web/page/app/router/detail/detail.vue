<template>
  <div class="detail">
    <div class="detail-main">
    <span class="title">{{video.videoTitle}}</span>
    <div class="info">
      <p>上传者 ：{{video.author}}&nbsp; 上传日期：{{video.date}}</p>
      <p>播放量 ：{{video.playCount}}&nbsp;&nbsp;  评论数：{{video.commentCount}}</p>
    </div>
    <div class="video-area">
    <video controls><source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></video>
    </div>
         <comment />
    </div>
     <recommand :recommand="recommand" /> 

  </div>
</template>
<style scoped>
@import url(./detail.css);
</style>
<script type="text/babel">

 import recommand from '../../../../component/recommand/recommand'
  import comment from '../../../../component/comment/comment'
 import Vue from 'vue';
import Vuex from 'vuex';
  export default{
    name:'detail',
    components:{
       recommand,
       comment
    },
     computed: {
      // video() {
      //   return this.$store.state.video;
      // },
      // recommand(){
      //   return this.$store.state.recommand;
      // },
      ...Vuex.mapState({
        video:"video",recommand:"recommand",comment:"comment"
      })
    },
    preFetch({ state, dispatch, commit }) {
      const { id } = state.route.params;
  
      return Promise.all([
        dispatch('FETCH_VIDEO_DETAIL', { id }),
        dispatch('FETCH_RECOMMAND', { id }),
            dispatch('FETCH_COMMENT', { id })
      ]);
    },
    beforeMount() {
      const { id } = this.$store.state.route.params;
      return Promise.all([
        this.$store.dispatch('FETCH_VIDEO_DETAIL', { id }),
        this.$store.dispatch('FETCH_RECOMMAND' , { id }),
             this.$store.dispatch('FETCH_COMMENT' , { id })
      ]);
    },
    
  }
</script>
