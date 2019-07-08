// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//for vuex for states
import { sync } from "vuex-router-sync" // map and send out dispatch some events when our route changes
import store from "./store/store";

//components
import Panel from './components/Panel'
//youtube
//import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify)
Vue.config.productionTip = false;
// if you don't want install the component globally
// Vue.use(VueYouTubeEmbed, { global: true })

//components
Vue.component('panel', Panel)

sync(store, router) // to sync store to router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
