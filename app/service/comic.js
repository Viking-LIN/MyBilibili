

'use strict';

const Service = require('egg').Service;

class ComicService extends Service {
  async getVideosList() {
    
    //通过抓取接口返回数据

    // curl的方法可以获取远程的数据


     var api="bangumi.bilibili.com/media/web_api/search/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&pub_date=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=30"

    var response=await this.ctx.curl(api);

    // console.log(response.data); // 返回的是Buffer

    var data=JSON.parse(response.data);    //把Buffer类型转转换成对象

    // console.log(data);
    return data.result;

  }

}

module.exports = ComicService;
