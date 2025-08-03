import { ServicePrefix } from '@/constants/index';
import { request } from '@umijs/max';

// 获取列表
export const fetchBlogList = async (params = {}) => {
  const res = await request(`${ServicePrefix}/blog/search`, {
    withCredentials: true,
    method: 'POST',
    // skipErrorHandler: true,
    data: params,
  });
  return res;
};
