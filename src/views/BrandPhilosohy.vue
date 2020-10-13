<template>
  <div class="philosohy-container">
    <div class="img1-container por">
      <img src="@assets/img/phi/img1.png" v-show="!showVideo1" />
      <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(1)" v-show="!showVideo1" />
      <video src="@assets/video/band5.mp4" id="video1" preload controls @touchend="onPause(1)" v-show="showVideo1"></video>
    </div>
    <div class="text2-container anitmate-container">
      <div class="title1">Brand Vision</div>
      <div class="title2">Better Drive,Better Life</div>
      <div class="text">
          Concept and meaning: JAC regards industry change as an opportunity.
          While insisting on independent R&D, JAC develops
          products that new consumers love, explores new automobile sales
          services and travel services, carries out extensive strategic
          alliances and resource integration and builds comprehensive and
          well-developed business ecosystem to meet the diversified
          and personalized needs of users, create a better vehicle life and
          become a leading comprehensive automobile group with outstanding performance and is well received and respected by the
          society.
      </div>
    </div>
    <div class="img3-container anitmate-container">
      <img src="@assets/img/phi/img3.png" />
    </div>
    <div class="img4-container anitmate-container">
      <div class="title">Brand Mission</div>
      <div class="text">
        Provide customers with the optimal transportation solutions and driving
        experience to promote continuous progress of the world.
      </div>
      <div class="clearfix">
        <div class="text1 pull-left">
          <div class="img1 animate-img">
            <img src="@assets/img/phi/img4-1.png" />
          </div>
          <div class="title">Brand Values</div>
          <div class="text">
            Be practical and moderate, Keep learning and innovating,
            Dare to strive forward, Maintain open-minded and coordinated,Focus on customer-oriented, Adhere to omnidirectional
            communication.
          </div>
        </div>
        <div class="text2 pull-left">
          <div class="img2 animate-img">
            <img src="@assets/img/phi/img4-2.png" />
          </div>
          <div class="title">Brand Core</div>
         <div class="text">
           "Think & Create" is the grand layout of JAC to "create a
           better vehicle life". JAC always stays true to original aspiration, adheres to the dream of manufacturing vehicles, and
           raises the banner of Chinese independent brand in auto industry.
         </div>
          <div class="text">
           "Be a Doer" is a concrete manifestation of JAC fighting spirit,
           and it is the hard power and pragmatic image of JAC Motors.
         </div>
        </div>
      </div>
    </div>
    <div class="img6-container anitmate-container">
      <div class="img1">
        <img src="@assets/img/phi/img6-1.png" />
      </div>
      <div class="wap">
        <div class="img2 animate-img">
          <img src="@assets/img/phi/img6-2.png" />
        </div>
        <div class="img3 animate-img">
          <img src="@assets/img/phi/img6-3.png" />
        </div>
        <div class="img4 animate-img">
          <img src="@assets/img/phi/img6-4.png" />
        </div>
      </div>
    </div>
    <div class="img7-container clearfix anitmate-container">
      <div class="text-area pull-left">
        <div class="title1">Brand Characteristics</div>
        <div class="content">
          <div class="title2">Wisdom</div>
          <div class="text">
            Not only has an attitude of empathy, but also has a keen and
            forward-looking vision, and quickly finds effective methods
            to help consumers solve problems and create value.
          </div>
          <div class="title2">Vitality</div>
          <div class="text">
            Continuous innovation, full of action, active change and
            continuous improvement; lead the industry progress with
            new perspectives and new concepts.
          </div>
          <div class="img1 animate-img">
            <img src="@assets/img/phi/img7-1.png" />
          </div>
          <div class="title2">Enthusiasm</div>
          <div class="text">
            With reliable, trustworthy and down-to-earth research, relying on leading technology and long manufacturing history,
            strive to introduce high-quality products, and make consumers' lives more secure and easy.
          </div>
          <div class="title2">Enterprising</div>
          <div class="text">
            Always pay attention to customer needs, actively keep an
            eye on market changes, follow the market trend, and take
            the initiative to meet various challenges instead of waiting
            for opportunities to come.
          </div>
          <div class="img2 animate-img">
            <img src="@assets/img/phi/img7-2.png" />
          </div>
        </div>
      </div>
      <div class="img pull-left hidden-xs">
        <div class="img1 animate-img">
          <img src="@assets/img/phi/img7-1.png" />
        </div>
        <div class="img2 animate-img">
          <img src="@assets/img/phi/img7-2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@mixins/mixin";

