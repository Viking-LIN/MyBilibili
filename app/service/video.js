'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
    async getVideoList() {

        var api ="https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList"
    
        var response=await this.ctx.curl(api);

        var data=JSON.parse(response.data);    //把Buffer类型转转换成对象
    
        return data.data;
    
      }
      async getVideoDetail(id ) {
        var api ="https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+id;

        var response=await this.ctx.curl(api);

        var data=JSON.parse(response.data);  
        return data.data;
      }
      async getRecommand() {
        var api ="https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList";

        var response=await this.ctx.curl(api);

        var data=JSON.parse(response.data);  

        return data.data;
      }
}

module.exports = VideoService;
