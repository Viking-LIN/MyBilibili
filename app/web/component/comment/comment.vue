<template>
    <div class="comment-div">
            <div class="summitdiv">
              <textarea class="textarea" cols="80" name="msg" rows="5" v-model="text" ></textarea>
              <button class="summit" @click="summitComment()">发表评论</button>
          </div>
          <div class="comment-sum">评论：{{comment.commentTotalCount}}</div>
          <div class="comment-content">
              <li class="comment-item " v-for="item in comment.commentList" :key="item.index">
                  <img class="headicon" :src="item.userIconSrc">
                  <div class="comment-infos">
                      <span class="username">{{item.username}}</span>
                      <span class="commentDate">{{item.commentDate}}</span>
                      <div class="commentInfo">{{item.commentInfo}}</div>
                  </div>

              </li>
          </div>
    </div>

</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
  export default{
    name:'comment',
    data:function(){
        return { 'text':'' }
    },
     computed: {
      ...Vuex.mapState({
        comment:"comment"
      })
    },
    methods:{
        summitComment(){
            var textS = this.text;
            this.$store.dispatch('SUMMIT_COMMENT',{textS});
            this.text='';
        }
    },
    preFetch({ state, dispatch, commit }) {
      const { id } = state.route.params;
      return Promise.all([
        dispatch('FETCH_COMMENT', { id })
      ]);
    },
    beforeMount() {
      const { id } = this.$store.state.route.params;
      return Promise.all([
         this.$store.dispatch('FETCH_COMMENT' , { id })
      ]);
    },
    
  }
</script>

<style scoped>
    @import url(./comment.css);
</style>
