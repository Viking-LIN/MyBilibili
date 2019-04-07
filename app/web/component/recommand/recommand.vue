<template>
    <div class="recommand-panel">
        <h4>相关推荐</h4>
         <div class="recommand-item" v-for="item in recommand" :key="item.index">
        <a href="#" class="item-cover" >
            <img :src="item.imgSrc">
            <span class="duration">{{item.duration}}</span>
        </a>

        <div class="item-info">
            <a href="#" class="small-title "> {{item.title}}</a>
            <div class="recommand-info">
            <span>播放：{{item.playMsg}}万次</span><br>
             <span>评论：{{item.commentCount}}</span>
            </div>
        </div>
        </div>
    </div> 
</template>

<script>

export default {
    name:'recommand',
     props:['recommand']
}
</script>

<style scoped>
    @import url(./recommand1.css);
</style>


