<template>
  <div class="life-style">
    <div class="img1-container">
      <img src="@assets/img/life/banner.jpg" class="hidden-xs">
      <img src="@assets/img/life/banner-wap.png" class="visible-xs-inline">
    </div>
    <div class="item-container clearfix">
      <div class="text-title w100">Lifestyle</div>
      <div class="item1 pcm wap1 anitmate-container" @click="onShowMask(1)">
        <div class="img por">
          <img src="@assets/img/life/1.jpg" v-show="!showVideo1">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(1)" v-show="!showVideo1" />
          <video src="@assets/video/rnd-1.mp4" id="video1" preload controls @touchend="onPause(1)" v-show="showVideo1"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          <p>Vegetable transportation, Truck model:1035K, Mileage: 60,000KM</p>
          Every morning I drove to the farmer's market to deliver vegetables.
        </div>
      </div>
      <div class="item2 wap2 wapm anitmate-container" @click="onShowMask(2)">
        <div class="img animate-img">
          <img src="@assets/img/life/2.jpg">
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Wood transportation: Truck model: 1035KT, Mileage: 15412KM, "Driving a truck is as comfortable as driving a car,"
        </div>
      </div>
      <div class="item3 pcm wap2 anitmate-container" @click="onShowMask(3)">
        <div class="img por">
          <img src="@assets/img/life/3.jpg" v-show="!showVideo2">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(2)" v-show="!showVideo2" />
          <video src="@assets/video/rnd-2.mp4" id="video2" preload controls @touchend="onPause(2)" v-show="showVideo2"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Road rescue: Truck model: 1035K, Mileage: 343,000km, "I start my car every morning at 8a.m., and turn it off at 11 p.m."
        </div>
      </div>
      <div class="clearwap"></div>
      <div class="item4 pcm wap2 anitmate-container" @click="onShowMask(4)">
        <div class="img por">
          <img src="@assets/img/life/4.jpg" v-show="!showVideo3">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(3)" v-show="!showVideo3" />
          <video src="@assets/video/rnd-1.mp4" id="video3" preload controls @touchend="onPause(3)" v-show="showVideo3"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Driving training school: Truck model: 1040K, Mileage: 6596km, “everyday my truck is driven and tested by many people”
        </div>
      </div>
      <div class="item5 wap2 anitmate-container" @click="onShowMask(5)">
        <div class="img por">
          <img src="@assets/img/life/5.jpg" v-show="!showVideo4">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(4)" v-show="!showVideo4" />
          <video src="@assets/video/rnd-1.mp4" id="video4" preload controls @touchend="onPause(4)" v-show="showVideo4"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Transportation: Truck model: 1020, Mileage: 435000km. Since 2007, I have purchased 5 light trucks in total, and I have been impressed by the quality of JAC light trucks
        </div>
      </div>
      <div class="item6 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(6)">
        <div class="img por">
          <img src="@assets/img/life/6.jpg" v-show="!showVideo5">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(5)" v-show="!showVideo5" />
          <video src="@assets/video/rnd-1.mp4" id="video5" preload controls @touchend="onPause(5)" v-show="showVideo5"></video>
        </div>
        <div class="title clearfix">
          <span>Vietnam</span>
          <div class="icon icon2"></div>
        </div>
        <div class="text">
          <p>Mobile coffee store</p>
          Every day with my X5 mini truck. When I drove my flexible X5 mini truck, I was like riding a strong horse
        </div>
      </div>
      <div class="item7 pc5 wap2 anitmate-container" @click="onShowMask(7)">
        <div class="img animate-img">
          <img src="@assets/img/life/7.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          We are all members of JAC Auto Club. We often organize some activities, and drive our loved JAC cars to the destination
        </div>
      </div>
      <div class="item8 pc5 pcm wap1 anitmate-container" @click="onShowMask(8)">
        <div class="img animate-img">
          <img src="@assets/img/life/8.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          This is my first JAC SUV. I drive it to work every day for the past three years.
        </div>
      </div>
      <div class="item9 pc5 wap1 anitmate-container" @click="onShowMask(9)">
        <div class="img animate-img">
          <img src="@assets/img/life/9.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I love to travel. I'm an online blogger, and I like to record the beauty and details of my travels.
        </div>
      </div>
      <div class="item10 pc3 pcm wap2 wapm anitmate-container" @click="onShowMask(10)">
        <div class="img animate-img">
          <img src="@assets/img/life/10.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I graduated from college this year. Speaking of this car, it is my graduation gift from my parents.
        </div>
      </div>
      <div class="item11 pc3 pcm wap2 anitmate-container" @click="onShowMask(11)">
        <div class="img animate-img">
          <img src="@assets/img/life/11.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          <p>These are my two daughters, twins, as you can see!</p>
          My daughters love this car so much that they often ask me to take them for a ride!
        </div>
      </div>
      <div class="item12 pc3 wap1 anitmate-container" @click="onShowMask(12)">
        <div class="img animate-img">
          <img src="@assets/img/life/12.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I'm a model! I have two cars. This car is one of my them, and it's my favorite.
        </div>
      </div>
      <div class="item13 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(13)">
        <div class="img animate-img">
          <img src="@assets/img/life/13.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          My wife and I just got married. This is the SUV we chose together.
        </div>
      </div>
      <div class="item14 pc5 wap2 anitmate-container" @click="onShowMask(14)">
        <div class="img animate-img">
          <img src="@assets/img/life/14.jpg">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I bought this car mostly for my wife, because I travel a lot, and I worry about her life’s getting inconvenient, so I bought this JAC SUV.
        </div>
      </div>
      <div class="item15 pc3 pcm wap1 anitmate-container" @click="onShowMask(15)">
        <div class="img animate-img">
          <img src="@assets/img/life/15.jpg">
        </div>
        <div class="title clearfix">
          <span>Mexico</span>
          <div class="icon icon4"></div>
        </div>
        <div class="text">
          See? This is my favorite friend, Peter. Yes, he's a dog. I bought this car for him because he loves to go for a ride.
        </div>
      </div>
      <div class="item16 pc3 pcm wap1 anitmate-container" @click="onShowMask(16)">
        <div class="img animate-img">
          <img src="@assets/img/life/16.jpg">
        </div>
        <div class="title clearfix">
          <span>Chile</span>
          <div class="icon icon5"></div>
        </div>
        <div class="text">
          My favorite sport is motorcycle racing, but I found that I needed a car that would take me to more places to race!
        </div>
      </div>
      <div class="item17 pc3 wap1 anitmate-container" @click="onShowMask(17)">
        <div class="img animate-img">
          <img src="@assets/img/life/17.jpg">
        </div>
        <div class="title clearfix">
          <span>Mexico</span>
          <div class="icon icon4"></div>
        </div>
        <div class="text">
          My family and I run a farm, and the most pleasant part of the day is when I spend the afternoon relaxing with my dog on a haystack in a pickup truck.
        </div>
      </div>
      <div class="item18 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(18)">
        <div class="img animate-img">
          <img src="@assets/img/life/18.jpg">
        </div>
        <div class="title clearfix">
          <span>Georgia</span>
          <div class="icon icon6"></div>
        </div>
        <div class="text">
          <p>I’m Merab Odishvili, live in Kazbegi region</p>
          With snow and freeze, so 4*4 Car is very useful here, especially when you work in tourism sector.
        </div>
      </div>
      <div class="item19 pc5 wap2 anitmate-container" @click="onShowMask(19)">
        <div class="img animate-img">
          <img src="@assets/img/life/19.jpg">
        </div>
        <div class="title clearfix">
          <span>Sudan</span>
          <div class="icon icon7"></div>
        </div>
        <div class="text">
          Here is Port Sudan at 6 am. I’m Mohammed Abdelgadir Abakr, a normal truck driver. My driving route is relatively fixed, between Port Sudan and Khartoum.
        </div>
      </div>
      <div class="item20 pc3 pcm wap2 wapm anitmate-container" @click="onShowMask(20)">
        <div class="img por">
          <img src="@assets/img/life/20.jpg" v-show="!showVideo6">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(6)" v-show="!showVideo6" />
          <video src="@assets/video/rnd-1.mp4" id="video6" preload controls @touchend="onPause(6)" v-show="showVideo6"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          We use it to transport fruits and vegetables to the most vulnerable areas of Montevideo.
        </div>
      </div>
      <div class="item21 pc3 pcm wap2 anitmate-container" @click="onShowMask(21)">
        <div class="img por">
          <img src="@assets/img/life/21.jpg" v-show="!showVideo7">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(7)" v-show="!showVideo7" />
          <video src="@assets/video/rnd-1.mp4" id="video7" preload controls @touchend="onPause(7)" v-show="showVideo7"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I work at Volcanica,and we have been distributing craft beer in nightclubs and supermarkets for more than two years.
        </div>
      </div>
      <div class="item22 pc3 wap2 wapm anitmate-container" @click="onShowMask(22)">
        <div class="img por">
          <img src="@assets/img/life/22.jpg" v-show="!showVideo8">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(8)" v-show="!showVideo8" />
          <video src="@assets/video/rnd-1.mp4" id="video8" preload controls @touchend="onPause(8)" v-show="showVideo8"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I sell firewood and construction supplies. I have had the truck for two years, It has been very good
        </div>
      </div>
      <div class="item23 pc5 pcm wap2 anitmate-container" @click="onShowMask(23)">
        <div class="img por">
          <img src="@assets/img/life/23.jpg" v-show="!showVideo9">
          <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(9)" v-show="!showVideo9" />
          <video src="@assets/video/rnd-1.mp4" id="video9" preload controls @touchend="onPause(9)" v-show="showVideo9"></video>
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I have had the truck for 10 months, and i am very satisfied in forms of performance and consumption, the comforts it has.
        </div>
      </div>
      <div class="item24 pc5 wap1 anitmate-container" @click="onShowMask(24)">
          <div class="img por">
            <img src="@assets/img/life/24.jpg" v-show="!showVideo10">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(10)" v-show="!showVideo10" />
            <video src="@assets/video/rnd-1.mp4" id="video10" preload controls @touchend="onPause(10)" v-show="showVideo10"></video>
          </div>
          <div class="title clearfix">
            <span>Uruguay</span>
            <div class="icon icon1"></div>
          </div>
          <div class="text">
            My name is Jorge. I have been driving the truck since January for a cargo company.
          </div>
        </div>
    </div>
    <div class="mask-container" v-if="showMask">
      <div class="close-container clearfix">
        <div class="icon-close" @click="onHideMask">
          <img src="@assets/img/life/close.png">
        </div>
      </div>
      <div class="over-auto of-container">
        <div style="width: 100px;height: 1000px;background: #fff;"></div>
      </div>

    </div>
  </div>
