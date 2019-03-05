import Mock from 'mockjs';
// mockjs会拦截对应的请求地址，返回你配置的数据

// 首页轮播图数据
let login = {
  msg: 'success',
  token: '1234567'
};

let device = {
  msg: 'success',
  list: [ {
    devNo: '0000002',
    devType: '1',
    mobile: '1300000002',
    userId: '2',
    username: '父皇的手表'
  }, {
    devNo: '0000003',
    devType: '1',
    mobile: '1300000003',
    userId: '3',
    username: '母后的手表'
  }
  ]
}

export default [
  Mock.mock('/login', login),
  Mock.mock('/device', device)
];
