import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
const Admin: React.FC = () => {
  //console.log('admin');

  return (
    <PageContainer content={' 您是K星的管理员，可以管理K星的用户'}>
      <Card>
        <Alert
          message={'帮助K星变得更美好~'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          {/*<SmileTwoTone /> K star <HeartTwoTone twoToneColor="#eb2f96" /> You*/}
          <SmileTwoTone /> make K star great !
        </Typography.Title>
      </Card>
    </PageContainer>
  );
};
export default Admin;
