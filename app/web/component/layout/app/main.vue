<template>
   <div>
     <LayoutHeader />
     <LayoutTabBar />
     <LayoutContent>
       <div slot="content"><slot name="main"></slot></div>
     </LayoutContent>
   </div>
</template>
<style>
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutTabBar from './tabbar/tabbar';
  import LayoutContent from './content/content';
  export default{
    components: {
      LayoutHeader,
      LayoutTabBar,
      LayoutContent,
      
    }
  }
</script>
