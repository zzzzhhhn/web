<template>
  <div class="rnd-container">
    <div class="img1-container">
      <img src="@assets/img/rnd/img1.png" class="hidden-xs"/>
      <img src="@assets/img/rnd/img1-wap.png" class="visible-xs-inline"/>
    </div>
    <div class="img2-container anitmate-container clearfix">
      <div class="pull-left text1">
        <div class="title1">First-Class R&D Center</div>
        <div class="title2">JAC Hefei R&D Center</div>
        <div class="text-area">
          <div class="title3">
            JAC invested one hundred million U.S. dollars in
            building a first-class international
          </div>
          <div class="d-text">
            R&D base, which covers 49173 square meters, and includes an R&D Center, a Passenger Cars, Heavy-Duty
            Trucks and Light-Duty Trucks Authentication Center, and a
            Design Studio etc. and owns internationally advanced test
            equipment such as K&C suspension performance test
            board and a transmission system test board. The R&D base
            can accommodate 3,000 members of staff at the same time
            and independently undertake the tasks of designing, trial-manufacturing, testing of complete vehicles and core
            components, with its independent R&D ranking first in
            China.
          </div>
        </div>
      </div>
      <div class="pull-right img1 animate-img">
        <img src="@assets/img/rnd/img2-1.png" />
      </div>
      <div class="title2 visible-xs-block">JAC Italy R&D Center</div>
      <div class="d-text visible-xs-block">
      In2005,JAC established its first overseas R&D center in Italy.
      Through dozens of years’development, it owns more than 100
      senior technical talents from 15 different countries and regions.
    </div>
      <div class="pull-left img2 animate-img">
        <img src="@assets/img/rnd/img2-2.png" />
      </div>
      <div class="d-text visible-xs-block">
        With an office area of more than 7,000<span>m<sup>2</sup></span
      >, it has an international first-class independent design and R&D base, and
        undertakes 80% of the R&D and design tasks of JAC new models.
      </div>
      <div class="animate-img img3 visible-xs-block">
        <img src="@assets/img/rnd/img2-3.png" />
      </div>
      <div class="img3 pull-right hidden-xs">
        <div class="title2">JAC Italy R&D Center</div>
        <div class="d-text">
          In2005,JAC established its first overseas R&D center in Italy.
          Through dozens of years’development, it owns more than 100
          senior technical talents from 15 different countries and regions.
        </div>
        <div class="animate-img img">
          <img src="@assets/img/rnd/img2-3.png" />
        </div>
          <div class="d-text">
            With an office area of more than 7,000<span>m<sup>2</sup></span
          >, it has an international first-class independent design and R&D base, and
            undertakes 80% of the R&D and design tasks of JAC new models.
          </div>
      </div>
    </div>
    <div class="img3-container anitmate-container por">
      <img src="@assets/img/rnd/img3.png" v-show="!showVideo1" />
      <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(1)" v-show="!showVideo1" />
      <video src="@assets/video/rnd-1.mp4" id="video1" preload controls @touchend="onPause(1)" v-show="showVideo1"></video>
    </div>
    <div class="img4-container anitmate-container clearfix">
      <div class="text pull-left">
        In 2006, JAC Italy design Center won the Best Chinese Enterprise Award of The Italian-China Foundation Association and
        the GREEN FIELD Award of the Piedmont Region Government.The SC-9 concept Car, which was exhibited at the
        Beijing Auto Show in 2014, has won many honors around the
        world. It was rated as one of the best 15 concept cars in history by Car Design News, a famous global automobile magazine,
        and was collected and exhibited by the National Automobile
        Museum of Italy.In 2015, JAC Italy design Center beat many
        EU competitors and became the only Chinese automobile enterprise design
        institution to undertake the automotive technology research and development project of European Commission.
      </div>
      <div class="imgs pull-right">
        <div class="img1 animate-img">
          <img src="@assets/img/rnd/img4-1.png" />
        </div>
        <div class="img2 animate-img">
          <img src="@assets/img/rnd/img4-2.png" />
        </div>
        <div class="img3 animate-img">
          <img src="@assets/img/rnd/img4-3.png" />
        </div>
      </div>
    </div>
    <div class="img5-container anitmate-container">
      <div class="title2">JAC Japan R&D Center</div>
      <div class="por">
        <img src="@assets/img/rnd/img5.png" v-show="!showVideo2" />
        <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(2)" v-show="!showVideo2" />
        <video src="@assets/video/rnd-2.mp4" id="video2" preload controls @touchend="onPause(2)" v-show="showVideo2"></video>
      </div>
    </div>
    <div class="img6-container anitmate-container">
      <img src="@assets/img/rnd/img6.png" />
    </div>
    <div class="text7-container anitmate-container">
      <div class="d-text">
        JAC Japan Design Center, established on November 5th,2006,is an
        independent design center invested by JAC in Tokyo.Japan Design Center is fully equipped with complete vehicle modeling
        development, design and management capabilities from
        concept sketch design, 3D CAS data production, model making, dynamic
        virtual rendering, etc., and can independently design
        new vehicle models for JAC headquarter.Adhereing to the concept of
        “building world car by integrating global resources”,persisting in the guiding ideology of
        being“self-centered,inclusive,self-contained and continuously
        surpass”,based on the development philosophy of being “classic,simple and lean”,JAC keeps absorbing
        the essence of Japanese car culture,digging
        deeper into the Japanese car design advantages to build up vehicles with
        JAC DNA that make people proud in our country.
      </div>
    </div>
    <div class="img8-container anitmate-container">
      <div class="title1">Manufacturing Capability</div>
      <div class="title2">
        JAC Smart Factory - Passenger Car Production Base
      </div>
      <div class="clearfix area">
        <div class="img pull-right animate-img">
          <img src="@assets/img/rnd/img8.png" />
        </div>
        <div class="text d-text pull-left">
            JAC Japan Design Center, established on November 5th,2006,is an
            independent design center invested by JAC in Tokyo.Japan Design Center is
            fully equipped with complete vehicle modeling development, design and
            management capabilities from concept sketch design, 3D CAS data
            production, model making, dynamic virtual rendering, etc., and can independently
            design new vehicle models for JAC headquarter.Adhereing to the concept of
            “building world car by integrating global resources”,persisting in the guiding
            ideology of being “self-centered,inclusive,self-contained and continuously surpass”, based on
            the development philosophy of being “classic,simple and lean”,JAC
            keeps absorbing the essence of Japanese car culture,digging deeper into the
            Japanese car design advantages to build up vehicles with JAC DNA that make
            people proud in our country.
        </div>
      </div>
    </div>
    <div class="img9-container anitmate-container por">
      <img src="@assets/img/rnd/img9.png" v-show="!showVideo3" />
      <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(3)" v-show="!showVideo3" />
      <video src="@assets/video/rnd-3.mp4" id="video3" preload controls @touchend="onPause(3)" v-show="showVideo3"></video>

    </div>
    <div class="img10-container anitmate-container">
      <div class="title">JAC Xingang Factory - Light Truck Production Base</div>
      <div class="clearfix">
        <div class="text1 pull-left d-text">
          JAC's new world-class light truck factory -- Xingang Production Base covers an area of 3,900 mu, with a total investment
          of 5.5 billion yuan and an annual production capacity of

            200,000 units. It is a global light truck model factory designed

          and built according to the world's highest standard to implement JAC upward brand strategy and achieve green
          manufacturing and intelligent manufacturing.
        </div>
        <div class="text2 pull-left d-text">
          JAC light trucks Xingang base to build the world's first light
          truck industry intelligent manufacturing platform,which consists of 2 closed automatic press line, 3 fully automated welding
          lines,1 flexible automatic painting line, a fully automated
          assembly line and frame, front axle and other key parts assembly line of light trucks, integrating
          automation,informationization,digitization and other characteristics.
        </div>
      </div>
    </div>
    <div class="img11-container anitmate-container por">
      <img src="@assets/img/rnd/img11.png" v-show="!showVideo4" />
      <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(4)" v-show="!showVideo4" />
      <video src="@assets/video/rnd-4.mp4" id="video4" preload controls @touchend="onPause(4)" v-show="showVideo4"></video>

    </div>
    <div class="img12-container anitmate-container">
      <div class="title1">Technical Achievements</div>
      <div class="clearfix">
        <div class="text pull-left">
          <div class="title2">Intelligent network</div>
          <img class="img" src="@assets/img/rnd/img12-1.png" />
          <div class="title3">
            Covers all amodels and forms a unified service platform for users
          </div>
          <div class="area">
            The iterative development from car networking
            1.0 to 3.0 was completed, and the 3.0 system
            has come into service.The new generation of vehicle networking 3.0 system has realized the
            deep dialogue and communication between
            people and vehicles. In addition to the traditional
            voice control navigation, air conditioning, music,
            search, emergency rescue and other functions, it
            also has screening, booking travel and other new
            network functions. The great improvement of intelligentization brings users a colorful travel life
            that connects to the world.
          </div>
          <img class="img" src="@assets/img/rnd/img12-2.png" />
          <img class="img" src="@assets/img/rnd/img12-3.png" />
        </div>
        <div class="img pull-left animate-img hidden-xs">
          <img src="@assets/img/rnd/img12.png" />
        </div>
      </div>
    </div>
    <div class="img13-container anitmate-container">
      <img src="@assets/img/rnd/img13.png" />
    </div>
    <div class="text14-container anitmate-container">
      <div class="title2">Intelligent driving system</div>
      <div class="text d-text">
          The ADAS intelligent driving system developed by JAC integrates ACC
          adaptive cruise, FCW pre-collision warning and AEB automatic emergency braking into one. After more than 1200 functional
          simulations and optimization development, over 100
          closed-site vehicle tests and 130,000 km road tests, the system is
          proved simple in operation, practical in function and reliable
        in performance.
      </div>
    </div>
    <div class="img15-container anitmate-container">
      <div class="title2">Test verification</div>
      <div class="text1 d-text visible-xs-block">
        Test is the only standard for testing vehicle quality. JAC has
        formed a complete set of extreme environmental adaptability
        test system covering "high humidity, mountainous area, high
        temperature, plateau and high cold", which can test the
        product reliability of spare parts and the whole vehicle under
        various working conditions.As a necessary facility for automobile product development and quality control,automobile
        testing ground is the key for automobile enterprises to build
        mature R&D system and improve their independent R&D ability.
      </div>
      <div class="img por">
        <img src="@assets/img/rnd/img15.png" v-show="!showVideo5" />
        <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(5)" v-show="!showVideo5" />
        <video src="@assets/video/rnd-5.mp4" id="video5" preload controls @touchend="onPause(5)" v-show="showVideo5"></video>

      </div>
      <div class="text clearfix">
        <div class="text1 pull-left d-text hidden-xs">
          Test is the only standard for testing vehicle quality. JAC has
          formed a complete set of extreme environmental adaptability
          test system covering "high humidity, mountainous area, high
          temperature, plateau and high cold", which can test the
          product reliability of spare parts and the whole vehicle under
          various working conditions.As a necessary facility for automobile product development and quality control,automobile
          testing ground is the key for automobile enterprises to build
          mature R&D system and improve their independent R&D ability.
        </div>
        <div class="text2 pull-left d-text">
          JAC Xingang Base comprehensive test range is the first
          three-arc high-ring track vehicle test range in China. The test
          site is equipped with high speed ring road, performance
          road, light durable road,heavy durable road and standard
          ramp, which can undertake the reliability and durability test
          verification tasks for whole series of JAC products.
        </div>
      </div>
    </div>
    <div class="img16-container anitmate-container">
      <div class="title1">New Energy Technology</div>
      <div class="text-area1">
        <div class="title3">Electric Technology Platform</div>
        <div class="d-text">
          Since its involvement in the research and development of new energy
          vehicles in 2002, JAC's new energy business has covered passenger car, light commercial vehicle, multi-functional
          commercial vehicle, bus and other products, and has been at the
          forefront of the industry.
        </div>

      </div>
      <div class="title2 visible-xs-block">JAC Electric technology platform</div>
      <img src="@assets/img/rnd/img16.png" class="hidden-xs" />
      <img src="@assets/img/rnd/img16-wap.png" class="visible-xs-inline" />
      <div class="text-area2">
        <div class="title3">New Energy Vehicles</div>
        <div class="d-text">
          New energy liquid-cooling thermostatic technology: The new generation
          of liquid-cooling thermostatic technology integrated
          on the 8th-generation technology and 3rd-generation product of JAC new
          energy is completely independently developed by
          JAC, which can greatly improve the operating temperature and
          temperature difference of the battery. Even in the temperature
          environment of -30<sup>o</sup>C -55<sup>o</sup>C, the battery can be
          guaranteed to work in the most suitable temperature range; Compared
          with the previous air cooling system, the liquid cooling system can
          significantly improve the battery life and safety. Even if the battery
          unit fails, it will not cause the battery pack heat to lose
          control, so there will be no fire or explosion; In terms of technical
          parameters,JAC liquid cooling technology has reached the world's
          advanced level. At present, only JAC has maturely commercialized this technology in China.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@mixins/mixin";

