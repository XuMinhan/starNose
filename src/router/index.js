// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import login from "@/components/login";
import operate from "@/components/operate";


//创建并暴露一个路由器
const router = new VueRouter({
    mode: "history",
    routes: [


        {
            path: '/login',
            component: login
        },
        {
            path: '/operate',
            component: operate
        },

    ]
})

// 导航守卫

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

router.beforeEach((to, from, next) => {

    if (to.path === '/login') {

        next();

    } else {
        let token = localStorage.getItem('token');
        if (token === null || token === '') {

            next('/login');

        } else {
            next();

        }

    }

});

export default router;
