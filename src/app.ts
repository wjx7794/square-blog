// 运行时配置
import { qiankun } from '@/config/micro';
import { request } from '@/config/request';
import { menuData } from '@/config/routes';
import { RunTimeLayoutConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  return { title: '博客', menuData };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const { title, menuData } = initialState as any;

  return {
    // logo
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // 左上角标题
    title,
    // 菜单相关
    menu: {
      locale: false,
      // 从服务端请求菜单
      request: async (params, defaultMenuData) => {
        return menuData;
      },
    },
    // 页面切换时触发
    onPageChange: (location) => {
      console.log('onPageChange =>', location);
    },
    // menu 菜单的头部点击事件 (logo + title)
    onMenuHeaderClick: () => {},
    // 退出登陆 callback
    logout: () => {},
    // layout 内容区的 style
    contentStyle: {
      backgroundColor: '#fff',
    },
  };
};

export { qiankun, request };
