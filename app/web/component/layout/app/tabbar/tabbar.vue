<template>
    <div id='tabbar'>
            <ul>
                <a href="http://www.bilibili.com">
                    <i class="iconfont icon-tv"></i>
                    <p>首页</p>
                </a>
                <router-link tag="li" to='/list'>
                    <i class="iconfont icon-tv"></i>
                    <p>动画</p>
                </router-link>
                <router-link tag="li" to='/comic'>
                    <i class="iconfont icon-tv"></i>
                    <p>番剧</p>
                </router-link>
                <router-link tag="li"  to='/detail4'>
                    <i class="iconfont icon-tv"></i>
                    <p>国创</p>
                </router-link>
                <router-link tag="li"  to="/detail/5">
                    <i class="iconfont icon-tv"></i>
                    <p>音乐</p>
                </router-link>
                <router-link tag="li"  to="/detail/6">
                    <i class="iconfont icon-tv"></i>
                    <p>舞蹈</p>
                </router-link>
                <router-link tag="li"  to="/detail/7">
                    <i class="iconfont icon-tv"></i>
                    <p>游戏</p>
                </router-link>
                <router-link tag="li"  to="/detail/8">
                    <i class="iconfont icon-tv"></i>
                    <p>科技</p>
                </router-link>
                <router-link tag="li"  to="/detail/9">
                    <i class="iconfont icon-tv"></i>
                    <p>数码</p>
                </router-link>
                <router-link tag="li"  to="/detail/10">
                    <i class="iconfont icon-tv"></i>
                    <p>生活</p>
                </router-link>
                <router-link tag="li"  to="/detail/11">
                    <i class="iconfont icon-tv"></i>
                    <p>鬼畜</p>
                </router-link>
                <router-link tag="li"  to="/detail/12">
                    <i class="iconfont icon-tv"></i>
                    <p>时尚</p>
                </router-link>
                <router-link tag="li"  to="/detail/13">
                    <i class="iconfont icon-tv"></i>
                    <p>广告</p>
                </router-link>
                <router-link tag="li"  to="/detail/14">
                    <i class="iconfont icon-tv"></i>
                    <p>娱乐</p>
                </router-link>
                <router-link tag="li"  to="/detail/15">
                    <i class="iconfont icon-tv"></i>
                    <p>影视</p>
                </router-link>
                <router-link tag="li"  to="/detail/16">
                    <i class="iconfont icon-tv"></i>
                    <p>放映厅</p>
                </router-link>
                <router-link tag="li"  to="/detail/17">
                    <i class="iconfont icon-tv"></i>
                    <p>专栏</p>
                </router-link>
                <router-link tag="li"  to="/detail/18">
                    <i class="iconfont icon-tv"></i>
                    <p>广场</p>
                </router-link>
                <router-link tag="li"  to="/detail/19">
                    <i class="iconfont icon-tv"></i>
                    <p>直播</p>
                </router-link>
                <router-link tag="li"  to="/detail/20">
                    <i class="iconfont icon-tv"></i>
                    <p>小黑屋</p>
                </router-link>
            </ul>
    </div>    
</template>

<script>
export default {
        name:'TabBar'
}
</script>

<style scpped>
@import "../../../../asset/css/iconfont/iconfont.css";
@import "./tabbar.css";
</style>
