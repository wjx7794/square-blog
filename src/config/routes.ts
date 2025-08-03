/**
 * 路由配置
 */
export const routes = [
  // 根路径
  {
    path: '/',
    redirect: '/list',
  },
  // 列表
  {
    name: '列表',
    path: '/list',
    component: '@/pages/List',
  },
  // 详情
  {
    name: '详情',
    path: '/detail',
    component: '@/pages/Detail',
  },
  // 新增
  {
    name: '新增',
    path: '/add',
    component: '@/pages/Add',
  },
];

/**
 * 左侧菜单配置
 */
export const menuData = [
  // 根路径
  {
    path: '/',
    redirect: '/blog',
  },
  // 列表
  {
    // 菜单的名字
    name: '列表',
    path: '/list',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: true,
    // layout 的菜单模式
    layout: 'side',
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
  // 详情
  {
    // 菜单的名字
    name: '详情',
    path: '/detail',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: true,
    // layout 的菜单模式
    layout: 'side',
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
  {
    // 菜单的名字
    name: '新增',
    path: '/add',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: true,
    // layout 的菜单模式
    layout: 'side',
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
];
