const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index() {
    await this.ctx.render('app.js', { url: this.ctx.url });
  }

  async list() {
    // const pageIndex = this.ctx.query.pageIndex;
    // const pageSize = this.ctx.query.pageSize;
    // this.ctx.body = Model.getPage(pageIndex, pageSize);
    var list=await this.service.comic.getVideosList();
    this.ctx.body = list;
  }
  async getSwiper(){
    var swiperList = await this.service.swiper.getSwiperList();
    this.ctx.body = swiperList;
  }
  async getVideoList(){
    var videoList = await this.service.video.getVideoList();
    this.ctx.body = videoList;
  }
  async detail() {
    const id = Number(this.ctx.params.id);
    var detail = await this.service.video.getVideoDetail(id);
    this.ctx.body = detail;
  }
  async recommand() {
    const id = Number(this.ctx.params.id);
    var recommand = await this.service.video.getRecommand(id);
    this.ctx.body = recommand;
  }
  async comment() {
    const id = Number(this.ctx.params.id);
    var Comment = await this.service.video.getComment(id);
    this.ctx.body = Comment;
  }
  async summitcomment() {
    const text = this.ctx.params.text;
    console.log("==================收到评论： "+text+"============================");
    this.ctx.status = 204;
  }
}

module.exports = AppController;