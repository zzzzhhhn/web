<template>
  <div class="company-container">
    <div class="redio-container anitmate-container">
      <img src="@assets/img/company/vdieo1-bg.jpg" class="img" v-show="!showVideo1" />
      <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(1)" v-show="!showVideo1" />
      <video src="@assets/video/band1.mp4" id="video1" preload controls @touchend="onPause(1)" v-show="showVideo1"></video>
    </div>
    <div class="img1-container anitmate-container por">
      <div class="img1">
        <img src="@assets/img/company/img1.jpg" alt="" />
      </div>
      <div class="text">
        Anhui Jianghuai Automobile Group Co., Ltd. (abbreviated as
        JAC Motors or JAC) is a comprehensive automobile enterprise that integrates R&D, production and sales of a full
        range of commercial vehicle, passenger vehicle and powertrain, and covers many fields such as ride hailing/sharing
        and financial services. JAC develops simultaneously on "advanced energy-saving vehicles, new energy vehicles, and
        intelligent connected vehicles". JAC is awarded as the National Torch Program's key high-tech enterprise, the top 500
        Chinese companies, and the top five Chinese independent
        vehicle brands.
      </div>
    </div>
    <div class="img2-container anitmate-container">
      <div class="text1">
        The existing leading products include: heavy,
        medium, light and mini trucks, multi-functional
        commercial vehicle, MPV, SUV, passenger car,
        bus & coach, special-purposed chassis, gearbox,
        engine, axle and other core components.
        Now JAC owns several well-known brands, for
        example, Refine, JAC iEV, Shuailing, Junling,
        Kangling, Gallop, Heyue, Sunray and GreenJet.
      </div>
      <div class="img1 animate-img">
        <img src="@assets/img/company/img2-1.jpg" alt="" />
      </div>
      <div class="img2 animate-img">
        <img src="@assets/img/company/img2-2.jpg" alt="" />
      </div>
      <div class="text2">
        JAC is equipped with a high-level R&D team of nearly 5,000 people, adheres
        to the key technology R&D route of "energy saving, environmental protection,
        safety, intelligence, network connection and comfort". The complete positive
        R&D system is established, which is capable to achieve the development, test
        and verification, and calibration for whole vehicles and key components such
        as core power train, automatic transmission and the software system. There
        are comprehensive breakthroughs in energy saving and emission reduction
        technology, intelligent safety technology, noise technology, lightweight technology,
        new energy technology and manufacturing process technology, etc.,
        which contributes to the further improvement of company core competitiveness.
      </div>
    </div>
    <div class="img3-container anitmate-container clearfix">
      <div class="img1 animate-img">
        <img src="@assets/img/company/img3-1.jpg" />
      </div>
      <div class="img2 animate-img">
        <img src="@assets/img/company/img3-2.jpg" />
      </div>
      <div class="text">
        As of 2020, JAC has accumulated a total of 14,456 patents, becoming the first domestic auto company with
        over 10,000 patents. Since 2009, a total of 10 JAC self-developed engines have been awarded the “China
        Heart" 10 BEST ENGINES. The 6DCT automatic transmission, a key project of the National 863 Program (National
        High-tech R&D Program), achieves complete indepen dence of TCU upper software development and breaks
        the international monopoly.
      </div>
    </div>
    <div class="img4-container anitmate-container">
      <img src="@assets/img/company/img4.jpg" />
    </div>
    <div class="img5-container anitmate-container clearfix">
      <div class="img5">
        <img src="@assets/img/company/img5.jpg" />
      </div>
      <div class="text">
        Until March 2020, as a pioneer in China new energy vehicle industry, JAC has demonstrated and promoted more
        than 160,000 new energy vehicles, with a total mileage of 3.2 billion kilometers. The new energy business covers
        passenger cars, light commercial vehicles, multi-functional commercial vehicles, buses and other products. JAC
        has achieved important breakthroughs in battery thermal
        management technology and intrinsic safety management technology. The battery liquid cooling technology
        is world-leading and unique in China.
      </div>
    </div>
    <div class="img6-container anitmate-container">
      <img src="@assets/img/company/img6.jpg" />
    </div>

    <div class="text7-container anitmate-container clearfix">
      <div class="text1">
        JAC established joint ventures with well-known enterprises,
        for instance, Volkswagen of Germany, Cummins Engine, and
        Santander Bank of Spain, and has built cooperative relations
        with more than 130 countries and regions in the world such
        as South America, Europe, Africa, Middle East, and Southeast Asia. JAC owns two overseas R&D centers in Japan and
        Italy, and subsidiaries in Russia, Vietnam and Kenya. There
        are also 19 international industrial bases in Mexico, Kazakhstan and other areas. By the end of 2019, JAC had exported
        more than 640,000 vehicles. Medium and high-end light
        trucks have been the No. 1 exporter in the industry for many
        consecutive years.
      </div>
      <div class="text2">
        JAC actively responds to the national “Belt and Road” initiative. Currently, the export market covers 80 countries along
        the “Belt and Road”. The export volume of these countries is
        approximately 150,000 units in the past three years, accounts for about 75% of JAC total exports. In 2019, the “Belt
        and Road” initiative advanced to a new stage, and JAC successfully participated in the acquisition of Kazakhstan’s
        largest automobile industry group, Allur Group, becoming an important starting point of JAC on the development of the
        customs union market and the internationalization strategy of the Central Asian market.
      </div>
    </div>
    <div class="img8-container anitmate-container">
      <img src="@assets/img/company/img8.jpg" />
    </div>

    <div class="text9-container anitmate-container">
      JAC fully implements the core values of
      <span class="red-text">"customer-oriented, quality-based, truth-seeking and pragmatic"</span>
      , and is determined to
      create better products for global customers and create a world-renowned automobile brand.
    </div>
    <div class="img10-container anitmate-container por">
      <div class="img10">
        <img src="@assets/img/company/img10.jpg" class="hidden-xs" />
        <img src="@assets/img/company/img10-wap.jpg" class="visible-xs-inline" />
      </div>

      <div class="text1">
        <p class="title1">Contact us</p>
        <p class="title2">COMPANY</p>
        <p>ANHUI JIANGHUAI AUTOMOBILE GROUP CORP.,LTD</p>
        <p class="title2 margin1">ADDRESS</p>
        <p>176# DONGLIU ROAD, HEFEI, ANHUI PROVINCE, P.R.CHINA P.C: 230022</p>
        <p class="title2 margin2">SHANGHAI OFFICE ADDRESS</p>
        <p>ROOM 804, ROOM 807, YU AN BUILDING, NO.738 DONG FANG ROAD, PU DONG NEW DISTRICT, SHANGHAI CITY, P.R. CHINA</p>
      </div>
      <div class="text2">
        <p class="title2">BEIJING OFFICE ADDRESS</p>
        <p>NO. 0-9-I, YAYUNHAOTING C BUILDING, NO. 9 XIAOYING ROAD, CHAOYANG DISTRICT, BEIJING</p>
      </div>
      <div class="text3">
        <p class="title2">RUSSIA OFFICE</p>
        <p class="title2">ADDRESS</p>
        <p>Moscow state, Country Hillside Lenin Promzone Pykovichno, Location 8</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mix from "@mixins/mixin";

