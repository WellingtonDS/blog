import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import LoginView from '../views/Login.vue';
import UserView from '../views/user/User.vue';
import ProductsUser from '../views/user/ProductsUser.vue';
import EditUser from '../views/user/EditUser.vue';
import CloseUser from '../views/user/CloseUser.vue';
import SalesUser from '../views/user/SalesUser.vue';
import ShoppUser from '../views/user/ShoppUser.vue';

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      props: true
    }, 
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/user",
      component: UserView,
      children: [
        {
        path: "",
        name: "usuario",
        component: ProductsUser
        },
        {
          path: "compras",
          name: "compras",
          component: ShoppUser
        },
        {
          path: "vendas",
          name: "vendas",
          component: SalesUser
        },
        {
          path: "editar",
          name: "editar",
          component: EditUser
        },
        {
          path: "sair",
          name: "sair",
          component: CloseUser
        }
      ]
    }
  ], 
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: 'smooth'});
  }
})

export default router
