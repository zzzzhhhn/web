<template>
  <div class="history-container">
    <div class="img1-container animate-img">
      <img src="@assets/img/history/img1.png" alt="" />
    </div>

    <div class="clearfix flu-container por">
      <div class="left por pull-left">
        <div class="left1 anitmate-container">
          <div class="year">
            <number :show="left1" red :num="2"></number>
            <number :show="left1" red :num="0"></number>
            <number :show="left1" :num="1"></number>
            <number :show="left1" :num="9"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">May,21,2019</div>
          <div class="text">
            <p>JAC successfully participated in the acquisi-</p>
            <p>tion on Kazakhstan Allur Automobile Industry</p>
            <p>Group,marking the co-construction of “One</p>
            <p>Belt and One Road”entered a new stage</p>
          </div>
          <div class="left-img1 animate-img">
            <img src="@assets/img/history/left1.png" />
          </div>
        </div>
        <div class="left2 anitmate-container">
          <div class="title">December,2019</div>
          <div class="text">
            <p>Anhui Cummins Power Co.,Ltd was founded</p>
          </div>
          <div class="left-img2 animate-img">
            <img src="@assets/img/history/left2.png" />
          </div>
        </div>
        <div class="left3 anitmate-container">
          <div class="year">
            <number :show="left1" red :num="2"></number>
            <number :show="left1" red :num="0"></number>
            <number :show="left1" :num="1"></number>
            <number :show="left1" :num="7"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">April,19,2017</div>
          <div class="text">
            <p>JAC World-class Truck launched into the</p>
            <p>market,defining the new standard for</p>
            <p>world-class truck</p>
          </div>
        </div>
        <div class="left4 anitmate-container">
          <div class="year">
            <number :show="left4" red :num="2"></number>
            <number :show="left4" red :num="0"></number>
            <number :show="left4" :num="1"></number>
            <number :show="left4" :num="6"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">April,8,2016</div>
          <div class="text">
            <p>JAC and NIO signed a strategic cooperation</p>
            <p>framework agreement</p>
          </div>
        </div>
        <div class="left5 anitmate-container">
          <div class="title">August,27,2014</div>
          <div class="text">
            <p>Refine S3 launched into the market,with</p>
            <p>orders up to 70,000 units within 4 months</p>
          </div>
          <div class="left-img3 animate-img">
            <img src="@assets/img/history/left3.png" />
          </div>
        </div>
        <div class="left6 anitmate-container">
          <div class="year">
            <number :show="left6" red :num="2"></number>
            <number :show="left6" red :num="0"></number>
            <number :show="left6" :num="1"></number>
            <number :show="left6" :num="3"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">November,27,2013</div>
          <div class="text">
            <p>The 1 millionth</p>
          </div>
          <div class="left-img4 animate-img">
            <img src="@assets/img/history/left4.png" />
          </div>
        </div>
        <div class="left7 anitmate-container">
          <div class="year">
            <number :show="left7" red :num="2"></number>
            <number :show="left7" red :num="0"></number>
            <number :show="left7" :num="1"></number>
            <number :show="left7" :num="2"></number>
          </div>
          <div class="line-left line"></div>
          <div class="text">
            <p>Russian subsidiary,the first wholly-owned</p>
            <p>subsidiary,was established</p>
          </div>
        </div>
        <div class="left8 anitmate-container">
          <div class="year">
            <number :show="left8" red :num="2"></number>
            <number :show="left8" red :num="0"></number>
            <number :show="left8" :num="1"></number>
            <number :show="left8" :num="1"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">March,18,2011</div>
          <div class="text">
            <p>JAC motors launched into Brazil,with great</p>
            <p>export performance</p>
          </div>
          <div class="left-img5 animate-img">
            <img src="@assets/img/history/left5.png" />
          </div>
        </div>
        <div class="left9 anitmate-container">
          <div class="title">October,2010</div>
          <div class="text">
            <p>The cumulative sales of JAC light trucks ex-</p>
            <p>ceeded 1 million units</p>
          </div>
        </div>
        <div class="left10 anitmate-container">
          <div class="title">October,21,2010</div>
          <div class="text">
            <p>JAC won the National Quality Award,the</p>
            <p>highest award of quality management in</p>
            <p>China</p>
          </div>
          <div class="left-img6 animate-img">
            <img src="@assets/img/history/left6.png" />
          </div>
        </div>
        <div class="left11 anitmate-container">
          <div class="year">
            <number :show="left11" red :num="2"></number>
            <number :show="left11" red :num="0"></number>
            <number :show="left11" :num="0"></number>
            <number :show="left11" :num="8"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">January,17,2008</div>
          <div class="text">
            <p>JAC first sedan-Bingyue off the line,marking</p>
            <p>JAC’s full entering into passenger car field</p>
          </div>
          <div class="left-img7 animate-img">
            <img src="@assets/img/history/left7.png" />
          </div>
        </div>
        <div class="left12 anitmate-container">
          <div class="title">May,18,2006</div>
          <div class="text">
            <p>The first off-road SUV Reying off the line</p>
          </div>
          <div class="left-img8 animate-img">
            <img src="@assets/img/history/left8.png" />
          </div>
        </div>
        <div class="left13 anitmate-container">
          <div class="year">
            <number :show="left13" red :num="2"></number>
            <number :show="left13" red :num="0"></number>
            <number :show="left13" :num="0"></number>
            <number :show="left13" :num="3"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">October,28,2003</div>
          <div class="text">
            <p>JAC heavy truck successfully rolled off the</p>
            <p>line,marking that JAC has formed a full series</p>
            <p>of commercial vehicle product line including</p>
            <p>heavy, medium and light truck</p>
          </div>
          <div class="left-img9 animate-img">
            <img src="@assets/img/history/left9.png" />
          </div>
        </div>
        <div class="left14 anitmate-container">
          <div class="year">
            <number :show="left14" red :num="2"></number>
            <number :show="left14" red :num="0"></number>
            <number :show="left14" :num="0"></number>
            <number :show="left14" :num="1"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">August,24,2001</div>
          <div class="text">
            <p>“JAC Motors”listed on the Shanghai Stock</p>
            <p>Exchange, stock code “600418”</p>
          </div>
          <div class="left-img10 animate-img">
            <img src="@assets/img/history/left10.png" />
          </div>
        </div>
        <div class="left15 anitmate-container">
          <div class="year">
            <number :show="left15" red :num="1"></number>
            <number :show="left15" red :num="9"></number>
            <number :show="left15" :num="9"></number>
            <number :show="left15" :num="0"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">June,1990</div>
          <div class="text">
            <p>China's first truly special chassis for bus was</p>
            <p>born in JAC Automobile Company</p>
          </div>
          <div class="left-img11 animate-img">
            <img src="@assets/img/history/left11.png" />
          </div>
        </div>
        <div class="left16 anitmate-container">
          <div class="year">
            <number :show="left16" red :num="1"></number>
            <number :show="left16" red :num="9"></number>
            <number :show="left16" :num="6"></number>
            <number :show="left16" :num="4"></number>
          </div>
          <div class="line-left line"></div>
          <div class="title">May,20,1964</div>
          <div class="text">
            <p>Hefei JAC automobile factory was founded</p>
          </div>
          <div class="left-img12 animate-img">
            <img src="@assets/img/history/left12.png" />
          </div>
        </div>
      </div>
      <div class="img2 pull-left">
        <img src="@assets/img/history/img2.png" class="img-history" />
        <img src="@assets/img/history/car.png" class="poa car" />
      </div>
      <div class="right pull-left">
        <div class="right1 anitmate-container">
          <div class="year">
            <number :show="right1" :num="2"></number>
            <number :show="right1" :num="0"></number>
            <number :show="right1" red :num="2"></number>
            <number :show="right1" red :num="0"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">June,11,2020</div>
          <div class="text">
            <p>JAC and Germany Volkswagen group</p>
            <p>signed an investment agreement related to</p>
            <p>strategic cooperation</p>
          </div>
          <div class="right-img1 animate-img">
            <img src="@assets/img/history/right1.png" />
          </div>
        </div>
        <div class="right2 anitmate-container por">
          <div class="year">
            <number :show="right2" :num="2"></number>
            <number :show="right2" :num="0"></number>
            <number :show="right2" red :num="1"></number>
            <number :show="right2" red :num="8"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">December,9,2018</div>
          <div class="text">
            <p>JAC won China Industry Award,becoming</p>
            <p>the first domestic comprehensive automobile</p>
            <p>company to win this award</p>
          </div>
          <div class="right-img-cup poa">
            <img src="@assets/img/history/cup.png" />
          </div>
        </div>
        <div class="right3 anitmate-container">
          <div class="title">July,9,2018</div>
          <div class="text">
            <p>JAC signed MOU with Volkswagen and Seat-</p>
            <p>tle,and jointly built NEV R&D center and de-</p>
            <p>velop NEV platform</p>
          </div>
        </div>
        <div class="right4 anitmate-container">
          <div class="title">April,24,2018</div>
          <div class="text">
            <p>JAC Volkswagen released a new brand-SOL</p>
          </div>
        </div>
        <div class="right5 anitmate-container">
          <div class="title">December,22,2017</div>
          <div class="text">
            <p>JAC Volkswagen Automobile Co.,Ltd was</p>
            <p>founded</p>
          </div>
          <div class="right-img2 animate-img">
            <img src="@assets/img/history/right2.png" />
          </div>
        </div>
        <div class="right6 anitmate-container">
          <div class="title">September,8,2016</div>
          <div class="text">
            <p>JAC and Volkswagen(China) signed the</p>
            <p>MOU for Joint venture cooperation</p>
          </div>
        </div>
        <div class="right7 anitmate-container">
          <div class="year">
            <number :show="right7" :num="2"></number>
            <number :show="right7" :num="0"></number>
            <number :show="right7" red :num="1"></number>
            <number :show="right7" red :num="4"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">July,21,2014</div>
          <div class="text">
            <p>JAC obtained 5,239 units order of heavy duty</p>
            <p>trucks from Venezuela</p>
          </div>
          <div class="right-img3 animate-img">
            <img src="@assets/img/history/right3.png" />
          </div>
        </div>
        <div class="right8 anitmate-container">
          <div class="title">December,28,2014</div>
          <div class="text">
            <p>JAC Yangzhou new base with annual capaci-</p>
            <p>ty of 100,000 units was complete and put into</p>
            <p>production and the new generation of pickup</p>
            <p>T6 rolled off the line</p>
          </div>
          <div class="right-img4 animate-img">
            <img src="@assets/img/history/right4.png" />
          </div>
        </div>
        <div class="right9 anitmate-container">
          <div class="title">October,15,2013</div>
          <div class="text">
            <p>JAC won“Asian Quality Excellence Award”</p>
          </div>
          <div class="right-img5 animate-img">
            <img src="@assets/img/history/right5.png" />
          </div>
        </div>
        <div class="right10 anitmate-container">
          <div class="title">June,29,2012</div>
          <div class="text">
            <p>Joint venture between JAC and Navistar to</p>
            <p>produce diesel engines was approved</p>
          </div>
        </div>
        <div class="right11 anitmate-container">
          <div class="year">
            <number :show="right11" :num="2"></number>
            <number :show="right11" :num="0"></number>
            <number :show="right11" red :num="1"></number>
            <number :show="right11" red :num="0"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">December,17,2010</div>
          <div class="text">
            <p>The 2 millionth vehicle of JAC rolled off the</p>
            <p>production line</p>
          </div>
          <div class="right-img6 animate-img">
            <img src="@assets/img/history/right6.png" />
          </div>

          <div class="text">
            <p>JAC Vietnam joint-stock company,the first</p>
            <p>joint-stock company,was founded</p>
          </div>
        </div>
        <div class="right12 anitmate-container">
          <div class="year">
            <number :show="right12" :num="2"></number>
            <number :show="right12" :num="0"></number>
            <number :show="right12" red :num="0"></number>
            <number :show="right12" red :num="9"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">November,2009</div>
          <div class="text">
            <p>JAC won the title of “Export Inspection Ex-</p>
            <p>emption Enterprise”,symbolizing the "Golden</p>
            <p>Pass" to the international market</p>
          </div>
          <div class="right-img7 animate-img">
            <img src="@assets/img/history/right7.png" />
          </div>
        </div>
        <div class="right13 anitmate-container">
          <div class="year">
            <number :show="right13" :num="2"></number>
            <number :show="right13" :num="0"></number>
            <number :show="right13" red :num="0"></number>
            <number :show="right13" red :num="6"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">November,5,2006</div>
          <div class="text">
            <p>“JAC-Japan Design Center”was founded</p>
          </div>
          <div class="right-img8 animate-img">
            <img src="@assets/img/history/right8.png" />
          </div>
        </div>
        <div class="right14 anitmate-container">
          <div class="year">
            <number :show="right14" :num="2"></number>
            <number :show="right14" :num="0"></number>
            <number :show="right14" red :num="0"></number>
            <number :show="right14" red :num="5"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">June,15,2005</div>
          <div class="text">
            <p>“JAC-Italy Design Center”was founded</p>
          </div>
          <div class="right-img9 animate-img">
            <img src="@assets/img/history/right9.png" />
          </div>
        </div>
        <div class="right15 anitmate-container">
          <div class="year">
            <number :show="right15" :num="2"></number>
            <number :show="right15" :num="0"></number>
            <number :show="right15" red :num="0"></number>
            <number :show="right15" red :num="2"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">March,18,2002</div>
          <div class="text">
            <p>JAC MPV officially rolled off the line,laying a</p>
            <p>good foundation for JAC entering into Pas-</p>
            <p>senger car field</p>
          </div>
          <div class="right-img10 animate-img">
            <img src="@assets/img/history/right10.png" />
          </div>
        </div>
        <div class="right16 anitmate-container">
          <div class="year">
            <number :show="right16" :num="1"></number>
            <number :show="right16" :num="9"></number>
            <number :show="right16" red :num="9"></number>
            <number :show="right16" red :num="6"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">April,18,1996</div>
          <div class="text">
            <p>The first light truck HFC1061 rolled off the</p>
            <p>line,creating car trend for China’s light truck</p>
          </div>
          <div class="right-img11 animate-img">
            <img src="@assets/img/history/right11.png" />
          </div>
        </div>
        <div class="right17 anitmate-container">
          <div class="year">
            <number :show="right17" :num="1"></number>
            <number :show="right17" :num="9"></number>
            <number :show="right17" red :num="6"></number>
            <number :show="right17" red :num="8"></number>
          </div>
          <div class="line-right line"></div>
          <div class="title">April,1968</div>
          <div class="text">
            <p>The trial-production of first JAC truck suc-</p>
            <p>ceeded, filling the blank of Anhui automobile</p>
            <p>industry</p>
          </div>
          <div class="right-img12 animate-img">
            <img src="@assets/img/history/right12.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@mixins/mixin";

