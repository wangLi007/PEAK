<!-- 顶部栏 -->
<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
import router from '@/router';
import { getCurrentInstance, reactive, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { plusXing } from '@/utils/tools';

const appStore = useAppStore();
const gThis = getCurrentInstance().appContext.config.globalProperties;
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
    const dom = <HTMLImageElement>document.querySelector('.section-partner');
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
};
</script>

<template>
  <header>
    <div class="logo-icon">
      <img src="@img/PEAK_BOY.png" alt="" />
    </div>
    <div class="link-group">
      <div class="link-item" @click="handleScroll('nft')">{{ $t('header.6') }}</div>
      <div class="link-item" @click="handleScroll('peak_boy')">{{ $t('header.7') }}</div>
      <div class="link-item" @click="handleScroll('mint')">{{ $t('header.2') }}</div>
      <div class="link-item" @click="handleScroll('team')">{{ $t('header.3') }}</div>
      <div class="link-item" @click="handleScroll('roadmap')">{{ $t('header.4') }}</div>
      <div class="link-item" @click="handleScroll('about')">{{ $t('header.5') }}</div>
    </div>
    <div class="link-official">
      <div class="twitter">
        <a href="https://twitter.com/PeakBoy_NFT" target="_blank">
          <img src="@img/twitter.png" alt="" />
        </a>
      </div>
      <div class="ins">
        <a href="https://www.instagram.com/peakboynft/" target="_blank">
          <img src="@img/ins.png" alt="" />
        </a>
      </div>
      <div class="discord">
        <a href="https://discord.gg/ZdtpwEPHBe" target="_blank">
          <img src="@img/discord.png" alt="" />
        </a>
      </div>
    </div>
    <div class="sign" @click="appStore.linkWallet">
      <span v-if="!appStore.defaultAccount">{{ $t('header.8') }}</span>
      <span v-else>{{ plusXing(appStore.defaultAccount, 4, 4) }}</span>
    </div>
    <div
      class="lang-wrap"
      @mouseleave="appStore.setIsShowLangPanel(!appStore.isShowLangPanel)"
      @mouseenter="appStore.setIsShowLangPanel(!appStore.isShowLangPanel)"
    >
      <div style="display: flex">
        <div class="current">
          <img class="language" src="@img/language.png" alt="" />
          {{ $t('header.1') }}
          <img class="arrow-btm" src="@img/arrow-btm.png" alt="" />
        </div>
      </div>
      <div class="panel" v-show="appStore.isShowLangPanel">
        <li class="lang-item" v-for="lang in langList" :key="lang.id" @click="pickLang(lang)">
          {{ lang.name }}
        </li>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  filter: blur(undefinedpx);
  font-size: 14px;
  color: #fff;
  padding: 0 145px 0 145px;
  @include flexPos(flex-start, center);
  z-index: 9999;
  a {
    color: #fff;
  }
  .logo-icon {
    margin-right: 99px;
    img {
      width: 92px;
    }
  }
  .link-group {
    @include flexPos(space-between, center);
    flex: 1;
    .link-item {
      cursor: pointer;
      flex-shrink: 0;
    }
  }
  .link-official {
    @include flexPos(flex-start, center);
    margin-left: 87px;
    .twitter {
      margin-right: 50px;
      img {
        width: 23px;
      }
    }
    .ins {
      margin-right: 50px;

      img {
        width: 23px;
      }
    }
    .discord {
      img {
        width: 28px;
      }
    }
  }
  .sign {
    margin-left: 90px;
    font-weight: 400;
    color: #ffffff;
    line-height: 28px;
    margin-right: 69px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .lang-wrap {
    position: relative;
    .current {
      @include flexPos(center);
      padding: 10px 27px 10px 18px;
      background-color: rgba(15, 0, 0, 0.5);
      flex-shrink: 0;
      .language {
        width: 25px;
        margin-right: 3px;
      }
      .arrow-btm {
        padding-top: 3px;
        width: 11px;
        margin-left: 3px;
      }
    }
    .panel {
      position: absolute;
      bottom: -65px;
      right: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      li {
        padding-bottom: 5px;
        cursor: pointer;
        line-height: 30px;
      }
    }
  }
}
</style>
