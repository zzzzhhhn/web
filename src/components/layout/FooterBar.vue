<template>
  <div class="footer-bar">
    <div class="img-logo">
      <img src="@assets/img/logo.png" />
    </div>
    <div class="links">
      <div class="col1">
        <div class="title">Showroom</div>
        <div class="text">Passenger Cars</div>
        <div class="text">Commercial Vehicles</div>
        <div class="text">EV</div>
        <div class="text">SPV</div>
      </div>
      <div class="col2">
        <div class="title">Brand</div>
        <div class="text">Company</div>
        <div class="text">History</div>
        <div class="text">Philosophy</div>
        <div class="text">R&D</div>
        <div class="text">CRS</div>
        <div class="text">Service</div>
      </div>
      <div class="col3">
        <div class="title">News&Events</div>
        <div class="text">News</div>
        <div class="text">Events</div>
      </div>
      <div class="col4">
        <div class="title">Lifestyle</div>
      </div>
      <div class="col5">
        <div class="title">Worldwide</div>
        <div class="text">Find A Dealer</div>
        <div class="text">Book A Car</div>
      </div>
      <div class="imgs">
        <img src="@assets/img/facebook.svg" class="facebook" />
        <img src="@assets/img/youtube.svg" class="youtube" />
        <img src="@assets/img/instagram.svg" class="instagram" />
        <img src="@assets/img/twitter.svg" class="twitter" />
      </div>
    </div>
    <div class="copyright">
      <span class="text1">© 2020 JAC</span>
      <span class="text2"> All Rights Reserved</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.footer-bar {
  color: #000;
  .img-logo {
    width: vw(358);
    height: vw(62);
    margin: 0 auto vw(54);
  }
  .links {
    height: vw(498);
    width: 100%;
    position: relative;
    border-top: 2px solid #aba7a7;
    border-bottom: 2px solid #aba7a7;
    .title {
      font-size: vw(34);
      line-height: 1;
      font-weight: bold;
      font-family: Arial-BoldMT, Arial;
      margin-bottom: vw(50);
    }
    .text {
      font-size: vw(24);
      line-height: 1;
      margin-bottom: vw(35);
    }
    > div:not(.imgs) {
      position: absolute;
      top: vw(47);
    }
    .col1 {
      left: vw(123);
    }
    .col2 {
      left: vw(513);
    }
    .col3 {
      left: vw(825);
    }
    .col4 {
      left: vw(1270);
    }
    .col5 {
      left: vw(1621);
    }
    .imgs {
      position: absolute;
      height: vw(50);
      right: vw(129);
      bottom: vw(83);
      .facebook {
        width: vw(42);
        height: vw(57);
        margin-right: vw(39);
      }
      .youtube {
        width: vw(54);
        height: vw(50);
        margin-right: vw(38);
      }
      .instagram {
        width: vw(51);
        height: vw(50);
        margin-right: vw(42);
      }
      .twitter {
        width: vw(49);
        height: vw(48);
      }
    }
  }

  .copyright {
    padding: vw(61) 0 vw(119);
    text-align: center;
    font-size: vw(24);
    .text1 {
      font-weight: bold;
      font-family: Arial-BoldMT, Arial;
    }
    .text2 {
      font-family: ArialMT, Arial;
    }
  }
}
</style>
