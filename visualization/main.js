import Vue from 'vue';

import VueRouter from 'vue-router';

//导入element ui
import ElementUi from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

import App from './app.vue';

import Routers from './router';

import './style.css';

Vue.use(VueRouter);

const RouterConfig = {
    routes: Routers
}
const router = new VueRouter(RouterConfig)


var app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})

// document.getElementById('app').innerHTML = 'hello webpack';