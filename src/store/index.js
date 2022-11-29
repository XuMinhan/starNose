//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
import token from './login'
import createPersistedState from "vuex-persistedstate";


//创建并暴露store

export default new Vuex.Store({
    modules: {
        tokenAbout: token,
    }
    ,
    // plugins: [
    //     createPersistedState({ //带参数的写法
    //         // 存储方式：localStorage、sessionStorage、cookies
    //         // storage: window.localStorage,
    //         // 存储的 key 的key值（如果不写默认是vuex）
    //         // paths: ['tokenAbout' ] //要存的数据模块，如果不配置，默认所有模块的数据都保存
    //     })
    // ]

})