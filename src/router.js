import VueRouter from 'vue-router'
import UploadAvatar from './member/UploadAvatar.vue'
import Profile from './member/Profile.vue'
import Login from './member/Login.vue'
import Register from './member/Register.vue'

import Foodlist from "./components/Foodlist.vue";
// import Member from "./components/Member.vue";
import Orderlist from "./components/Orderlist.vue";

const routes = [
    { path: '/uploadAvatar', component: UploadAvatar },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
    { path: '/Foodlist', component: Foodlist },
    { path: '/register', component: Register },
    { path: '/Orderlist', component: Orderlist }
]
export default new VueRouter({
    routes,
    mode: 'history'
})