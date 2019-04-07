<template>
    <div >
      <div class='content-top'>
           <div ><swiper :swiperList="swiperList" /></div>
           <ul>
          <router-link tag="a" :to="'/detail/'+item.id" class='video-item' v-for="item in videoList.slice(0,6)" :key="item.index">

              <div class='video-img'>
                <img class="video-img-image" :src="item.imgSrc.split('@')[0]"> 
              </div>
            <div class="video-allinfo">
           <span class="video-desc"> {{item.desc}}</span>
            <div class="video-info">
                 <div class="play-count">播放：{{item.playCount}}</div>
                <div class="comment-count">评论：{{item.commentCount}}</div>
            </div>
          </div>
          </router-link>
           </ul>
        </div>

        <div class="content">
          <ul>
            <div v-for="item in videoList" :key="item.index" >
              <division v-if="item.id%6==0" :index="item.id/6"></division>
             <div  v-else class='video-item'>
            <router-link tag="a" :to="'detail/detail/'+item.id"  >
              <div class='video-img'>
                  <img class="video-img-image" :src="item.imgSrc.split('@')[0]"> 
                  <div class="video-info2">
                     <div class="play-count">播放：{{item.playCount}}</div>
                     <div class="comment-count">评论：{{item.commentCount}}</div>
                  </div>
               </div>
                <div class="video-desc2">{{item.desc}}</div>
            </router-link>
            </div>
           </div>
          </ul>
        </div>
    </div>
</template>
<style  scoped >
@import url(./list.css);
</style>
<script type="text/babel">
import swiper from '../../../../component/swiper/swiper'
import division from '../../../../component/division/division'
  export default{
    components:{
      swiper,
      division
    },
    computed: {

      swiperList(){
        return this.$store.state.swiperList;
      },
      videoList(){
        return this.$store.state.videoList;
      }
    },
    preFetch ({ state, dispatch, commit }) {
      return Promise.all([
        dispatch('FETCH_VIDEO_LIST'),
        dispatch('FETCH_SWIPER_LIST')
      ])
    },
    beforeMount() {
      return Promise.all([
        this.$store.dispatch('FETCH_VIDEO_LIST'),
        this.$store.dispatch('FETCH_SWIPER_LIST')
      ]);
    },

  }
</script>
