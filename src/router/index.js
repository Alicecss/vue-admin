import Vue from 'vue'
import Router, { VueRouter } from 'vue-router'
// import routes from './routers'
import Home from '@/components/Home'
import Layout from '@/pages/layout'
import Login from '@/components/Login'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'

Vue.use(Router)

// 路由登录前
// const router = new Router({
//   routes,
//   mode: 'history'
// })
// const LOGIN_PAGE_NAME = 'login'
// router.beforeEach((to,from,next)=>{
// const nextRoute = ['home','layout']

// if(nextRoute.indexOf(to.name)>=0){
// VueRouter.push({name:'login'})
// }
// if(to.name == 'login'){
// 	VueRouter.push({name:'home'})
// }
// next()
// })

export default new Router({
  routes: [
		{
			path:'/',
			redirect:'/Login'
		},
    {
      path: '/Login',
      name: '登录',
      component: () => import('@/components/Login'),
		},
		{
      path: '/home',
			name: '首页',
			component: () => import('@/components/Home'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/Page1',
          name: 'Page1',
					component: Page1,
					children:[
						{
							path: '/demo01',
							component: () => import('@/pages/demo/demo01'),
							name: 'demo01',
							meta: {
								title: 'demo01',
								roles: ['admin']
							}
						},
							{
								path: '/demo02',
								name: 'demo02',
								component: () => import('@/pages/demo/demo02'),
							},
					]
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
        }
      ]
    }
	],
	mode:"history" 
})
