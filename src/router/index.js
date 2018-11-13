import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [{
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/404',
      component: () => import('@/views/errorPage/404'),
      hidden: true
    },
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      children: [{
        name:"Dashboard",
        path: 'dashboard',
        component: () => import('@/views/Main/index'),
        meta: {
          title: '工作台',
          icon: 'example'
        }
      }]
    },
    {
      path: '/coursemanage',
      component: Layout,
      redirect: '/coursemanage/courselist',
      alwaysShow: true,
      name: 'Coursemanage',
      meta: {
        title: '课程管理',
        icon: 'example'
      },
      children: [{
          path: 'courselist',
          name: 'Courselist',
          component: () => import('@/views/coursemanage/index'),
          meta: {
            title: '课程列表',
            icon: 'table'
          }
        },{
          path: 'coursedet',
          name: 'CourseDet',
          component: () => import('@/views/coursemanage/CourseDetail'),
          hidden:true,
          meta: {
            title: '课程详情',
            icon: 'table'
          }
        },{
          path: 'signinconfig',
          name: 'SinginConfig',
          component: () => import('@/views/coursemanage/SigninConfig'),
          hidden:true,
          meta: {
            title: '打卡配置',
            icon: 'table'
          }
        },
        {
          path: 'certificate',
          name: 'Certificate',
          component: () => import('@/views/coursemanage/Certificate'),
          hidden:true,
          meta: {
            title: '结业证书',
            icon: 'table'
          }
        },
        {
          path: 'chapterdetail',
          name: 'ChapterDetail',
          component: () => import('@/views/coursemanage/ChapterDetail'),
          hidden:true,
          meta: {
            title: '章节详情',
            icon: 'table'
          }
        }
      ]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"Paymanage",
        path: 'paymanage',
        component: () => import('@/views/payManage/index'),
        meta: {
          title: '购物管理',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"OrderManage",
        path: 'ordermanage',
        component: () => import('@/views/orderManage/index'),
        meta: {
          title: '订单管理',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"OperationManage",
        path: 'operationmanage',
        component: () => import('@/views/operationManage/index'),
        meta: {
          title: '运营管理',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"liveStreamManage",
        path: 'livestream',
        component: () => import('@/views/liveStreamManage/index'),
        meta: {
          title: '直播管理',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"accountingManage",
        path: 'accounting',
        component: () => import('@/views/accountingManage/index'),
        meta: {
          title: '财务中心',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"userCenter",
        path: 'usercenter',
        component: () => import('@/views/userCenter/index'),
        meta: {
          title: '用户中心',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"Organization",
        path: 'organization',
        component: () => import('@/views/organization/index'),
        meta: {
          title: '组织架构',
          icon: 'example'
        }
      }]
    },
    { 
      path: '',
      component: Layout,
      children: [{
        name:"systemManage",
        path: 'systemmanage',
        component: () => import('@/views/systemManage/index'),
        meta: {
          title: '系统管理',
          icon: 'example'
        }
      }]
    },
    { path: '*', redirect: '/404', hidden: true }
    // {
    //   path: '/organization',
    //   component: Layout,
    //   redirect: '/organization/example1',
    //   name: 'Main',
    //   hidden: false,
    //   children: [{
    //     path: 'main',
    //     component: () => import('@/views/Main/index'),
    //     meta: { title: '主页', icon: 'example' }
    //   }]
    // }
  ]
})
