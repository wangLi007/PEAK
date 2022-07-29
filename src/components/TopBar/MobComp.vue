<!-- 顶部栏 -->
<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
import { getCurrentInstance, reactive, ref, watch } from 'vue';
import { plusXing } from '@/utils/tools';
import 'animate.css';

const appStore = useAppStore();
const gThis = getCurrentInstance().appContext.config.globalProperties;
const isShowMenu = ref(false);
// 菜单列表
const menuList = reactive([
  {
    name: 'header.6',
    alias: 'nft',
  },
  {
    name: 'header.7',
    alias: 'peak_boy',
  },
  {
    name: 'header.2',
    alias: 'mint',
  },
  {
    name: 'header.3',
    alias: 'team',
  },
  {
    name: 'header.4',
    alias: 'roadmap',
  },
  {
    name: 'header.5',
    alias: 'about',
  },
]);

watch(
  () => isShowMenu.value,
  newValue => {
    // 遮罩不能滚动
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
);

// 语言列表
const langList = reactive([
  {
    id: 1,
    name: '中文',
    target: 'cn',
    active: false,
  },
  {
    id: 2,
    name: 'English',
    target: 'en',
    active: true,
  },
]);

langList.forEach(item => {
  item.active = item.target === appStore.curLang;
});

/**
 * 选择语言
 */
function pickLang(lang) {
  console.log('lang..', lang);
  gThis.$i18n.locale = lang.target;

  appStore.setLang(lang.target);

  langList.forEach(item => {
    item.active = lang.id === item.id;
  });
}

const handleScroll = type => {
  const typeList = ['nft', 'peak_boy', 'mint', 'team', 'roadmap', 'about'];
  if (!typeList.includes(type)) return;

  if (type === typeList[0]) {
    const dom = <HTMLImageElement>document.querySelector('.section-nft');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  } else if (type === typeList[1]) {
    const dom = <HTMLImageElement>document.querySelector('.section-bgc');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  } else if (type === typeList[2]) {
    const dom = <HTMLImageElement>document.querySelector('.section-mint');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  } else if (type === typeList[3]) {
    const dom = <HTMLImageElement>document.querySelector('.section-term');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  } else if (type === typeList[4]) {
    const dom = <HTMLImageElement>document.querySelector('.route-map');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  } else if (type === typeList[5]) {
    const dom = <HTMLImageElement>document.querySelector('footer');
    window.scrollTo({
      top: dom.offsetTop,
      behavior: 'smooth',
    });
  }
  isShowMenu.value = !isShowMenu.value;
};
</script>

<template>
  <header>
    <div class="logo-icon">
      <img src="@img/phone/logo.png" alt="" />
    </div>
    <div class="menu" @click="isShowMenu = !isShowMenu">
      <img src="@img/phone/menu.png" alt="" />
    </div>
    <!-- 遮罩层 -->
    <!-- <div v-show="isShowMenu" class="mask" @click="isShowMenu = !isShowMenu"></div> -->
    <!-- 菜单面板 -->
    <transition
      :duration="1000"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div class="menu-panel" v-show="isShowMenu">
        <div class="content">
          <div class="menu-head">
            <div class="logo">
              <img src="@img/phone/logo.png" alt="" />
            </div>
            <div class="close" @click="isShowMenu = !isShowMenu">
              <img src="@img/phone/close.png" alt="" />
            </div>
          </div>
          <div class="menu-wrap">
            <div
              class="menu-item"
              v-for="(item, index) in menuList"
              :key="index"
              @click="handleScroll(item.alias)"
            >
              <span>{{ $t(item.name) }}</span>
            </div>
          </div>
          <div class="lang" @click="appStore.setIsShowLangPanel(!appStore.isShowLangPanel)">
            <div class="text">
              <img class="language" src="@img/language.png" alt="" />
              {{ $t('header.1') }}
            </div>
            <img
              class="arrow-btm"
              :style="{ transform: appStore.isShowLangPanel ? 'none' : 'rotate(270deg)' }"
              src="@img/arrow-btm.png"
              alt=""
            />
          </div>
          <div class="lang-type" v-show="appStore.isShowLangPanel">
            <div
              class="lang-item"
              v-for="(item, index) in langList"
              :key="index"
              @click="pickLang(item)"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="sign" @click="appStore.linkWallet">
            {{ appStore.defaultAccount ? plusXing(appStore.defaultAccount, 4, 4) : $t('header.8') }}
          </div>
        </div>
        <div class="footer">
          <div class="text">{{ $t('home.55') }}</div>
          <div class="link-wrap">
            <a href="https://twitter.com/PeakBoy_NFT" target="_blank">
              <img src="@img/twitter.png" alt="" />
            </a>
            <a href="https://www.instagram.com/peakboynft/" target="_blank">
              <img src="@img/ins.png" alt="" />
            </a>
            <a href="https://discord.gg/ZdtpwEPHBe" target="_blank">
              <img src="@img/discord.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
header {
  @include flexPos(space-between, center);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 57px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 26px 0 23px;
  z-index: 9999;
  color: #fff;
  backdrop-filter: blur(2px);
  .logo-icon {
    img {
      width: 55px;
    }
  }
  .menu {
    img {
      width: 25px;
    }
  }
}

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.menu-panel {
  @include flexPos(space-between, space-between);
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #171717;
  width: 100%;
  height: 100vh; // 菜单栏的高度
  z-index: 10000;
  color: #fff;
  padding: 46px 34px 32px;

  .menu-wrap {
    margin-top: 10px;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  .menu-head {
    @include flexPos(space-between, center);
    .logo img {
      width: 55px;
    }
    .close img {
      width: 14px;
    }
  }

  .lang {
    padding-right: 9px;
    padding-left: 7px;
    padding-top: 18px;
    @include flexPos(space-between);
    .text {
      @include flexPos(center);
      img {
        margin-right: 4px;
        width: 18px;
      }
    }
    .arrow-btm {
      width: 11px;
    }
  }

  .lang-type {
    margin-top: 10px;
    padding-right: 9px;
    .lang-item {
      padding-left: 7px;
      line-height: 30px;
    }
  }
  .menu-item {
    @include flexPos(flex-start);
    height: 0.44rem;
    cursor: pointer;
    &:not(:first-child) {
      margin-top: 0.1rem;
    }
    .menu-logo {
      width: 0.25rem;
      margin-right: 0.11rem;
    }
  }

  .sign {
    margin-top: 62px;
    padding: 7px 0;
    width: 323px;
    background: rgba(15, 0, 0, 0.5);
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    width: 100%;
  }
  .footer {
    margin-top: 95px;
    .text {
      text-align: center;
      margin-bottom: 24px;
    }
    .link-wrap {
      @include flexPos(center);
      a {
        img {
          margin-right: 40px;
          &:nth-child(1) {
            width: 18px;
          }
          &:nth-child(2) {
            width: 18px;
          }
          &:nth-child(3) {
            width: 22px;
          }
        }
        &:last-child img {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
