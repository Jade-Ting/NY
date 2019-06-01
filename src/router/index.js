import Vue from 'vue'
import Router from 'vue-router'
import BigCountry from '@/views/BigCountry'
import CountryThing from '@/views/CountryThing'
import TextDetail from '@/views/CountryThing/TextDetail'
import Login from '@/views/Login'
import Nearby from '@/views/Nearby'
import My from '@/views/My'
import dress from '@/views/My/components/dress'
import editDress from '@/views/My/components/editDress'
import fabu from '@/views/My/components/fabu'
import GoodsDetail from '@/views/GoodsDetail'
import PublishMessage from '@/views/PublishMessage'
import GoodsCart from '@/views/GoodsCart'

// 全局配置路由
Vue.use(Router)

const routes = [{
    path: '/home',
    name: 'home',
    component: BigCountry
  },
  {
    path: '/thing',
    name: 'thing',
    component: CountryThing
  },
  {
    path: '/text',
    name: 'text',
    component: TextDetail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/nearby',
    name: 'nearby',
    component: Nearby
  },
  {
    path: '/my',
    name: 'my',
    component: My,
  },
  {
    path: '/dress',
    name: 'dress',
    component: dress
  },
  {
    path: '/editDress',
    name: 'editDress',
    component: editDress
  },
  {
    path: '/fabu',
    name: 'fabu',
    component: fabu
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    component: GoodsDetail
  },
  {
    path: '/publishMessage',
    name: 'publishMessage',
    component: PublishMessage
  },
  {
    path: '/goodsCart',
    name: 'goodsCart',
    component: GoodsCart
  },
  {
    path: '*',
    redirect: '/home'
  } /*默认跳转路由*/
]

const router = new Router({
  routes // （缩写）相当于 routes: routes
})

export default router;
