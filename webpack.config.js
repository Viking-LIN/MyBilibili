'use strict';
// const {VueLoaderPlugin } = require("vue-loader")
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app/index.js'
  },
  alias: {
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js',
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  // rules: [
  //   {
  //     test: /\.vue$/,
  //     loader: 'vue-loader'
  //   },
  //   {
  //     test: /\.css$/,
  //     use: ['style-loader','css-loader']
  //   }
  // ],

  plugins: {
    copy: [{
      from: 'app/web/asset/css/bootstrap.min.css',
      to: 'asset/css/bootstrap.min.css'
    }],
  },
  // plugins: [
  //   new VueLoaderPlugin()
  // ],
  done() {

  }
};