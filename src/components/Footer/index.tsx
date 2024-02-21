import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {GITHUB_LINK} from "@/constants";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[

        {
          key: 'github',
          title: <><GithubOutlined />  kuuuure</>,
          href: GITHUB_LINK,
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