export default {
  name: "BrandCompany",
  mixins: [mix]
};
</script>
<style lang="scss">
@import "~@assets/scss/func.scss";
.company-container {
  font-size: vw(30);
  font-family: Aileron-Regular;
  color: #000000;
  .redio-container {
    position: relative;
    margin-bottom: vw(98);
  }
  .img1-container {
    margin-bottom: vw(169);
    .text {
      width: vw(888);
      height: vw(622);
      padding: vw(35) vw(43) vw(37) vw(41);
      background: #cc000c;
      color: #fff;
      position: absolute;
      bottom: 0;
      right: vw(109);
      line-height: vw(50);
    }
    .img1 {
      width: vw(1920);
    }
  }
  .img2-container,
  .img3-container {
    padding: 0 vw(110);
    margin-bottom: vw(170);
  }
  .img2-container {
    .text1 {
      padding-top: vw(34);
      float: left;
      width: vw(619);
      height: vw(444);
      line-height: vw(48);
      margin-right: vw(31);
    }
    .img1 {
      width: vw(1049);
      height: vw(549);
    }
    .img2 {
      width: vw(628);
      height: vw(557);
      margin-right: vw(23);
      margin-top: vw(23);
    }
    .text2 {
      float: right;
      width: vw(1037);
      height: vw(549);
      margin-top: vw(31);
      line-height: vw(52);
    }
  }
  .img3-container {
    .img1 {
      width: vw(1920);
    }
    .img2 {
      margin-top: vw(23);
      width: vw(850);
      float: left;
    }
    .text {
      width: vw(754);
      height: vw(450);
      margin-top: vw(84);
      margin-left: vw(83);
      float: left;
      line-height: vw(52);
    }
  }
  .img4-container {
    margin-bottom: vw(170);
  }
  .img5-container {
    margin-bottom: vw(57);
    .img5 {
      width: 50%;
      float: left;
    }
    .text {
      float: left;
      background: #3d4045;
      line-height: vw(47);
      width: 50%;
      height: vw(552);
      padding: vw(31) vw(111) vw(19) vw(83);
      color: #fff;
    }
  }
  .img6-container {
    margin-bottom: vw(56);
  }
  .text7-container {
    padding-left: vw(110);
    padding-right: vw(113);
    margin-bottom: vw(88);
    line-height: vw(52);
    .text1 {
      width: vw(803);
      height: vw(608);
      float: left;
    }
    .text2 {
      float: left;
      width: vw(807);
      height: vw(549);
      margin-left: vw(87);
    }
  }
  .img8-container {
    width: vw(1700);
    margin: 0 auto vw(45);
  }
  .text9-container {
    width: vw(1686);
    height: vw(336);
    margin: 0 auto vw(176);
    font-size: vw(48);
    p {
      line-height: vw(85);
      text-align: center;
    }
    .red-text {
      color: #cc000c;
      font-size: vw(72);
      font-family: Cormorant-Bold;
      font-weight: bold;
    }
  }
  .img10-container {
    margin-bottom: vw(242);
    p {
      font-family: Helvetica-Light;
      line-height: vw(52);
      margin-bottom: vw(20);
      color: #fff;
    }
    p.title1 {
      font-family: Cormorant-Bold;
      font-size: vw(60);
    }
    p.title2 {
      font-family: Cormorant-Medium;
      font-size: vw(60);
    }
    .text1 {
      position: absolute;
      top: vw(63);
      left: vw(109);
      width: vw(557);
      height: vw(964);

      p.title1 {
        margin-bottom: vw(50);
      }
      p.title2 {
        margin-bottom: vw(25);
      }
      p:nth-child(3) {
        margin-bottom: vw(70);
      }
      p:nth-child(5) {
        margin-bottom: vw(90);
      }
    }
    .text2 {
      width: vw(589);
      height: vw(363);
      bottom: vw(75);
      right: vw(616);
      position: absolute;
      padding-left: vw(28);
      padding-right: vw(37);
      padding-bottom: vw(363 - 285);
      border-right: 1px dashed #fff;
      border-left: 1px dashed #fff;
      p.title2 {
        margin-bottom: vw(20);
      }
    }
    .text3 {
      width: vw(439);
      height: vw(363);
      position: absolute;
      right: vw(142);
      bottom: vw(75);
    }
  }
}
@media screen and (max-width: 767px) {
    .company-container {
      .redio-container {
        margin-bottom: 0;
        width: 100vw;

        .img {
          height: 100%;
        }
      }

      .img1-container {
        padding: wp(48) wp(40);
        margin-bottom: 0;
        .img1 {
          width: 100%;
          display: block;
        }
        .text {
          display: block;
          position: static;
          width: 100%;
          right: 0;
          margin-top: -1px;
          height: wp(683);
          padding: wp(34) wp(27) wp(34) wp(20);
          font-size: wp(28);
          line-height: wp(48);
        }
      }

      .img2-container {
        margin-bottom: 0;
        .text1 {
          width: 100%;
          height: wp(365);
          margin-right: 0;
          padding-top: 0;
          font-size: wp(28);
          line-height: wp(47);
        }
        .img1 {
          width: 62%;
        }
        .img2 {
          width: 37%;
          margin: 0 0 0 1%;
        }
        .text2 {
          display: none;
        }
      }
      .img3-container {
        margin-bottom: wp(47);
        .img1 {
          width: 66%;
        }
        .img2 {
          width: 33%;
          float: none;
          margin-left: 1%;
        }
        .text {
          margin-top: wp(47);
          margin-left: 0;
          width: 100%;
          height: wp(420);
          font-size: wp(28);
          line-height: wp(45);
        }
      }
      .img6-container,
      .img4-container {
        margin-bottom: wp(47);
      }
      .img5-container {
        margin-bottom: wp(48);
        .img5, .text {
          width: 100%;
        }
        .text {
          height: wp(626);
          padding: wp(28) wp(22) wp(32) wp(20);
          font-size: wp(28);
          line-height: wp(53);
        }
      }
      .text7-container {
        margin-bottom: wp(44);
        .text1, .text2 {
          float: none;
          font-size: wp(28);
          line-height: wp(45);
          width: 100%;
        }
        .text1 {
          height: wp(615);
          margin-bottom: wp(47);
        }
        .text2 {
          height: wp(566);
          margin-left: 0;
        }
      }
      .text9-container {
        font-size: wp(28);
        line-height: wp(45);
        height: wp(275);
        text-align: center;
        margin-bottom: wp(47);
        .red-text {
          font-size: wp(48);
        }
      }
      .img10-container {
        height: wp(1305);
        width: wp(670);
        margin: 0 auto wp(216);
        .img10 {
          height: 100%;
          width: 100%;
          background-color: #000;
        }
        p {
          font-family: Aileron-Regular;
          font-size: wp(28);
          line-height: wp(43);
          margin-bottom: 0;
        }
        p.title1 {
          font-size: wp(60);
        }
        p.title2 {
          font-family: Cormorant-Bold;
          font-size: wp(48);
        }
        .text1 {
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          padding: wp(22) wp(31) wp(68) wp(19);
          p.title1 {
            margin-bottom: wp(350);
          }
          p.title2 {
            &.margin1 {
              margin-bottom: 0;
              margin-top: wp(70);
            }
            &.margin2 {
              margin-top: wp(70);
            }
          }
        }
        .text2 {
          width: 100%;
          height: auto;
          bottom: wp(68);
          right: 0;
          padding: 0 wp(31) 0 wp(19);
          border-right: none;
          border-left: none;

        }
        .text3 {
          display: none;
        }
      }
    }
  }
</style>
