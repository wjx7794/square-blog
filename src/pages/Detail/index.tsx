import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';

const Detail: React.FC = () => {
  const access = useAccess();
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log('blog-masterProps =>', masterProps);

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
