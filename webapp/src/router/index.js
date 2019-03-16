import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import { store } from '../store/store'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import RegisterSuccessfull from '@/components/RegisterSuccessfull'
import ResendConfirmationEmail from '@/components/ResendConfirmationEmail'
import ResetPassword from '@/components/ResetPassword'
import AdminDashboard from '@/components/admin/Dashboard'
import UserDashboard from '@/components/user/Dashboard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-success', name: 'RegisterSuccessfull', component: RegisterSuccessfull },
    { path: '/resend-confirmation-email', name: 'ResendConfirmationEmail', component: ResendConfirmationEmail },
    { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
    { path: '/admin/dashboard', name: 'admin_dashboard', component: AdminDashboard, meta: { requiresAuth: true } },
    { path: '/user/dashboard', name: 'user_dashboard', component: UserDashboard, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