</template>

<script>
	import mix from "@mixins/mixin";

	export default {
		name: "LifeStyle",
		mixins: [mix],
    data: () => ({
      showMask: false,
      maskIndex: 0
    }),
    methods: {
		  onShowMask(val) {
		    this.maskIndex = val;
		    this.showMask = true;
      },
      onHideMask() {
        this.showMask = false;
      }
    },
    watch: {
      showMask(val) {
        if (val) {
          $('html').css('overflow', 'hidden');
        } else {
          $('html').css('overflow', 'auto');
        }
      }
    }
	}
</script>

<style lang="scss">
  @import "~@assets/scss/func.scss";
  .life-style {
    .img1-container {
      margin-bottom: vw(76);
    }
    .item-container {
      padding: 0 vw(110) vw(250);
      .text-title {
        font-size: vw(72);
        font-family: Cormorant-Bold;
        line-height: 1;
        font-weight: bold;
      }
      .anitmate-container {
        float: left;
        margin-top: vw(97);
      }
      .pcm {
        margin-right: vw(48);
      }
      .pc3 {
        width: vw(534);
      }
      .pc5 {
        width: vw(825);
      }
      .item1 {
        width: vw(1152);
      }
      .item2 {
        width: vw(497);
      }
      .item3 {
        width: vw(637);
      }
      .item4 {
        width: vw(465);
      }
      .item5 {
        width: vw(495);
      }
      .title {
        font-size: vw(60);
        font-family: Cormorant-Bold;
        font-weight: bold;
        color: #410004;
        line-height: 1;
        margin-top: vw(50);
        margin-bottom: vw(20);
      }
      .text {
        font-size: vw(30);
        font-family: Aileron-Regular;
        line-height: vw(40);
      }
      .icon {
        width: vw(58);
        height: vw(58);
        float: right;
        background-size: contain;
        &.icon1 {
          background-image: url("~@assets/img/life/g1.png");
        }
        &.icon2 {
          background-image: url("~@assets/img/life/g2.png");
        }
        &.icon3 {
          background-image: url("~@assets/img/life/g3.png");
        }
        &.icon4 {
          background-image: url("~@assets/img/life/g4.png");
        }
        &.icon5 {
          background-image: url("~@assets/img/life/g5.png");
        }
        &.icon6 {
          background-image: url("~@assets/img/life/g6.png");
        }
        &.icon7 {
          background-image: url("~@assets/img/life/g7.png");
        }
      }
    }
    .mask-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding-right: vw(16);
      background: #000;
      opacity: .9;
      z-index: 999;
      .close-container {
        height: 14.5vw;
        padding-top: vw(138);
        padding-right: vw(155);
        .icon-close {
          width: vw(59);
          height: vw(59);
          float: right;
          cursor: pointer;
        }
      }
      .of-container {
        height: calc(100% - 14.5vw);
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background: #D81010;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .life-style {
      .img1-container {
        margin-bottom: 0;
      }
      .clearwap {
        clear: left;
      }
      .item-container {
        padding: 0 wp(22) wp(250);
        .text-title {
          font-size: wp(60);
        }
        .anitmate-container {
          margin-top: wp(80);
        }
        .img {
          img:not(.img-player) {
            height: 100%;
          }
        }
        .wap1 {
          width: 100%;
          .img {
            height: wp(334);
          }
        }
        .wap2 {
          width: wp(338);
          .img {
            height: wp(387);
          }
        }
        .wapm {
          margin-right: wp(10);
        }
        .title {
          font-size: wp(38);
          margin-top: wp(32);
          margin-bottom: wp(10);
        }
        .text {
          font-size: wp(28);
          line-height: wp(40);
        }
        .icon {
          width: wp(41);
          height: wp(41);
        }
      }
    }
  }
</style>
