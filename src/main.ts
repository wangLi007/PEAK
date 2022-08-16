import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueI18n from '@/locales/i18n';
import { useAppStore } from '@store/appStore';
import { handleThrottle } from '@/utils/tools';
import 'element-plus/es/components/form/style/css';
import '@/utils/initRem';
import '@/assets/css/index.scss';
import animate from 'animate.css';
const pinia = createPinia();

const app = createApp(App);

app.config.globalProperties.$t = VueI18n.global.t;

app.use(animate).use(router).use(pinia).use(VueI18n).mount('#app');

// 获取当前设备尺寸
const appStore = useAppStore();
appStore.getCurDevice();

// 添加监听屏幕变化
window.onresize = handleThrottle(() => {
  appStore.getCurDevice();
});
