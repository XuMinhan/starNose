import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'

import Vuex from 'vuex';

Vue.use(Vuex);
import store from './store';
//引入路由器
import router from './router'
import VueResource from "vue-resource";
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(VueResource)
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {Button, Table, Tag, Select, Checkbox, Link} from 'element-ui';


Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Link)
axios.interceptors.request.use(

    config => {

        if (localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token');
        }

        return config;

    },

    error => {

        return Promise.reject(error);

    });






Vue.config.productionTip = false


import 'mavon-editor/dist/css/index.css'

new Vue({
    render: h => h(App),
    router: router,
    store: store,
    beforeCreate() {
        Vue.prototype.$bus = this	//安装全局事件总线
    }

}).$mount('#app')
