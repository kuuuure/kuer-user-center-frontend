import { search } from '@/services/ant-design-pro/api';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import React, { useRef } from 'react';

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  // {
  //   title: '标题',
  //   dataIndex: 'title',
  //   copyable: true,
  //   ellipsis: true,
  //   tooltip: '标题过长会自动收缩',
  //   formItemProps: {
  //     rules: [
  //       {
  //         required: true,
  //         message: '此项为必填项',
  //       },
  //     ],
  //   },
  // },

  {
    title: 'id',
    dataIndex: 'id',
  },

  {
    title: '用户名称',
    dataIndex: 'username',
  },

  {
    title: '用户账号',
    dataIndex: 'userAccount',
  },

  {
    title: '头像',
    dataIndex: 'avatarUrl',
  },

  {
    title: '性别',
    dataIndex: 'gender',
  },

  {
    title: '邮箱',
    dataIndex: 'email',
  },

  {
    title: '电话',
    dataIndex: 'phone',
  },

  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      open: {
        text: '正常',
        status: '0',
      },
      closed: {
        text: '已封禁',
        status: '1',
        disabled: true,
      },
    },
  },

  // {
  //   title: '创建时间',
  //   key: 'showTime',
  //   dataIndex: 'created_at',
  //   valueType: 'date',
  //   sorter: true,
  //   hideInSearch: true,
  // },

  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          //action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href="#" target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const UserManage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        //console.log(sort, filter);
        const list = await search();
        return {
          data: list,
        };
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          //console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      // form={{
      //   // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
      //   syncToUrl: (values, type) => {
      //     if (type === 'get') {
      //       return {
      //         ...values,
      //         created_at: [values.startTime, values.endTime],
      //       };
      //     }
      //     return values;
      //   },
      // }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => []}
    ></ProTable>
  );
};

export default UserManage;
