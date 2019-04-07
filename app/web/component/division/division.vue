<template>  
<div>
    <a v-if="index%2==0" class="ad" href="www.bilibili.com"><img :src="'public/ad'+index+'.jpg'"> </a>
    <div class="division">
        <div v-if="index==0" class="division-item">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-fanjutuijian" ></use></svg><span>番剧</span>
        </div>
        <div v-if="index==1" class="division-item">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-dianshiju"></use></svg><span>电视剧</span>
        </div>
        <div v-if="index==2" class="division-item">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-zhibo"></use></svg><span>电影</span>
        </div>
        <div v-if="index==3" class="division-item">
              <svg class="icon" aria-hidden="true"><use xlink:href="#icon-youxi"></use></svg><span>游戏</span>
        </div>
        <div v-if="index==4" class="division-item">
              <svg class="icon" aria-hidden="true"><use xlink:href="#icon-guochandonghuatuijian"></use></svg><span>国产</span>
        </div>
        
    </div>
</div>
</template>

<script>
import iconfont from '../../asset/css/iconfont/iconfont.js'
export default {
    name:"division",
    props:['index']
}
</script>

<style scoped>

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
    font-size: 40px;
    margin-left: 10px;
    margin-right: 10px;
}
 .division {
    width: 1000px;
    height: 50px; 
}
.division-item{
    display: flex;
    justify-content: flex-start;
    align-items: center ;
}
span{
    font-size: 25px;
}
.ad{
    width:1000px;
    height: 90px;
    display: block;
    border-radius: 5px;
    margin-bottom: 10px;
}
.ad img{
        height:100%;
        width:100%;
    }
  
</style>
