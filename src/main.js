import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    data: {
        state: store.state
    },
    render: h => h(App),
    router
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router'


// Vue.config.productionTip = false
// Vue.use(VueRouter)


// import Foodlist from "./components/Foodlist.vue";
// import Member from "./components/Member.vue";
// import Orderlist from "./components/Orderlist.vue";


// const routes = [

//     { path: '/Foodlist', component: Foodlist },
//     { path: '/Member', component: Member },
//     { path: '/Orderlist', component: Orderlist }
// ]

// const router = new VueRouter({
//     routes: routes,
//     mode: 'history'
// })

// new Vue({
//     render: h => h(App),
//     router
// }).$mount('#app')