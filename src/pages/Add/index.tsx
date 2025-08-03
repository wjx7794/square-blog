/**
 * [登陆]
 * @author Jack
 * @Date 2025-02-11
 */

// 内部模块
import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input } from 'antd';
import { useCallback } from 'react';
// 外部模块
// import { fetchLogin } from '@/utils/api';

const Add: React.FC = () => {
  // 登陆
  const onPublish = useCallback(async (values: any) => {
    const { userName, password } = values || {};
    console.log('values =>', values);
    return;
    // try {
    //   const res = await fetchLogin({
    //     userName,
    //     password,
    //   });
    //   message.success(res?.message);
    //   // 刷新页面
    //   setTimeout(() => {
    //     location.href = RUN_URL;
    //   }, 1000);
    // } catch (e: any) {
    //   console.log('🍎fetchLogin =>', e?.info);
    // }
  }, []);

  // 校验失败
  const onFailed = useCallback((errorInfo: any) => {
    console.log('🍎 校验失败 =>', errorInfo);
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '新增博客',
      }}
    >
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onPublish}
        onFinishFailed={onFailed}
        autoComplete="off"
      >
        {/* 博客标题 */}
        <Form.Item
          label="标题"
          name="blogName"
          rules={[{ required: true, message: '请输入博客标题' }]}
        >
          <Input />
        </Form.Item>

        {/* 博客内容 */}
        <Form.Item
          label="内容"
          name="blogContent"
          rules={[{ required: true, message: '请输入博客内容' }]}
        >
          <Input />
        </Form.Item>

        {/* 博客分类 */}
        <Form.Item
          label="分类"
          name="classify"
          rules={[{ required: true, message: '请输入博客分类' }]}
        >
          <Input />
        </Form.Item>

        {/* 发布 */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            发布
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default Add;
