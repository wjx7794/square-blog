import { PageContainer } from '@ant-design/pro-components';
import { Access, request, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const Detail: React.FC = () => {
  const access = useAccess();
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log('blog-masterProps =>', masterProps);

  const [userInfo, setUserInfo] = useState<any>(null);
  // console.log('userInfo =>', userInfo);

  // 获取用户登陆信息
  const fetchUserInfo = async () => {
    try {
      const res = await request('http://localhost:3000/auth/viewCookie', {
        withCredentials: true,
        method: 'POST',
        skipErrorHandler: true,
      });
      const newUserInfo = res?.data?.passport?.userInfo || {};
      setUserInfo(newUserInfo);
      console.log('🍎 blog-viewCookie=>', newUserInfo);
    } catch (e: any) {
      console.log('🍏 blog-viewCookie =>', e?.info);
    }
  };

  // 在组件中调用
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '详情',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Detail</Button>
      </Access>
    </PageContainer>
  );
};

export default Detail;
