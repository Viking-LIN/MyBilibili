
module.exports = app => {
  app.get('/api/videolist', app.controller.app.getVideoList);
  app.get('/api/swiper', app.controller.app.getSwiper);
  app.get('/api/comic/list', app.controller.app.list);
  app.get('/api/recommand/:id', app.controller.app.recommand);
  app.get('/api/detail/:id', app.controller.app.detail);
  app.get('/api/comment/:id', app.controller.app.comment);
  app.get('/*', app.controller.app.index);
};
