<template>
  <div class="footer-bar">
    <div class="hidden-xs">
      <div class="img-logo">
        <img src="@assets/img/layout/logo.png" />
      </div>
      <div class="links">
        <div :class="['col' + (index + 1)]" v-for="(tab, index) in tabs">
          <div class="title">{{tab}}</div>
          <div class="text" v-for="t in secTabs[tab]">{{t}}</div>
        </div>
        <div class="imgs">
          <div>
            <img src="@assets/img/layout/facebook.svg" />
            <img src="@assets/img/layout/facebook.svg" />
          </div>
          <div>
            <img src="@assets/img/layout/youtube.svg"/>
            <img src="@assets/img/layout/youtube.svg" />
          </div>
          <div>
            <img src="@assets/img/layout/instagram.svg" />
            <img src="@assets/img/layout/instagram.svg" />
          </div>
          <div>
            <img src="@assets/img/layout/twitter.svg"/>
            <img src="@assets/img/layout/twitter.svg" />
          </div>
        </div>
      </div>
      <div class="copyright">
        <span class="text1">© 2020 JAC</span>
        <span class="text2"> All Rights Reserved</span>
      </div>
    </div>
    <div class="visible-xs-block">
      <div class="imgs">
        <div class="facebook" >
          <img src="@assets/img/layout/facebook.svg" />
        </div>
      <div class="youtube">
        <img src="@assets/img/layout/youtube.svg" />
      </div>
       <div class="instagram">
         <img src="@assets/img/layout/instagram.svg" />
       </div>
     <div class="twitter">
       <img src="@assets/img/layout/twitter.svg" />
     </div>

      </div>
      <tabs :type="2"/>
      <div class="text-center logo">
        <img src="@assets/img/layout/logo.png" />
      </div>
      <div class="copyright">
        <span class="text1">© 2020 JAC</span>
        <span class="text2"> All Rights Reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from "@mixins/tabs";

export default {
  name: "FooterBar",
	mixins: [tabs],
	components: {
		tabs: () => import('./Tabs')
	}
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
      overflow: hidden;
      > div {
        width: vw(50);
        display: inline-block;
        transition: all .5s ease-in-out;
        margin-left: vw(40);
        cursor: pointer;
        &:hover {
          transform: translateY(vw(-50));
        }
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
  .visible-xs-block {
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: wp(63);
      width: wp(689);
      margin: auto;
      border-bottom: 1px solid #E8E8E8;
      img {
        width: wp(60);
      }
      /*.facebookm,*/
      /*.twitter,*/
      /*.youtube,*/
      /*.instagram {*/
      /*  width: wp(65);*/
      /*  height: wp(75);*/
      /*}*/
      .youtube,.instagram,.twitter {
        margin-left: wp(77);
      }
    }
    .logo {
      padding: wp(50) wp(252) wp(69);
    }
    .copyright {
      font-size: wp(20);
      padding: 0 0 wp(47);
    }
  }
}
</style>