export default {
  name: "BrandHistory",
  mixins: [mix],
  data: () => ({
    tops: [
      128,
      538,
      1089,
      2132,
      2752,
      3267,
      4436,
      5209,
      5596,
      6053,
      7254,
      7650,
      8151,
      8871,
      9281,
      9761,
      10171,
      10601,
      11011,
      11401,
      11811
    ],
    currentTop: 0,
    originTop: 0,
    maxTop: 0,
    running: false,
    diff: 0,
    targetTop: 0,
    timer: "",
    left1: false,
    left2: false,
    left3: false,
    left4: false,
    left5: false,
    left6: false,
    left7: false,
    left8: false,
    left9: false,
    left10: false,
    left11: false,
    left12: false,
    left13: false,
    left14: false,
    left15: false,
    left16: false,
    right1: false,
    right2: false,
    right3: false,
    right4: false,
    right5: false,
    right6: false,
    right7: false,
    right8: false,
    right9: false,
    right10: false,
    right11: false,
    right12: false,
    right13: false,
    right14: false,
    right15: false,
    right16: false,
    right17: false
  }),
  mounted() {
    this.targetTop = this.originTop = parseInt(
      $(".car")
        .css("top")
        .replace("px", "")
    );
    this.maxTop = parseInt($(".left16 .line").offset().top);
    $("body").scroll(e => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.omMove($(e.target).scrollTop());
      }, 500);
    });
    setTimeout(() => {
      this.left1 = true;
    }, 1000);
  },
  methods: {
    omMove(top) {
      if (top === this.currentTop) return;
      if (
        parseInt(
          $(".car")
            .css("top")
            .replace("px", "")
        ) === this.targetTop
      ) {
        this.diff = 0;
      }
      this.diff += top - this.currentTop;
      this.currentTop = top;
      this.targetTop += this.diff - 50;
      if (this.targetTop < this.originTop) this.targetTop = this.originTop;
      if (this.targetTop > this.maxTop) this.targetTop = this.maxTop;
      $(".car").css("top", this.targetTop + "px");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.history-container {
  line-height: 1;
  margin-bottom: vw(244);
  .img1-container {
    width: vw(1920);
    height: vw(738);
    margin-bottom: vw(30);
  }

  .flu-container {
    .year {
      color: #fff;
      font-family: Aileron-Bold;
      font-size: vw(72);
      margin-bottom: vw(6);
      position: relative;
      span {
        color: #cc000c;
      }
    }
    .title {
      font-family: Cormorant-Bold;
      font-size: vw(60);
      margin-bottom: vw(25);
    }
    .text {
      font-family: Aileron-Regular;
      font-size: vw(36);
      margin-bottom: vw(20);
      p:not(:last-child) {
        margin-bottom: vw(20);
      }
    }
    .left {
      width: vw(870);
      text-align: right;
      padding-right: vw(30);
      .year {
        transform: translateX(vw(120));

        &:before {
          content: "<";
          color: #fff;
          position: absolute;
          font-weight: bold;
          top: vw(-30);
          right: vw(38);
          font-size: vw(30);
          width: vw(18);
          height: vw(19);
        }
      }
      .animate-img {
        display: inline-block;
      }
      .line-left {
        width: vw(444);
        display: inline-block;
        height: 1px;
        border-bottom: 1px solid #bacd00;
        transform: translateX(vw(147));
        margin-bottom: vw(30);
        &:before {
          content: "";
          display: block;
          width: vw(18);
          height: vw(18);
          border-radius: vw(9);
          background: #bacd00;
          transform: translateY(vw(-9));
        }
      }
      .left1 {
        margin-top: vw(462);
        margin-bottom: vw(270);
        .left-img1 {
          width: vw(489);
          height: vw(329);
        }
      }
      .left2 {
        margin-bottom: vw(159);
        .left-img2 {
          width: vw(489);
          height: vw(303);
        }
      }
      .left3 {
        margin-bottom: vw(276);
        .line-left {
          width: vw(494);
        }
      }
      .left4 {
        margin-bottom: vw(529);
        .line-left {
          width: vw(494);
        }
      }
      .left5 {
        margin-bottom: vw(383);
        .left-img3 {
          width: vw(481);
          height: vw(285);
        }
      }
      .left6 {
        margin-bottom: vw(216);
        .line-left {
          width: vw(614);
        }
        .left-img4 {
          width: vw(479);
          height: vw(320);
        }
      }
      .left7 {
        margin-bottom: vw(189);
        .line-left {
          width: vw(824);
        }
      }
      .left8 {
        margin-bottom: vw(93);
        .left-img5 {
          width: vw(480);
          height: vw(363);
        }
        .line-left {
          width: vw(534);
        }
      }
      .left9 {
        margin-bottom: vw(86);
      }
      .left10 {
        margin-bottom: vw(463);
        .left-img6 {
          width: vw(479);
          height: vw(320);
        }
      }
      .left11 {
        margin-bottom: vw(191);
        .line-left {
          width: vw(574);
        }
        .left-img7 {
          width: vw(453);
          height: vw(269);
        }
      }
      .left12 {
        margin-bottom: vw(355);
        .left-img8 {
          width: vw(489);
          height: vw(329);
        }
      }
      .left13 {
        margin-bottom: vw(146);
        .line-left {
          width: vw(584);
        }
        .left-img9 {
          width: vw(489);
          height: vw(330);
        }
      }
      .left14 {
        margin-bottom: vw(225);
        .line-left {
          width: vw(554);
        }
        .left-img10 {
          width: vw(491);
          height: vw(331);
        }
      }
      .left15 {
        margin-bottom: vw(161);
        .line-left {
          width: vw(424);
        }
        .left-img11 {
          width: vw(491);
          height: vw(355);
        }
      }
      .left16 {
        .line-left {
          width: vw(554);
        }
        .left-img12 {
          width: vw(482);
          height: vw(359);
        }
      }
    }

    .img2 {
      width: vw(179);

      .img-history {
        z-index: -1;
      }
      .car {
        width: vw(119);
        height: vw(280);
        left: vw(886);
        top: vw(128);
        transition: all 0.5s ease-in-out;
        z-index: 9;
      }
    }

    .right {
      width: vw(870);
      padding-left: vw(30);
      .year {
        transform: translateX(vw(-120));
        &:before {
          content: ">";
          color: #fff;
          position: absolute;
          font-weight: bold;
          top: vw(-30);
          left: vw(38);
          font-size: vw(30);
          width: vw(18);
          height: vw(19);
        }
      }
      .line-right {
        width: vw(444);
        display: inline-block;
        height: 1px;
        border-bottom: 1px solid #bacd00;
        transform: translateX(vw(-147));
        margin-bottom: vw(30);
        &:after {
          content: "";
          display: block;
          float: right;
          width: vw(18);
          height: vw(18);
          border-radius: vw(9);
          background: #bacd00;
          transform: translateY(vw(-9));
        }
      }
      .right1 {
        margin-top: vw(55);
        margin-bottom: vw(322);
        .line-right {
          width: vw(464);
        }
        .right-img1 {
          width: vw(471);
          height: vw(312);
        }
      }
      .right2 {
        margin-bottom: vw(230);
        .line-right {
          width: vw(584);
        }
        .right-img-cup {
          bottom: vw(175);
          right: vw(104);
          width: vw(173);
          height: vw(307);
        }
      }
      .right3 {
        margin-bottom: vw(52);
      }
      .right4 {
        margin-bottom: vw(293);
      }
      .right5 {
        margin-bottom: vw(118);
        .text {
          margin-bottom: vw(5);
        }
        .right-img2 {
          width: vw(479);
          height: vw(322);
        }
      }
      .right6 {
        margin-bottom: vw(106);
      }
      .right7 {
        margin-bottom: vw(125);
        .line-right {
          width: vw(480);
        }
        .right-img3 {
          width: vw(489);
          height: vw(328);
        }
      }
      .right8 {
        margin-bottom: vw(73);
        .right-img4 {
          width: vw(524);
          height: vw(257);
        }
      }
      .right9 {
        margin-bottom: vw(95);
        .right-img5 {
          width: vw(360);
          height: vw(481);
        }
      }
      .right10 {
        margin-bottom: vw(504);
      }
      .right11 {
        margin-bottom: vw(391);
        .line-right {
          width: vw(610);
        }
        .right-img6 {
          width: vw(488);
          height: vw(328);
          margin-bottom: vw(105);
        }
      }
      .right12 {
        margin-bottom: vw(137);
        .line-right {
          width: vw(570);
        }
        .right-img7 {
          width: vw(565);
          height: vw(405);
        }
      }
      .right13 {
        margin-bottom: vw(172);
        .line-right {
          width: vw(610);
        }
        .right-img8 {
          width: vw(478);
          height: vw(322);
        }
      }
      .right14 {
        margin-bottom: vw(353);
        .line-right {
          width: vw(480);
        }
        .right-img9 {
          width: vw(478);
          height: vw(321);
        }
      }
      .right15 {
        margin-bottom: vw(182);
        .line-right {
          width: vw(540);
        }
        .right-img10 {
          width: vw(483);
          height: vw(322);
        }
      }
      .right16 {
        margin-bottom: vw(192);
        .line-right {
          width: vw(510);
        }
        .right-img11 {
          width: vw(483);
          height: vw(332);
        }
      }
      .right17 {
        .line-right {
          width: vw(440);
        }
        .right-img12 {
          width: vw(475);
          height: vw(317);
        }
      }
    }
  }
}
</style>
