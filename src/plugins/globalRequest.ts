/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { history } from '@@/core/history';
import { message } from 'antd';
import { stringify } from 'querystring';
import { extend } from 'umi-request';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  //这里请求后端的域名
  prefix: process.env.NODE_ENV === 'production' ? 'http://106.53.160.28:8080' : undefined,
  //prefix: process.env.NODE_ENV === 'production' ? 'http://user-backend.code-nav.cn' : undefined,
  // requestType: 'form',
});

/**
 * 请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  //console.log(`do request url = ${url}`);

  return {
    url,
    options: {
      ...options,
      headers: {},
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response): Promise<any> => {
  const res = await response.clone().json();

  //console.log("globalRequest的res：",res);

  //如果请求成功
  if (res.success === true) {
    return res.data;
  }

  //请求失败

  if (res.errorCode === 9) {
    message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
  } else if (res.errorCode === 1) {
    message.warning(res.msg);
  } else if (res.errorCode === 2) {
    message.error(res.msg);
  }

  return res.data;
});

export default request;
