import { defineConfig } from '@umijs/max';
import { routes } from './src/config/routes';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  // 路由配置
  routes,
  npmClient: 'pnpm',
});