export default {
  name: "BrandPhilosohy",
  mixins: [mix]
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.philosohy-container {
  line-height: 1;
  .img1-container {
    margin-bottom: vw(168);
  }
  .text2-container {
    padding-left: vw(110);
    margin-bottom: vw(168);
    .title1 {
      font-family: Cormorant-Bold;
      font-size: vw(72);
      margin-bottom: vw(63);
    }
    .title2 {
      font-family: Cormorant-Regular;
      font-size: vw(60);
      margin-bottom: vw(44);
    }
    .text {
      font-family: Aileron-Regular;
      font-size: vw(30);
      height: vw(240);
      width: vw(1680);
      line-height: vw(52);
    }
  }
  .img3-container {
    margin-bottom: vw(54);
  }
  .img4-container {
    padding-left: vw(110);
    margin-bottom: vw(170);
    .title {
      font-family: Cormorant-Bold;
      font-size: vw(60);
      margin-bottom: vw(55);
    }
    .text {
      font-size: vw(30);
      font-family: Aileron-Regular;
      width: vw(1633);
      line-height: vw(40);
    }

    .img1,.img2 {
      margin-top: vw(113);
      margin-bottom: vw(54);
      img {
        width: vw(808);
        height: vw(613);
      }
      .img2 {
        margin-left: vw(81);
      }
    }
    .text1 {
      width: vw(807);
      .text {
        width: 100%;
      }
    }
    .text2 {
      width: vw(798);
      margin-left: vw(81);
      .text {
        width: 100%;
      }
    }
  }
  .img6-container {
    .img1 {
      margin-bottom: vw(56);
    }
    .img2 {
      width: vw(602);
    }
    .img3 {
      width: vw(427);
      margin-left: vw(23);
    }
    .img4 {
      width: vw(844);
      margin-left: vw(23);
    }
  }
  .img7-container {
    padding-left: vw(110);
    line-height: 1;
    margin-bottom: vw(254);
    .title1 {
      font-family: Cormorant-Bold;
      font-size: vw(60);
      margin-bottom: vw(37);
    }
    .title2 {
      font-family: Cormorant-Bold;
      font-size: vw(36);
      margin-bottom: vw(35);
    }
    .text {
      font-family: Aileron-Regular;
      font-size: vw(30);
      line-height: vw(48);
      margin-bottom: vw(60);
    }
    .text-area {
      width: vw(806);
      margin-top: vw(186);
      .content {
        height: vw(1123);
      }
    }
    .img {
      width: vw(807);
      margin-top: vw(169);
      margin-left: vw(84);
      .img1 {
        height: vw(409);
        margin-bottom: vw(39);
      }
      .img2 {
        height: vw(755);
      }
    }
  }
}
@media screen and (max-width: 767px){
  .philosohy-container {
    .img1-container {
      margin-bottom: wp(69);
    }
    .text2-container,
    .img3-container,
    .img4-container,
    .img6-container,
    .img7-container {
      padding: 0 wp(40);
    }
    .text2-container {
      margin-bottom: wp(52);

      .title1 {
        font-size: wp(60);
        margin-bottom: wp(28);
      }

      .title2 {
        font-size: wp(48);
        margin-bottom: wp(30);
      }

      .text {
        font-size: wp(28);
        height: wp(566);
        width: 100%;
        line-height: wp(48);
      }
    }
    .img3-container {
      margin-bottom: wp(69);
    }
    .img4-container {
      margin-bottom: wp(48);
      .title {
        font-size: wp(60);
        margin-bottom: wp(30);
      }
      .text {
        font-size: wp(28);
        width: 100%;
        height: auto;
        line-height: wp(43);
      }

      .img1, .img2 {
        margin-top: wp(48);
        margin-bottom: wp(68);
        img {
          width: 100%;
          height: auto;
        }
        .img2 {
          margin-left: 0;
        }
      }
      .text1 {
        float: none;
        width: 100%;
        height: auto;
        .text {
          width: 100%;
        }
      }
      .text2 {
        float: none;
        width: 100%;
        margin-left: 0;
      }
    }
    .img6-container {
      .wap {
        display: flex;
      }
    }
    .img7-container {
      margin-bottom: wp(247);
      .title1 {
        font-size: wp(60);
        margin-bottom: wp(57);
      }
      .title2 {
        font-family: Cormorant-Regular;
        font-size: wp(48);
        margin-bottom: wp(48);
      }
      .text {
        font-size: wp(28);
        line-height: wp(48);
        margin-bottom: wp(60);
      }
      .text-area {
        width: 100%;
        margin-top: wp(55);
        .content {
          height: auto;
        }
      }
      .img1, img2 {
          height: auto;
          margin-bottom: wp(50);
        }
    }
  }
}
</style>
