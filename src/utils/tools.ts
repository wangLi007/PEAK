import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
// import { Toast } from 'vant';
// import i18n from '@/locales/i18n';
// import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(duration);

/**
 *
 * @param timestamp 时间戳
 * @returns 获得'YYYY/MM/DD HH:mm' 格式时间
 */

export function getFormatDate(timestamp) {
  if (!timestamp) return;
  const len = timestamp.toString().length;
  if (len === 10) {
    //秒级时间戳
    return dayjs(timestamp * 1000).format('YYYY/MM/DD HH:mm');
  } else {
    return dayjs(Number(timestamp)).format('YYYY/MM/DD HH:mm');
  }
}

/**
 * 地址略写
 * @param {String} str 全地址
 * @param {Number} frontLen 前面多少位
 * @param {Number} endLen 结尾多少位
 * @returns {String}
 */
export function plusXing(str, frontLen, endLen) {
  if (!str) return;
  var xing = '****';
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}

// vant pick组件 时间选择表单格式化 很多页面用到
export function formatter(value) {
  if (+value === 0) return '';
  if (!isNaN(Number(value))) {
    return getFormatDate(value);
  } else {
    return value;
  }
}

/**
 * 复制合约地址
 * @param address 传入要复制的dom对象
 */
export async function copyToClipBoard(address) {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }
  return navigator.clipboard.writeText(address);
}

/**
 * 节流
 * @param {Function} callback 回调函数
 * @param {Number} duration 节流间隔时间
 * eg handleThrottle(args => submitForm(args), 1000);
 */
export function handleThrottle(callback, duration = 70) {
  let throttleTimer;
  return args => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(() => {
      callback(args);
      throttleTimer = null;
    }, duration);
  };
}

/**
 * debounce 防抖  触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。
 * eg: const fn = debounce(fn,1000)
 */
export const debounce = (fn, time) => {
  let timeout;
  return function (arg) {
    var args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};

/**
 * 背景向下滚动
 * @param dom dom元素
 */
export const startAnimation = dom => {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    dom.style.backgroundPositionY = timePassed / 10 + 'px';

    if (timePassed > 5000) {
      clearInterval(timer);
      startAnimation(dom);
    }
  }, 20);
};
