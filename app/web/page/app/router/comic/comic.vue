<template>
 <div class="maindiv">
   <div class = "comicdiv">
     <div class="comicBar"> 
       <div>番剧列表</div>
       <div class="sort">
         <li @click="updateSort('score')">
           <i :class="'iconfont icon-caretup'+(sortIndex===1&&sortType==='score'?' active':'')" ></i>
           <span>评分顺序</span>
           <i :class="'iconfont icon-caretdown '+(sortIndex===0&&sortType==='score'?'active':'')" ></i>
          </li >
           <li @click="updateSort('follow')">
           <i :class="'iconfont icon-caretup'+(sortIndex===1&&sortType==='follow'?' active':'')" ></i>
           <span>追番人数</span>
           <i :class="'iconfont icon-caretdown '+(sortIndex===0&&sortType==='follow'?'active':'')" ></i>
          </li >
          <li @click="updateSort('play')">
           <i :class="'iconfont icon-caretup'+(sortIndex===1&&sortType==='play'?' active':'')" ></i>
           <span>播放数量</span>
           <i :class="'iconfont icon-caretdown '+(sortIndex===0&&sortType==='play'?'active':'')" ></i>
          </li >
        </div>
     </div>
     <ul class="bangumi-list clearfix">
         <li v-for="item in comics" :key="item.id"  class="bangumi-item">
             <a :href="item.link" target="_blank" class="cover-wrapper">
                 <div class="common-lazy-img">
                      <img alt="" :src="item.cover+'@480w_300h.webp'" lazy="loaded"> 
                 </div>
                 <div class="score">{{item.order.score}}</div>
                 <div class="num" v-if="sortType==='follow'">{{item.order.follow}}</div>
                 <div class="num" v-else>{{item.order.play}}</div>
             </a>
             <a :href="item.link"  target="_blank" class="bangumi-title">{{item.title}}</a>
         </li>
     </ul>
     </div>
     <div class="filter">
       <h4>筛选</h4>  
         <div class="finish"> 
           <span>状态:</span>
            <li @click="updateFinish(-1)" :class="is_finish==-1?'active':''">全部</li>
            <li @click="updateFinish(0)" :class="is_finish==0?'active':''">未完结</li>
            <li @click="updateFinish(1)" :class="is_finish==1?'active':''">已完结</li>
         </div>
     </div>
 </div>
</template>
<style scoped>
@import url(./comic.css);
@import url(../../../../asset/css/iconfont/iconfont.css);
</style>
<script type="text/babel">
 import Vue from 'vue';
import Vuex from 'vuex';
  export default{
    name:"comic",
    data:function(){
      return {'is_finish':-1,'sortIndex':-1,'sortType':''}
    },
    computed: {
      comicList() {
        return this.$store.state.comicList;
      },
      comics(data){
        return this.$store.getters.findcomics(data.is_finish,data.sortIndex,data.sortType);
      }
    },
    methods:{
      updateFinish(newdata){
          this.is_finish = newdata;
      },
      updateSort(sortType){
        this.sortType = sortType;
        this.sortIndex = (this.sortIndex+1)%2;
      }
    },
    preFetch ({ state, dispatch, commit }) {
      return Promise.all([
        dispatch('FETCH_COMIC_LIST')
      ])
    },
    beforeMount() {
      return Promise.all([
        this.$store.dispatch('FETCH_COMIC_LIST')
      ]);
    }
  }
</script>
