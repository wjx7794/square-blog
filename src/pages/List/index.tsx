import { PageContainer } from '@ant-design/pro-components';
import { Access, MicroAppLink, useAccess } from '@umijs/max';
import { Button } from 'antd';

const List: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '列表',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>List</Button>
        {/* 1. 跳转至主应用，路径为 /home/introduction */}
        <div style={{ marginTop: 16 }}>
          <MicroAppLink isMaster to="/home/introduction">
            <Button>跳转至主应用</Button>
          </MicroAppLink>
        </div>

        {/* 2. 跳转至其他子应用，路径为 /component/detail */}
        <div style={{ marginTop: 16 }}>
          <MicroAppLink name="component" to="/detail">
            <Button>跳转至子应用</Button>
          </MicroAppLink>
        </div>
      </Access>
    </PageContainer>
  );
};

export default List;