export default {
  name: "BrandRnD",
  mixins: [mix]
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.rnd-container {
  .img1-container {
    margin-bottom: vw(161);
  }
  .img2-container,
  .img5-container,
  .text7-container,
  .img12-container,
  .text14-container,
  .img15-container,
  .img16-container,
  .img8-container {
    .title1 {
      font-family: Cormorant-Bold;
      font-size: vw(72);
    }
    .title2 {
      font-family: Cormorant-Bold;
      font-size: vw(60);
    }
    .title3 {
      font-family: Aileron-Bold;
      font-weight: bold;
      font-size: vw(30);
      line-height: vw(52);
    }
    .d-text {
      font-family: Aileron-Regular;
      font-size: vw(30);
      line-height: vw(52);
    }
  }
  .img2-container {
    margin-bottom: vw(169);
    line-height: 1;
    padding: 0 vw(110);
    .title1 {
      margin-bottom: vw(104);
    }
    .title2 {
      margin-bottom: vw(47);
    }
    .text1 {
      width: vw(833);
      .text-area {
        height: vw(654);
      }
    }
    .img1 {
      width: vw(849);
      height: vw(877);
      margin-top: vw(110);
    }
    .img2 {
      width: vw(833);
      height: vw(1232);
      margin-top: vw(238);
    }
    .img3 {
      margin-top: vw(170);
      width: vw(835);
      .title2 {
        margin-bottom: vw(46);
      }
      .img {
        width: 100%;
        margin-top: vw(87);
        margin-bottom: vw(50);
      }
    }
  }
  .img3-container {
    margin-bottom: vw(167);
  }
  .img4-container {
    padding-left: vw(111);
    padding-right: vw(112);
    margin-bottom: vw(168);
    .text {
      margin-top: vw(99);
      width: vw(832);
      height: vw(654);
      font-size: vw(30);
      font-family: Aileron-Regular;
      line-height: vw(51);
    }
    .imgs {
      width: vw(833);
      .img1 {
        margin-bottom: vw(55);
      }
      .img2 {
        width: vw(402);
        margin-right: vw(30);
      }
      .img3 {
        width: vw(401);
      }
    }
  }
  .img5-container {
    margin-bottom: vw(169);
    .title2 {
      padding-left: vw(111);
      margin-bottom: vw(55);
    }
  }
  .img6-container {
    margin-bottom: vw(106);
  }
  .text7-container {
    padding: 0 vw(114) vw(170) vw(116);
  }
  .img8-container {
    margin-bottom: vw(93);
    .title1 {
      margin-bottom: vw(81);
      padding-left: vw(115);
    }
    .title2 {
      margin-bottom: vw(46);
      padding-left: vw(110);
    }
    .area {
      padding-left: vw(114);
      .text {
        width: vw(1054);
        height: vw(608);
        line-height: vw(52);
      }
      .img {
        width: vw(714);
      }
    }
  }
  .img9-container {
    margin-bottom: vw(56);
  }
  .img10-container {
    margin-bottom: vw(179);
    font-family: Helvetica;
    font-size: vw(30);
    line-height: vw(51);

    .title {
      font-family: Cormorant-Bold;
      font-size: vw(60);
      line-height: 1;
      padding-left: vw(110);
      margin-bottom: vw(45);
    }
    .text1 {
      width: vw(812);
      height: vw(345);
      margin-left: vw(114);
    }
    .text2 {
      width: vw(850);
      height: vw(345);
      margin-left: vw(62);
    }
  }
  .img11-container {
    margin-bottom: vw(191);
  }
  .img12-container {
    margin-left: vw(112);
    margin-bottom: vw(169);
    .text {
      width: vw(652);
      margin-top: vw(82);
      .area {
        height: vw(601);
        font-family: Helvetica;
        font-size: vw(30);
        p {
          margin-bottom: vw(10);
          white-space: nowrap;
        }
      }
      .title2 {
        margin-bottom: vw(52);
      }
      .title3 {
        font-family: Helvetica-Bold;
        font-size: vw(30);
        height: vw(83);
        margin-bottom: vw(46);
        p {
          margin-bottom: vw(15);
        }
      }
    }
    .img {
      margin-top: vw(55);
      width: vw(1008);
      margin-left: vw(37);
    }
  }
  .img13-container {
    margin-bottom: vw(170);
  }
  .text14-container {
    margin-bottom: vw(170);
    .title2 {
      margin-bottom: vw(40);
      padding-left: vw(114);
    }
    .text {
      padding-left: vw(115);
      height: vw(187);
      width: vw(1700);
      line-height: vw(52);
    }
  }
  .img15-container {
    margin-bottom: vw(167);
    .title2 {
      padding-left: vw(115);
      margin-bottom: vw(55);
    }
    .text {
      padding-top: vw(51);
      padding-left: vw(115);
      p {
        margin-bottom: vw(10);
      }
      .text1 {
        width: vw(814);
        height: vw(503);
      }
      .text2 {
        margin-left: vw(59);
        width: vw(804);
        height: vw(292);
      }
    }
  }
  .img16-container {
    padding: 0 vw(112);
    margin-bottom: vw(282);
    .title1 {
      margin-bottom: vw(48);
    }
    .text-area1,
    .text-area2 {
      p {
        margin-bottom: vw(10);
      }
      .title3 {
        margin-bottom: vw(10);
      }
    }
    .text-area1 {
      height: vw(187);
      width: vw(1691);
      margin-bottom: vw(206);
    }
    .text-area2 {
      width: vw(1682);
      height: vw(450);
      margin-top: vw(192);
    }
  }
}
@media screen and (max-width: 767px) {
  .rnd-container {
    .img1-container {
      margin-bottom: wp(69);
    }
    > .anitmate-container {
      padding: 0 wp(40);
      width: 100%;
      margin-bottom: wp(48);
    }
    .img2-container,
    .img5-container,
    .text7-container,
    .img12-container,
    .text14-container,
    .img15-container,
    .img16-container,
    .img8-container {
      .title1 {
        font-size: wp(60);
      }
      .title2 {
        font-size: wp(48);
      }
      .title3 {
        font-size: wp(28);
        line-height: wp(48);
      }
      .d-text {
        font-size: wp(28);
        line-height: wp(48);
      }
    }
    .img2-container {
      margin-bottom: 0;
      .title1 {
        margin-bottom: wp(69);
      }
      .title2 {
        margin-bottom: wp(30);
      }
      .text1 {
        width: 100%;
        .text-area {
          height: auto;
        }
      }
      .img1,
      .img2,
      .img3 {
        width: 100%;
        height: auto;
        margin-top: wp(48);
        margin-bottom: wp(48);
      }

      .img3 {
        .title2 {
          margin-bottom: vw(46);
        }
        .img {
          width: 100%;
          margin-top: vw(87);
          margin-bottom: vw(50);
        }
      }
    }

    .img4-container {
      .text {
        margin-top: 0;
        width: 100%;
        height: auto;
        font-size: wp(28);
        line-height: wp(48);
        margin-bottom: wp(46);
      }
      .imgs {
        width: 100%;
        .img1 {
          margin-bottom: wp(44);
        }
        .img2 {
          width: wp(324);
          margin-right: wp(20);
        }
        .img3 {
          width: wp(324);
        }
      }
    }
    .img5-container {
      .title2 {
        padding-left: 0;
        margin-bottom: wp(46);
      }
    }

    .img8-container {

      .title1 {
        margin-bottom: wp(65);
        padding-left: 0;
      }
      .title2 {
        margin-bottom: wp(47);
        padding-left: 0;
      }
      .area {
        padding-left: 0;
        .text {
          width: 100%;
          height: auto;
          line-height: wp(48);
        }
        .img {
          width: 100%;
          margin-bottom: wp(48);
        }
      }
    }

    .img10-container {
      font-size: wp(28);
      line-height: wp(48);

      .title {
        font-size: wp(48);
        padding-left: 0;
        margin-bottom: wp(30);
      }
      .text1,
      .text2 {
        width: 100%;
        height: auto;
        margin-left: 0;
      }
      .text1 {
        margin-bottom: wp(48);
      }
    }

    .img12-container {
      margin-left: 0;
      margin-bottom: 0;
      .text {
        width: 100%;
        margin-top: wp(48);
        .area {
          height: auto;
          font-size: wp(28);
          margin-bottom: wp(48);
        }
        .title2 {
          margin-bottom: wp(30);
        }
        .title3 {
          font-size: wp(28);
          height: auto;
          margin-bottom: 0;
        }
      }
      .img {
        margin-top: 0;
        width: 100%;
        margin-left: 0;
        margin-bottom: wp(48);
      }
    }

    .text14-container {

      .title2 {
        margin-bottom: wp(30);
        padding-left: 0;
      }
      .text {
        padding-left: 0;
        height: auto;
        width: 100%;
        line-height: wp(48);
      }
    }
    .img15-container {
      .title2 {
        padding-left: 0;
        margin-bottom: wp(43);
      }
      .text1 {
        margin-bottom: wp(48);
      }
      .text {
        padding-top: wp(48);
        padding-left: 0;
        .text2 {
          margin-left: 0;
          width: 100%;
          height: auto;
        }
      }
    }
    .img16-container {
      margin-bottom: wp(250);
      .title1 {
        margin-bottom: wp(48);
      }
      .title2 {
        margin-bottom: wp(44);
      }
      .text-area1,
      .text-area2 {
        .title3 {
          margin-bottom: wp(10);
        }
      }
      .text-area1 {
        height: auto;
        width: 100%;
        margin-bottom: wp(48);
      }
      .text-area2 {
        width: 100%;
        height: auto;
        margin-top: wp(80);
      }
    }
  }
}
</style>
