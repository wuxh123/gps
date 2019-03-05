import Vue from 'vue'
import Router from 'vue-router'
import Homewatch from '../components/home/homewatch.vue';
import Login from '../components/regist/login.vue';
import Select from '../components/regist/select.vue';
import AddDev from '../components/regist/addDev.vue';
import Mqtt from '../components/utils/mqtt.vue';
import Error from '../components/message/myError.vue';
import Chat from  "../components/chat/chat.vue";
import TrailTimeScope from  "../components/map/timeScope.vue";
import CallPhone from  "../components/opt/callPhone.vue";
import Dingweimoshi from  "../components/opt/dingweimoshi.vue";
import WatchMore from  "../components/more/watchMore.vue";
import VueBus from 'vue-bus';

//  import Mui from 'vue-awesome-mui';
//  Vue.use(Mui);

// 引入mui的css
import "../static/vendor/mui/dist/css/mui.css";

// 引入Mint-ui
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUi); // 安装插件

//头
import Captionheader from '@/components/base/captionHeader'
Vue.component('capHeader', Captionheader)

//头
import Stsheader from '@/components/base/statusHeader'
Vue.component('stsHeader', Stsheader)

//尾
import WatchFooter from '@/components/base/watchFooter'
Vue.component('watchFooter', WatchFooter)

//注册控件时得footer
import RegistFooter from '../components/regist/registMenu.vue';
Vue.component('registFooter', RegistFooter)

//注册bus总线
Vue.use(VueBus);

//注册Mqtt
Vue.component('mqtt', Mqtt)

// 引入自己的css
import "../static/css/global.css";

// 引入配置好的mockjs
import "../util/mock.js";

//获取url参数
import utils from '../util/utils.js'
//注册全局方法          
Vue.prototype.$utils = utils

/*常量*/
import constants from '../util/constants.js'
Vue.prototype.G = constants

/*设置使用axios访问后台 */
import AxiosPlugin from '../components/api/axiosApi.js';
Vue.use(AxiosPlugin)

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'default', path: '', redirect: { name: 'login' } }, // 默认
    { name: 'select', path: '/select', component: Select }, // 选择设备
    { name: 'login', path: '/login', component: Login }, // 登录组件
    { name: 'add_dev', path: '/add_dev', component: AddDev }, // 添加关联设备
    { name: 'mqtt', path: '/Mqtt', component: Mqtt }, // mqtt
    { name: 'homewatch', path: '/homewatch', component: Homewatch }, // 老人表首页
    { name: 'error', path: '/error', component: Error }, // 错误画面
    { name: 'chat', path: '/chat', component: Chat }, // chat画面
    { name: 'trailTimeScope', path: '/trailTimeScope', component: TrailTimeScope }, // 轨迹选择时间画面
    { name: 'callPhone', path: '/callPhone', component: CallPhone }, // 拨打电话
    { name: 'dingweimoshi', path: '/dingweimoshi', component: Dingweimoshi }, //定位模式
    { name: 'watchMore', path: '/watchMore', component: WatchMore } //老人表-更多
  ]
})
