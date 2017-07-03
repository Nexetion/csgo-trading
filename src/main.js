// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(VueSocketio, 'http://167.114.1.228:5000')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  sockets: {
    connect () {
      console.log('Websocket connected')
    },
    site (data) {
      window.document.title = data.header + ' | Web-based CS:GO trading bot'
    },
    user (user) {
      user.steamID64 = user.id
      this.user = user
    }
  }
})
