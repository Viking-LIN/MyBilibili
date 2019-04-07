'use strict';

import {
  SET_VIDEO_LIST,
  SET_SWIPER_LIST,
  SET_COMIC_LIST,
  SET_VIDEO_DETAIL ,
  SET_RECOMMAND,
  SET_COMMENT
} from './mutation-type';

const mutations = {
  [SET_VIDEO_LIST](state, items) {
    state.videoList = items;
  },
  [  SET_COMIC_LIST](state, items) {
    state.comicList = items;
  },
  [ SET_VIDEO_DETAIL ](state, data) {
    state.video = data;
  },
  [SET_SWIPER_LIST](state, items) {
    state.swiperList = items;
  },
  [SET_RECOMMAND](state, items) {
    state.recommand = items;
  },
  [SET_COMMENT](state, items) {
    state.comment = items;
  }
};
export default mutations;
