<script lang="ts" setup>
import { onMounted } from 'vue';

// const startAnimation = dom => {
//   let start = Date.now();

//   let timer = setInterval(function () {
//     let timePassed = Date.now() - start;
//     dom.style.backgroundPositionY = timePassed / 10 + 'px';

//     if (timePassed > 5000) {
//       clearInterval(timer);
//       startAnimation(dom);
//     }
//   }, 20);
// };

// onMounted(() => {
//   const main = document.querySelector('main');

//   startAnimation(main);
// });
</script>

<template>
  <main>
    <div class="banner">
      <img src="@img/banner.png" alt="" />
    </div>
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
        </div>
      </div>
    </section>
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
            <div class="name">@PeakRyan</div>
            <div class="office">{{ $t('home.20') }}</div>
            <div class="info">{{ $t('home.24') }}</div>
          </div>
          <div class="partner-item">
            <img src="@img/Pam.png" alt="" />
            <div class="name">@PeakJon</div>
            <div class="office">{{ $t('home.21') }}</div>
            <div class="info">{{ $t('home.25') }}</div>
          </div>
          <div class="partner-item">
            <img src="@img/rach.png" alt="" />
            <div class="name">@PeakJon</div>
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
</template>

<style lang="scss" scoped>
main {
  background: url('~@img/page-bgc.png') no-repeat;
  background-size: cover;
  background-color: #171717;
}
a {
  color: #fff;
}
h3 {
  font-weight: initial;
}
.banner {
  img {
    width: 100%;
  }
}
.section-bgc {
  position: relative;
  @include flexPos(flex-start, flex-start);
  flex-direction: column;
  height: 1134px;
  padding: 248px 0 73px;
  color: #fff;
  text-align: center;
  .section-bgc-wrap {
    width: 1200px;
    margin: 0 auto;
  }
  .arrow-wrap {
    .arrow {
      position: absolute;
      left: 50%;
      top: 10%;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      img {
        width: 33px;
      }
    }

    .arrow-1 {
      -webkit-animation: arrow-movement 2s ease-in-out infinite;
      animation: arrow-movement 2s ease-in-out infinite;
    }

    .arrow-2 {
      -webkit-animation: arrow-movement 2s 1s ease-in-out infinite;
      animation: arrow-movement 2s 1s ease-in-out infinite;
    }

    @-webkit-keyframes arrow-movement {
      0% {
        opacity: 0;
        top: 5%;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes arrow-movement {
      0% {
        opacity: 0;
        top: 5%;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 140px;
    font-family: Roboto-Black, Roboto;
    font-weight: 900;
    color: rgba(0, 0, 0, 0);
    line-height: 196px;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
    text-stroke: 1px rgba(255, 255, 255, 0.3);
    background: linear-gradient(360deg, #f4543b 0%, rgba(244, 84, 59, 0) 100%);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    z-index: 1;
    padding-bottom: 100px;
  }
  .desc {
    position: relative;
    z-index: 9;
    h3 {
      font-size: 22px;
      line-height: 31px;
      margin-bottom: 26px;
    }
    p {
      line-height: 32px;
      font-size: 14px;
    }
  }

  .info {
    position: relative;
    margin: 0 auto;
    z-index: 99;
    margin-top: 551px;
    text-align: center;
    h3 {
      margin-bottom: 26px;
      font-size: 22px;
      line-height: 31px;
    }
    P {
      font-weight: 400;
      line-height: 24px;
      font-size: 14px;
      max-width: 522px;
      margin: 0 auto;
    }
  }
  .boy-1 {
    position: absolute;
    top: 349px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 481px;
    }
  }
  .boy-2 {
    position: absolute;
    bottom: -80px;
    left: 107px;
    z-index: 2;
    img {
      width: 510px;
    }
  }
  .boy-3 {
    position: absolute;
    bottom: -80px;
    right: 107px;
    z-index: 2;
    img {
      width: 546px;
    }
  }
}

.section-mint {
  color: #fff;
  .section-wrap {
    padding: 193px 0 232px;
    margin: 0 auto;
    width: 1200px;
  }
  .mint-btn {
    position: relative;
    width: 480px;
    height: 90px;
    margin: 0 auto;
    background: url('~@img/mint-btn.png');
    background-size: cover;
    opacity: 1;
    @include flexPos(center);
    color: #ffffff;
    line-height: 31px;
    font-size: 22px;
    margin-bottom: 112px;
    // &::after {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   content: '';
    //   width: 0px;
    //   height: 0px;
    //   border-color: transparent #000;
    //   border-width: 0px 0px 30px 30px;
    //   border-style: solid;
    // }
    // &::before {
    //   position: absolute;
    //   right: 0;
    //   bottom: 0;
    //   content: '';
    //   width: 0px;
    //   height: 0px;
    //   border-color: transparent #000;
    //   border-width: 30px 30px 0px 0px;
    //   border-style: solid;
    // }
    img {
      width: 17px;
      margin-left: 12px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 400;
    color: #ffffff;
    line-height: 31px;
    margin-bottom: 26px;
  }
  p {
    font-weight: 400;
    color: #ffffff;
    line-height: 40px;
    font-size: 14px;
  }

  .desc-img {
    margin-top: 27px;
    margin-bottom: 177px;
    img {
      width: 1200px;
    }
  }

  .refer {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    height: 344px;
    background: url('~@img/recom.png') no-repeat;
    background-size: cover;
    opacity: 1;
    padding: 93px 0px 38px 28px;
    h3 {
      font-size: 22px;
      color: #ffffff;
      line-height: 31px;
    }
    .gap {
      height: 28px;
    }
    p {
      color: #ffffff;
      line-height: 24px;
      max-width: 590px;
    }
    .desc-img {
      position: absolute;
      right: 0;
      top: -90px;
      img {
        width: 444px;
      }
    }
  }
}

.section-nft {
  background-image: url('~@img/nft-bgc.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 130px 0 132px;
  .section-nft-wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .desc {
      flex-direction: column;
      @include flexPos(center, flex-start);
      h3 {
        font-size: 22px;
        line-height: 31px;
        color: #fff;
        margin-bottom: 23px;
      }
      p {
        font-weight: 400;
        color: #ffffff;
        line-height: 40px;
      }
    }
    .img {
      margin-left: 145px;
      img {
        width: 503px;
      }
    }
  }
}

.section-partner {
  .section-partner-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 112px;
    text-align: center;
    .title {
      font-size: 22px;
      color: #ffffff;
      line-height: 31px;
      margin-bottom: 62px;
    }
  }

  .partner-wrap {
    @include flexPos(space-around, center);
    margin-bottom: 112px;
    .partner-item {
      @include flexPos(center);
      flex-direction: column;
      color: #fff;
      img {
        width: 215px;
      }
      .name {
        margin: 20px 0 17px;
      }
      .office {
        margin-bottom: 6px;
      }
      .info {
        max-width: 270px;
      }
    }
  }

  .route-map {
    color: #fff;
    margin-bottom: 112px;
    .title {
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 34px;
    }

    .route-map-wrap {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .arrow {
        padding-top: 45px;
        img {
          width: 36px;
        }
      }
    }
    .route-map-item {
      width: 308px;
      display: flex;
      flex-direction: column;
    }
    .route-map-item {
      display: flex;
      .map-header {
        .map-group {
          position: relative;
          @include flexPos(center);
          &::after {
            position: absolute;
            left: 0;
            bottom: 25px;
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #fff;
          }
          .name {
            font-size: 20px;
            margin-right: 45px;
          }
          .time {
            font-size: 20px;
            margin-right: 28px;
          }
          img {
            width: 56px;
            z-index: 99;
          }
        }
      }
      ul {
        padding-left: 30px;
      }
      ul li {
        position: relative;
        line-height: 30px;
        font-size: 14px;
        @include flexPos(flex-start, center);
        &::before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          background: url('~@img/diamond.svg') no-repeat;
          margin-right: 6px;
          margin-top: 10px;
          align-self: flex-start;
          flex-shrink: 0;
        }
      }
    }
    .arrow {
      margin: 0 51px 0 41px;
    }
  }

  .our-partner {
    color: #fff;
    text-align: center;
    padding-bottom: 242px;
    .title {
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 54px;
    }
    .our-partner-wrap {
      @include flexPos(center);
      .partner-item:nth-child(1) img {
        width: 133px;
        margin-right: 81px;
      }
      .partner-item:nth-child(2) img {
        width: 182px;
      }
    }
  }
}

footer {
  color: #fff;
  text-align: center;
  .text {
    font-size: 22px;
    line-height: 31px;
  }
  .bottom {
    margin-top: 100px;
    padding-bottom: 47px;
    p {
      font-size: 22px;
      line-height: 31px;
      margin-bottom: 17px;
    }
  }
  .link-wrap {
    @include flexPos(center);
    a:nth-child(1) img {
      width: 23px;
      margin-right: 52px;
    }
    a:nth-child(2) img {
      width: 23px;
      margin-right: 48px;
    }
    a:nth-child(3) img {
      width: 28px;
    }
  }
}
</style>
