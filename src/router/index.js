import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Login'))
  })
} // 登录
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Home'))
  })
} // 主页面框架

const Index = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Index'))
  })
} // 首页
const MF_details = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/MF_details/MF_details'))
  })
} // 查询界面

const Vaccin_Details = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Vaccin_Details/Vaccin_Details'))
  })
} // 弹出模板选择
const Result = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Result/Result'))
  })
} // 最后结果
const NotFound = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/404'))
  })
} // 错误404

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '错误界面',
      hidden: true
    },
    {
      path: '*',
      name: '404',
      hidden: true,// 隐藏，在菜单中不显示
      redirect: {path: '/404'}
    },
    {
      path: '/',
      name: '主页面',
      component: Home,
      redirect: {path: '/index'},
      children: [
        {path: '/index', component: Index, name: '数据报表', icon: 'icon-dangan', meta: {link: '#/vaccin_detail'}},
        {path: '/mf_details', component: MF_details, name: '数据选择'},
        {path: '/result', component: Result, name: '数据详情'}
      ]
    }
  ]
})
