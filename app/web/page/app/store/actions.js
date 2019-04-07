'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  FETCH_VIDEO_LIST: ({ commit, dispatch, state }) => {
    if (!state.swiperList.length) {
      return axios.get(`${host}/api/videolist`)
        .then(response => {
          const data = response.data.videosList;
          commit(Type.SET_VIDEO_LIST, data);
 
          return data;
        });
    }
    return Promise.resolve();
  },

  FETCH_SWIPER_LIST: ({ commit, dispatch, state }) => {
    if (!state.swiperList.length) {
      return axios.get(`${host}/api/swiper`)
        .then(response => {
          const data = response.data.swiperList;
          commit(Type.SET_SWIPER_LIST, data);
 
          return data;
        });
    }
    return Promise.resolve();
  },

  FETCH_COMIC_LIST: ({ commit, dispatch, state }) => {
    if (!state.comicList.length) {
      return axios.get(`${host}/api/comic/list`)
        .then(response => {
          const data = response.data.data;
          commit(Type.SET_COMIC_LIST, data);
          return data;
        });
    }
    return Promise.resolve();
  },

  FETCH_VIDEO_DETAIL: ({ commit, dispatch, state }, { id }) => {
     if (state.video.id !== Number(id)) {
      return axios.get(`${host}/api/detail/${id}`)
        .then(response => {
  
          const data = response.data.videoInfo;
          
          commit(Type.SET_VIDEO_DETAIL, data);
        });
    }
    return Promise.resolve();
   },

   FETCH_RECOMMAND: ({ commit, dispatch, state }, { id }) => {
    if (state.video.id !== Number(id)) {
      return axios.get(`${host}/api/recommand/${id}`)
        .then(response => {
   
          const data = response.data.othersList;
          commit(Type.SET_RECOMMAND, data);
          return data;
        });
    }
    return Promise.resolve();
  },
  FETCH_COMMENT: ({ commit, dispatch, state }, { id }) => {
    if (state.video.id !== Number(id)) {
      return axios.get(`${host}/api/comment/${id}`)
        .then(response => {
  
          const data = response.data.commentData;
          commit(Type.SET_COMMENT, data);
          return data;
        });
    }
    return Promise.resolve();
  }


};

export default actions;
