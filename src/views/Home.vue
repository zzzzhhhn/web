<template>
  <div class="home">
    <nav-header />
    <div class="redio-container">
      <img src="@assets/img/vdieo1-bg.png" alt="">
      <img class="img-player" src="@assets/img/play.png" alt="">
    </div>
    <div class="img1-container">
      <img src="@assets/img/img1.png" alt="">
    </div>
    <div class="img2-container">
      <div class="text1">
        The existing leading products include: heavy, medium, light and mini trucks, multi-functional commercial vehicle, MPV, SUV, passenger car, bus & coach, special-purposed chassis, gearbox, engine, axle and other core components. Now JAC owns several well-known brands, for example, Refine, JAC iEV, Shuailing, Junling, Kangling, Gallop, Heyue, Sunray and GreenJet.
      </div>
      <img class="img1" src="@assets/img/img2-1.png" alt="">
      <img class="img2" src="@assets/img/img2-2.png" alt="">
      <div class="text2">
        JAC is equipped with a high-level R&D team of nearly 5,000 people, adheres to the key technology R&D route of "energy saving, environmental protection, safety, intelligence, network connection and comfort". The complete positive R&D system is established, which is capable to achieve the development, test and verification, and calibration for whole vehicles and key components such as core power train, automatic transmission and the software system. There are comprehensive breakthroughs in energy saving and emission reduction technology, intelligent safety technology, noise technology, lightweight technology, new energy technology and manufacturing process technology, etc., which contributes to the further improvement of company core competitiveness.
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "@comp/layout/NavHeader";

export default {
  name: "Home",
  components: {
    NavHeader
  }
};
</script>
<style lang="scss">
  @import "~@assets/scss/func.scss";
  .home {
    width: $W;
    margin: auto;
    .redio-container {
      position: relative;
      margin-bottom: vw(98);
      .img-player {
        position: absolute;
        left: 50%;
        top: 50%;
        width: vw(101);
        cursor: pointer;
      }
    }
    .img1-container {
      margin-bottom: vw(169);
    }
    .img2-container {
      padding: 0 vw(110);
      font-size: vw(30);
      font-family: Aileron;
      color: #000000;
      .text1 {
        float: left;
        width: vw(619);
        height: vw(444);
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
      }
    }
  }
</style>
