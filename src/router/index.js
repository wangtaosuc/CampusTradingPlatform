import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)
import Login from '@/components/page/login.vue'
import Register from '@/components/page/register.vue'
import GoodsDetail from '@/components/page/goodsDetail.vue'
import MyOrder from '@/components/page/myOrder.vue'
import Business from '@/components/page/business/index.vue'
import User from '@/components/page/user/index.vue'
const shop = resolve => require(['@/components/page/business/shop.vue'], resolve);
const goods = resolve => require(['@/components/page/business/goods.vue'], resolve);
const order = resolve => require(['@/components/page/business/order.vue'], resolve);
const service = resolve => require(['@/components/page/business/service.vue'], resolve);
const myCollection = resolve => require(['@/components/page/user/myCollection.vue'], resolve)
const buyGoods = resolve => require(['@/components/page/user/buyGoods.vue'], resolve)
const myOrders = resolve => require(['@/components/page/user/myOrders.vue'], resolve)
const baseInfo = resolve => require(['@/components/page/user/baseInfo.vue'], resolve)
const community = resolve => require(['@/components/page/community.vue'], resolve)

// user

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '校园交易平台'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/community',
      name: 'community',
      component: community,
      meta: {
        title: '社区'
      }
    },
    {
      path: '/goodsDetail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/myOrder',
      name: 'MyOrder',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/business/',
      name: 'business',
      redirect: '/business/shop',
      component: Business,
      meta: {
      title: '商家中心'
      },
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: shop
        },
        {
          path: 'goods',
          name: 'goods',
          component: goods
        },
        {
          path: 'order',
          name: 'order',
          component: order
        },
        {
          path: 'service',
          name: 'service',
          component: service
        }
      ]
    },
    {
      path: '/user/',
      name: 'user',
      redirect: '/user/baseInfo',
      component: User,
      meta: {
        title: '用户中心'
      },
      children: [{
        path: 'baseInfo',
        name: 'baseInfo',
        component: baseInfo
      },{
        path: 'myOrders',
        name: 'myOrders',
        component: myOrders
      },{
        path: 'buyGoods',
        name: 'buyGoods',
        component: buyGoods
      },{
        path: 'myCollection',
        name: 'myCollection',
        component: myCollection
      }]
  }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router