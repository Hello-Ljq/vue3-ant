import { createRouter, createWebHistory } from 'vue-router'
import Login from "./views/login/Login.vue";
import Layouts from "./views/layouts/Layouts.vue";

//没有指定webpackChunkName,每个组件打包成一个js文件
// const test1 = ()=>import('./views/login/Login')
// const test2 = ()=>import('./views/layouts/Layouts')

//指定了相同的webpackChunkName，会合并打包成y一个js文件
// const test3 = ()=>import(webpackChunkName:'grounpTest','@/components/test3.vue')
// const test4 = ()=>import(webpackChunkName:'grounpTest','@/components/test4.vue')


const routers=[
    {path:'/',component:Login,name:'Login'},
    {path:'/layouts',component:Layouts,name:'Layouts'}
]

const routerHistory=createWebHistory()
const router = createRouter({
    history:routerHistory,
    routers:[
        {path:'/',component:Login,name:'Login'},
        {path:'/layouts',component:Layouts,name:'Layouts'}
    ]
})

export default router