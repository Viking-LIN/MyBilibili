

'use strict';

const Service = require('egg').Service;

class SwiperService extends Service {
  async getSwiperList() {
    
    //通过抓取接口返回数据

    // curl的方法可以获取远程的数据


    
 var api ="https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList";

    var response=await this.ctx.curl(api);

    // console.log(response.data); // 返回的是Buffer

    var data=JSON.parse(response.data);    //把Buffer类型转转换成对象

     
    return data.data;

  }

}

module.exports = SwiperService;
