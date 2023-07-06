const menuData = [
  {
    id: 1,
    parentId: null,
    title: '仪表盘',
    icon: 'DashboardOutlined',
    component: 'RouteView',
    redirect: '/dashboard/analysis',
    path: '/dashboard',
    name: 'Dashboard',
    locale: 'menu.dashboard',
  },
  {
    id: 2,
    parentId: 1,
    title: '分析页',
    component: '/dashboard/analysis',
    path: '/dashboard/analysis',
    name: 'DashboardAnalysis',
    keepAlive: true,
    locale: 'menu.dashboard.analysis',
  },
  {
    id: 3,
    parentId: null,
    title: '表单页',
    icon: 'FormOutlined',
    component: 'RouteView',
    redirect: '/form/basic',
    path: '/form',
    name: 'Form',
    locale: 'menu.form',
  },
  {
    id: 4,
    parentId: 3,
    title: '基础表单',
    component: '/form/basic',
    path: '/form/basic',
    name: 'FormBasic',
    keepAlive: true,
    locale: 'menu.form.basic-form',

  },
  {
    id: 5,
    parentId: null,
    title: '链接',
    icon: 'LinkOutlined',
    component: 'RouteView',
    redirect: '/link/iframe',
    path: '/link',
    name: 'Link',
    locale: 'menu.link',

  },
  {
    id: 6,
    parentId: 5,
    title: 'AntDesign',
    url: 'https://ant.design/',
    component: 'Iframe',
    path: '/link/iframe',
    name: 'LinkIframe',
    keepAlive: true,
    locale: 'menu.link.iframe',
  },
  {
    id: 7,
    parentId: 5,
    title: 'AntDesignVue',
    url: 'https://antdv.com/',
    component: 'Iframe',
    path: '/link/antdv',
    name: 'LinkAntdv',
    keepAlive: true,
    locale: 'menu.link.antdv',
  },
  {
    id: 8,
    parentId: 5,
    path: 'https://www.baidu.com',
    name: 'LinkExternal',
    title: '跳转百度',
    locale: 'menu.link.external',
  },
  {
    id: 9,
    parentId: null,
    title: '菜单',
    icon: 'BarsOutlined',
    component: 'RouteView',
    path: '/menu',
    redirect: '/menu/menu1',
    name: 'Menu',
    locale: 'menu.menu',
  },
  {
    id: 10,
    parentId: 9,
    title: '菜单1',
    component: '/menu/menu1',
    path: '/menu/menu1',
    name: 'MenuMenu11',
    keepAlive: true,
    locale: 'menu.menu.menu1',
  },
  {
    id: 11,
    parentId: 9,
    title: '菜单2',
    component: '/menu/menu2',
    path: '/menu/menu2',
    name: 'MenuMenu12',
    keepAlive: true,
    locale: 'menu.menu.menu2',
  },
  {
    id: 12,
    parentId: 9,
    path: '/menu/menu3',
    redirect: '/menu/menu3/menu1',
    name: 'MenuMenu1-1',
    title: '菜单1-1',
    component: 'RouteView',
    locale: 'menu.menu.menu3',
  },
  {
    id: 13,
    parentId: 12,
    path: '/menu/menu3/menu1',
    name: 'MenuMenu111',
    component: '/menu/menu-1-1/menu1',
    title: '菜单1-1-1',
    keepAlive: true,
    locale: 'menu.menu3.menu1',
  },
  {
    id: 14,
    parentId: 12,
    path: '/menu/menu3/menu2',
    name: 'MenuMenu112',
    component: '/menu/menu-1-1/menu2',
    title: '菜单1-1-2',
    keepAlive: true,
    locale: 'menu.menu3.menu2',
  },
  {
    id: 15,
    path: '/access',
    component: 'RouteView',
    redirect: '/access/common',
    title: '权限模块',
    name: 'Access',
    parentId: null,
    icon: 'ClusterOutlined',
    locale: 'menu.access',
  },
  {
    id: 16,
    parentId: 15,
    path: '/access/common',
    title: '通用权限',
    name: 'AccessCommon',
    component: '/access/common',
    locale: 'menu.access.common',
  },
  {
    id: 17,
    parentId: 15,
    path: '/access/user',
    title: '普通用户',
    name: 'AccessUser',
    component: '/access/user',
    locale: 'menu.access.user',
  },

]

export const accessMenuData = [
  {
    id: 18,
    parentId: 15,
    path: '/access/admin',
    title: '管理员',
    name: 'AccessAdmin',
    component: '/access/admin',
    locale: 'menu.access.admin',
  },

]

export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization')
  const username = Buffer.from(token, 'base64').toString('utf-8')
  return {
    code: 200,
    msg: '获取成功',
    data: [...menuData, ...(username === 'admin' ? accessMenuData : [])],
  }
})
