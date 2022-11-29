
// 用Vuex.Store对象用来记录token
export default {
    namespaced: true,
    state: {

    },

    getters: {
        getToken(state){
            return state.token
        }
    },

    mutations: {
        // 修改token，并将token存入localStorage
        setToken(state,token) {
            localStorage.setItem("token", token);
        },
        delToken(state) {
            localStorage.setItem("token", '')        },
    },

    actions: {
        // removeToken: (context) => {
        // context.commit('setToken')
        // }
    },
}


