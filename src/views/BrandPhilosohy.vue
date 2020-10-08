<template>
  <div class="philosohy-container">
    <div class="img1-container por animate-img">
      <img src="@assets/img/phi/img1.png" />
      <img class="img-player" src="@assets/img/company/play.png" />
    </div>
    <div class="text2-container anitmate-container">
      <div class="title1">Brand Vision</div>
      <div class="title2">Better Drive,Better Life</div>
      <div class="text">
        <p>
          Concept and meaning: JAC regards industry change as an opportunity.
          While insisting on independent R&D, JAC develops
        </p>
        <p>
          products that new consumers love, explores new automobile sales
          services and travel services, carries out extensive strategic
        </p>
        <p>
          alliances and resource integration and builds comprehensive and
          well-developed business ecosystem to meet the diversified
        </p>
        <p>
          and personalized needs of users, create a better vehicle life and
          become a leading comprehensive automobile group with out-
        </p>
        <p>
          standing performance and is well received and respected by the
          society.
        </p>
      </div>
    </div>
    <div class="img3-container anitmate-container animate-img">
      <img src="@assets/img/phi/img3.png" />
    </div>
    <div class="img4-container anitmate-container">
      <div class="title">Brand Mission</div>
      <p>
        Provide customers with the optimal transportation solutions and driving
        experience to promote continuous progress of the
      </p>
      <p>world.</p>
      <div class="img">
        <div class="img1 animate-img">
          <img src="@assets/img/phi/img4-1.png" />
        </div>
        <div class="img2 animate-img">
          <img src="@assets/img/phi/img4-2.png" />
        </div>
      </div>
      <div class="clearfix">
        <div class="text1 pull-left">
          <div class="title">Brand Values</div>
          <p>Be practical and moderate, Keep learning and innovating,</p>
          <p>Dare to strive forward, Maintain open-minded and coordinat-</p>
          <p>ed,Focus on customer-oriented, Adhere to omnidirectional</p>
          <p>communication.</p>
        </div>
        <div class="text2 pull-left">
          <div class="title">Brand Core</div>
          <p>"Think & Create" is the grand layout of JAC to "create a</p>
          <p>better vehicle life". JAC always stays true to original aspira-</p>
          <p>tion, adheres to the dream of manufacturing vehicles, and</p>
          <p>raises the banner of Chinese independent brand in auto in-</p>
          <p>dustry.</p>
          <p>"Be a Doer" is a concrete manifestation of JAC fighting spirit,</p>
          <p>and it is the hard power and pragmatic image of JAC Motors.</p>
        </div>
      </div>
    </div>
    <div class="img6-container anitmate-container">
      <div class="img1 animate-img">
        <img src="@assets/img/phi/img6-1.png" />
      </div>
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
    <div class="img7-container clearfix anitmate-container">
      <div class="text-area pull-left">
        <div class="title1">Brand Characteristics</div>
        <div class="content">
          <div class="title2">Wisdom</div>
          <div class="text">
            <p>Not only has an attitude of empathy, but also has a keen and</p>
            <p>forward-looking vision, and quickly finds effective methods</p>
            <p>to help consumers solve problems and create value.</p>
          </div>
          <div class="title2">Vitality</div>
          <div class="text">
            <p>Continuous innovation, full of action, active change and</p>
            <p>continuous improvement; lead the industry progress with</p>
            <p>new perspectives and new concepts.</p>
          </div>
          <div class="title2">Enthusiasm</div>
          <div class="text">
            <p>With reliable, trustworthy and down-to-earth research, rely-</p>
            <p>ing on leading technology and long manufacturing history,</p>
            <p>strive to introduce high-quality products, and make consum-</p>
            <p>ers' lives more secure and easy.</p>
          </div>
          <div class="title2">Enterprising</div>
          <p>Always pay attention to customer needs, actively keep an</p>
          <p>eye on market changes, follow the market trend, and take</p>
          <p>the initiative to meet various challenges instead of waiting</p>
          <p>for opportunities to come.</p>
        </div>
      </div>
      <div class="img pull-left">
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
      white-space: nowrap;
      font-family: Aileron-Regular;
      font-size: vw(30);
      height: vw(240);
      width: vw(1680);
      p {
        margin-bottom: vw(25);
      }
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
    p {
      font-size: vw(30);
      font-family: Aileron-Regular;
      &:not(:last-child) {
        margin-bottom: vw(20);
      }
    }

    .img {
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
      height: vw(282);
    }
    .text2 {
      width: vw(798);
      margin-left: vw(81);
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
    p {
      font-family: Aileron-Regular;
      font-size: vw(30);
      &:not(:last-child) {
        margin-bottom: vw(25);
      }
    }
    .text {
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
</style>
