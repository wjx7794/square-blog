import { CLASSIFY_ENUM, CLASSIFY_MAP } from '@/constants';
import { fetchBlogList } from '@/utils/api';
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import type { TableProps } from 'antd';
import { Table } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const List: React.FC = () => {
  const access = useAccess();
  const [blogList, setBlogList] = useState([]);
  console.log('🍎blogList =>', blogList);

  // 获取用户登陆信息
  const getBlogList = async () => {
    try {
      const res = await fetchBlogList({});
      const newList = res?.data?.infoList || [];
      setBlogList(newList);

      console.log('🍎 res =>', res);
    } catch (e: any) {
      console.log('🍏 res =>', e?.info);
    }
  };

  useEffect(() => {
    getBlogList();
  }, []);

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '文章名称',
      dataIndex: 'blogName',
      key: 'blogName',
      render: (blogName) => <div>{blogName}</div>,
    },
    {
      title: '分类',
      dataIndex: 'classify',
      key: 'classify',
      render: (classify: CLASSIFY_ENUM) => (
        <div>{CLASSIFY_MAP?.[classify]}</div>
      ),
    },
    {
      title: '最近编辑时间',
      dataIndex: 'editTime',
      key: 'editTime',
      render: (editTime) => (
        <div>{dayjs(+editTime).format('YYYY-MM-DD HH:mm:ss')}</div>
      ),
    },
    {
      title: '首次创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: (createTime) => (
        <div>{dayjs(+createTime).format('YYYY-MM-DD HH:mm:ss')}</div>
      ),
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <PageContainer
      ghost
      header={{
        title: '列表',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        {/* 1. 跳转至主应用，路径为 /home/introduction */}
        {/* <div style={{ marginTop: 16 }}>
          <MicroAppLink isMaster to="/home/introduction">
            <Button>跳转至主应用</Button>
          </MicroAppLink>
        </div> */}

        {/* 2. 跳转至其他子应用，路径为 /component/detail */}
        {/* <div style={{ marginTop: 16 }}>
          <MicroAppLink name="component" to="/detail">
            <Button>跳转至子应用</Button>
          </MicroAppLink>
        </div> */}
      </Access>

      <Table columns={columns} dataSource={blogList} />
    </PageContainer>
  );
};

export default List;
