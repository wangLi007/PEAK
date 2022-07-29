<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAppStore } from '@store/appStore';

const appStore = useAppStore();

const startAnimation = dom => {
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

// 背景滚动
onMounted(() => {
  const main = document.querySelector('main');

  startAnimation(main);
});
</script>

<template>
  <main class="mob-main" v-if="appStore.curDevice === 'phone'">
    <div class="banner">
      <video
        muted="false"
        autoplay
        id="video"
        x5-video-player-fullscreen="true"
        loop
        x5-playsinline
        playsinline
        webkit-playsinline
      >
        <source src="@/assets/video/banner.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    <!-- 背景介绍 -->
    <section class="section-bgc">
      <div class="arrow-wrap">
        <div class="arrow arrow-1">
          <img src="@img/arrow.png" alt="" />
        </div>
        <div class="arrow arrow-2">
          <img src="@img/arrow.png" alt="" />
        </div>
      </div>
      <div class="desc">
        <h3 class="title">{{ $t('home.2') }}</h3>
        <p>
          <a
            href="https://twitter.com/tonyparker/status/1545791840087166977?s=20&t=NH6WmANnYdZgxNMtE3rJvQ&accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NTg5MTg1MTgsImZpbGVHVUlEIjoiMWQzYVZWb2FNOGMyTGVxZyIsImlhdCI6MTY1ODkxODIxOCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo0Mjg4MDEzMH0.kqlOzGdQk6vtGxz6vQ2InPh83ZDoYbrDWISjiSRW-4g"
            target="_blank"
          >
            {{ $t('home.3') }}
          </a>
        </p>
      </div>
      <div class="big-text">
        <span>PEAK BOY</span>
      </div>
    </section>
    <section class="section-mint">
      <h3 class="title">{{ $t('home.1') }}</h3>
      <p class="intro">{{ $t('home.3') }}</p>
      <button class="mint-btn">
        {{ $t('home.6') }}
        <img src="@img/btn-arrow.png" alt="" />
      </button>
      <h3 class="title left text-gap">{{ $t('home.7') }}</h3>
      <p class="text-gap">
        {{ $t('home.8') }}
      </p>
      <p class="text-gap">
        {{ $t('home.9') }}
      </p>
      <p class="text-gap">
        {{ $t('home.10') }}
      </p>
      <p class="text-gap">{{ $t('home.11') }}</p>
      <div class="desc-img">
        <img src="@img/mint-img.png" alt="" />
      </div>
      <div class="refer">
        <div class="refer-wrap">
          <a
            href="https://twitter.com/tonyparker/status/1545791840087166977?s=20&t=NH6WmANnYdZgxNMtE3rJvQ"
            target="_blank"
          >
            <h3 class="title left text-gap">{{ $t('home.12') }}</h3>
            <p class="text-gap">{{ $t('home.13') }}</p>
            <p class="text-gap">{{ $t('home.14') }}</p>
            <div class="gap"></div>
            <p class="text-gap">
              {{ $t('home.15') }}
            </p>
            <!-- <div class="desc-img">
            <img src="@img/refer.png" alt="" />
          </div> -->
          </a>
        </div>
      </div>
    </section>
    <section class="section-nft">
      <div class="desc">
        <h3 class="title">{{ $t('home.16') }}</h3>
        <p>
          {{ $t('home.17') }}
        </p>
      </div>
      <div class="img">
        <img src="@img/phone/nft.png" alt="" />
      </div>
    </section>
    <section class="section-term">
      <h3 class="title">{{ $t('home.18') }}</h3>
      <div class="term-item">
        <img src="@img/jon.png" alt="" />
        <div class="name">@PeakJon</div>
        <div class="office">{{ $t('home.19') }}</div>
        <div class="info">{{ $t('home.23') }}</div>
      </div>
      <div class="term-item">
        <img src="@img/Ryan.png" alt="" />
        <div class="name">@PeakPam</div>
        <div class="office">{{ $t('home.19') }}</div>
        <div class="info">{{ $t('home.24') }}</div>
      </div>
      <div class="term-item">
        <img src="@img/Pam.png" alt="" />
        <div class="name">@PeakRyan</div>
        <div class="office">{{ $t('home.19') }}</div>
        <div class="info">{{ $t('home.25') }}</div>
      </div>
      <div class="term-item">
        <img src="@img/rach.png" alt="" />
        <div class="name">@Peakrach</div>
        <div class="office">{{ $t('home.19') }}</div>
        <div class="info">{{ $t('home.26') }}</div>
      </div>
    </section>
    <section class="route-map">
      <div class="title">{{ $t('home.27') }}</div>
      <div class="route-map-wrap">
        <div class="route-map-item">
          <div class="map-header">
            <div class="map-group">
              <div class="name">{{ $t('home.28') }}</div>
              <div class="time">2022/07-08</div>
              <img src="@img/1.0.png" alt="" />
            </div>
          </div>
          <ul>
            <li>{{ $t('home.31') }}</li>
            <li>{{ $t('home.32') }}</li>
            <li>{{ $t('home.33') }}</li>
            <li>{{ $t('home.34') }}</li>
            <li>
              {{ $t('home.35') }}
            </li>
            <li>{{ $t('home.36') }}</li>
            <li>{{ $t('home.37') }}</li>
            <li>{{ $t('home.38') }}</li>
            <li>{{ $t('home.39') }}</li>
          </ul>
        </div>
        <div class="arrow">
          <img src="@img/phone/map-arrow.png" alt="" />
        </div>
        <div class="route-map-item">
          <div class="map-header">
            <div class="map-group">
              <div class="name">{{ $t('home.29') }}</div>
              <div class="time">2022/09-11</div>
              <img src="@img/2.0.png" alt="" />
            </div>
          </div>
          <ul>
            <li>{{ $t('home.40') }}</li>
            <li>{{ $t('home.41') }}</li>
            <li>{{ $t('home.42') }}</li>
            <li>{{ $t('home.43') }}</li>
            <li>{{ $t('home.44') }}</li>
            <li>{{ $t('home.45') }}</li>
          </ul>
        </div>
        <div class="arrow">
          <img src="@img/phone/map-arrow.png" alt="" />
        </div>
        <div class="route-map-item">
          <div class="map-header">
            <div class="map-group">
              <div class="name">{{ $t('home.30') }}</div>
              <div class="time">2022/12</div>
              <img class="last-img" src="@img/3.0.png" alt="" />
            </div>
          </div>
          <ul>
            <li>{{ $t('home.46') }}</li>
            <li>{{ $t('home.47') }}</li>
            <li>{{ $t('home.59') }}</li>
            <li>{{ $t('home.48') }}</li>
            <li>{{ $t('home.49') }}</li>
            <li>{{ $t('home.50') }}</li>
            <li>{{ $t('home.60') }}</li>
            <li>{{ $t('home.61') }}</li>
            <li>{{ $t('home.62') }}</li>
            <li>......</li>
          </ul>
        </div>
      </div>
      <div class="our-partner">
        <div class="title">{{ $t('home.54') }}</div>
        <div class="our-partner-wrap">
          <div class="partner-item">
            <a href="https://bad-hood.com" target="_blank"><img src="@img/BAD.png" alt="" /></a>
          </div>
          <div class="partner-item">
            <a href="https://galaxy.eco" target="_blank"><img src="@img/GALA.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p class="text">GET IN TOUCH WITH US</p>
      <p class="text">We'd love to hear your thoughts</p>
      <div class="bottom">
        <p>{{ $t('home.55') }}</p>
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
    </footer>
  </main>
  <main class="pc-main" v-else>
    <div class="banner">
      <!-- <img src="@img/banner.png" alt="" /> -->
      <video
        muted="false"
        autoplay
        id="video"
        x5-video-player-fullscreen="true"
        loop
        x5-playsinline
        playsinline
        webkit-playsinline
      >
        <source src="@/assets/video/banner.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    <!-- 背景介绍 -->
    <section class="section-bgc">
      <div class="section-bgc-wrap">
        <div class="arrow-wrap">
          <div class="arrow arrow-1">
            <img src="@img/arrow.png" alt="" />
          </div>
          <div class="arrow arrow-2">
            <img src="@img/arrow.png" alt="" />
          </div>
        </div>
        <div class="desc">
          <h3>{{ $t('home.2') }}</h3>
          <p>
            <a
              href="https://twitter.com/tonyparker/status/1545791840087166977?s=20&t=NH6WmANnYdZgxNMtE3rJvQ&accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NTg5MTg1MTgsImZpbGVHVUlEIjoiMWQzYVZWb2FNOGMyTGVxZyIsImlhdCI6MTY1ODkxODIxOCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo0Mjg4MDEzMH0.kqlOzGdQk6vtGxz6vQ2InPh83ZDoYbrDWISjiSRW-4g"
              target="_blank"
            >
              {{ $t('home.3') }}
            </a>
          </p>
        </div>
        <div class="info">
          <h3>{{ $t('home.1') }}</h3>
          <p>Meet Your PeakBoy In MetaVerse. </p>
          <p>
            {{ $t('home.58') }}
          </p>
        </div>
        <div class="boy-1">
          <img src="@img/boy-1.png" alt="" />
        </div>
        <div class="boy-2">
          <img src="@img/boy-2.png" alt="" />
        </div>
        <div class="boy-3">
          <img src="@img/boy-3.png" alt="" />
        </div>
        <div class="bottom">PEAK BOY</div>
      </div>
    </section>
    <!-- mint NFT -->
    <section class="section-mint">
      <div class="section-wrap">
        <button class="mint-btn">
          {{ $t('home.6') }}
          <img src="@img/btn-arrow.png" alt="" />
        </button>
        <h3>{{ $t('home.7') }}</h3>
        <p>
          {{ $t('home.8') }}
        </p>
        <p>
          {{ $t('home.9') }}
        </p>
        <p>
          {{ $t('home.10') }}
        </p>
        <p>{{ $t('home.11') }}</p>
        <div class="desc-img">
          <img src="@img/mint-img.png" alt="" />
        </div>
        <div class="refer">
          <a
            href="https://twitter.com/tonyparker/status/1545791840087166977?s=20&t=NH6WmANnYdZgxNMtE3rJvQ"
            target="_blank"
          >
            <h3>{{ $t('home.12') }}</h3>
            <p>{{ $t('home.13') }}</p>
            <p>{{ $t('home.14') }}</p>
            <div class="gap"></div>
            <p>
              {{ $t('home.15') }}
            </p>
            <div class="desc-img">
              <img src="@img/refer.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- NFT介绍 -->
    <section class="section-nft">
      <div class="section-nft-wrap">
        <div class="desc">
          <h3>{{ $t('home.16') }}</h3>
          <p>
            {{ $t('home.17') }}
          </p>
        </div>
        <div class="img">
          <img src="@img/nft.png" alt="" />
        </div>
      </div>
    </section>
    <!-- 团队信息 && 合作伙伴 -->
    <section class="section-partner">
      <div class="section-partner-wrap">
        <div class="title">{{ $t('home.18') }}</div>
        <div class="partner-wrap">
          <div class="partner-item">
            <img src="@img/jon.png" alt="" />
            <div class="name">@PeakJon</div>
            <div class="office">{{ $t('home.19') }}</div>
            <div class="info">{{ $t('home.23') }}</div>
          </div>
          <div class="partner-item">
            <img src="@img/Ryan.png" alt="" />
            <div class="name">@PeakPam</div>
            <div class="office">{{ $t('home.20') }}</div>
            <div class="info">{{ $t('home.24') }}</div>
          </div>
          <div class="partner-item">
            <img src="@img/Pam.png" alt="" />
            <div class="name">@PeakRyan</div>
            <div class="office">{{ $t('home.21') }}</div>
            <div class="info">{{ $t('home.25') }}</div>
          </div>
          <div class="partner-item">
            <img src="@img/rach.png" alt="" />
            <div class="name">@Peakrach</div>
            <div class="office">{{ $t('home.22') }}</div>
            <div class="info">{{ $t('home.26') }}</div>
          </div>
        </div>
      </div>
      <div class="route-map">
        <div class="title">{{ $t('home.27') }}</div>
        <div class="route-map-wrap">
          <div class="route-map-item">
            <div class="map-header">
              <div class="map-group">
                <div class="name">{{ $t('home.28') }}</div>
                <div class="time">2022/07-08</div>
                <img src="@img/1.0.png" alt="" />
              </div>
            </div>
            <ul>
              <li>{{ $t('home.31') }}</li>
              <li>{{ $t('home.32') }}</li>
              <li>{{ $t('home.33') }}</li>
              <li>{{ $t('home.34') }}</li>
              <li>
                {{ $t('home.35') }}
              </li>
              <li>{{ $t('home.36') }}</li>
              <li>{{ $t('home.37') }}</li>
              <li>{{ $t('home.38') }}</li>
              <li>{{ $t('home.39') }}</li>
            </ul>
          </div>
          <div class="arrow">
            <img src="@img/map-arrow.png" alt="" />
          </div>
          <div class="route-map-item">
            <div class="map-header">
              <div class="map-group">
                <div class="name">{{ $t('home.29') }}</div>
                <div class="time">2022/09-11</div>
                <img src="@img/2.0.png" alt="" />
              </div>
            </div>
            <ul>
              <li>{{ $t('home.40') }}</li>
              <li>{{ $t('home.41') }}</li>
              <li>{{ $t('home.42') }}</li>
              <li>{{ $t('home.43') }}</li>
              <li>{{ $t('home.44') }}</li>
              <li>{{ $t('home.45') }}</li>
            </ul>
          </div>
          <div class="arrow">
            <img src="@img/map-arrow.png" alt="" />
          </div>
          <div class="route-map-item">
            <div class="map-header">
              <div class="map-group">
                <div class="name">{{ $t('home.30') }}</div>
                <div class="time">2022/12</div>
                <img src="@img/3.0.png" alt="" />
              </div>
            </div>
            <ul>
              <li>{{ $t('home.46') }}</li>
              <li>{{ $t('home.47') }}</li>
              <li>{{ $t('home.59') }}</li>
              <li>{{ $t('home.48') }}</li>
              <li>{{ $t('home.49') }}</li>
              <li>{{ $t('home.50') }}</li>
              <li>{{ $t('home.60') }}</li>
              <li>{{ $t('home.61') }}</li>
              <li>{{ $t('home.62') }}</li>
              <li>......</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="our-partner">
        <div class="title">{{ $t('home.54') }}</div>
        <div class="our-partner-wrap">
          <div class="partner-item">
            <a href="https://bad-hood.com" target="_blank"><img src="@img/BAD.png" alt="" /></a>
          </div>
          <div class="partner-item">
            <a href="https://galaxy.eco" target="_blank"><img src="@img/GALA.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p class="text">{{ $t('home.51') }}</p>
      <p class="text">{{ $t('home.52') }}</p>
      <div class="bottom">
        <p>{{ $t('home.55') }}</p>
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
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@import './mob.scss';
@import './pc.scss';
</style>
