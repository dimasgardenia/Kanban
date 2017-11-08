// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCFkpR0o2MQFVRTZknNA-DM8pTDuPszkBQ',
  authDomain: 'kanban-2f063.firebaseapp.com',
  databaseURL: 'https://kanban-2f063.firebaseio.com'
}

firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
