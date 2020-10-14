<template>
  <div class="app-header z99">
    <div class="left" v-if="!showNav"></div>
    <div class="right">
      <div class="tab-container">
        <div
          class="tab-item"
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: item === currenTab }"
          @click="onChangeTab(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="pull-right search-lang">
        <div class="searchbar">
          <img src="@assets/img/layout/search.png" alt="" />
          <span class="text">Search</span>
        </div>
        <div class="lang">
          <img class="icon-lang" src="@assets/img/layout/lang1.png" alt="" />
          <div class="lang-select">
            <div class="row1">
              Choose your language
            </div>
            <div class="row2">
              Chinese
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-container flex flex-column" :class="{expand: showNav}">
      <div class="nav flex-none">
        <img src="@assets/img/layout/logo-nav.png" class="logo">
        <div class="right-wap" @click="showNav = !showNav">
          <div class="icon-line1"></div>
          <div class="icon-line2"></div>
          <div class="icon-line3"></div>
        </div>
      </div>
      <div class="over-auto flex-auto">
        <tabs/>
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">
          <img src="@assets/img/layout/search.png" alt="" />
          <span class="text">Search</span>
        </span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">
        </div>
        <div class="lang-container">
          <div class="lang" :class="{active: showLangList}" @click="showLangList = !showLangList">
            <img class="icon-lang flex-none" src="@assets/img/layout/lang1.png" alt="" />
            <div class="lang-select flex-auto">
              <div class="row1">
                Choose your language
              </div>
              <div class="row2">
                Chinese
              </div>
            </div>
            <div class="flex-auto"></div>
            <div class="arrow flex-none">
              <img src="@assets/img/layout/down.png" alt="">
            </div>
          </div>
          <div class="lang-list clearfix" :class="{expand: showLangList}">
            <div class="item mb" v-for="(item, index) in langList" :class="{active: currentLang === index, mb: index < 7}"
                 @click="currentLang = index">
              <img class="icon-lang flex-none" :src="langIcons[index]" alt="" />
              <span>{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tabs from '@mixins/tabs';
export default {
  name: "NavHeader",
  mixins: [tabs],
  components: {
  	tabs: () => import('./Tabs')
  },
  data: () => ({
		showNav: false,
		langList: ['China', 'العربي', 'English', 'Русский', 'Español', 'Português', 'French', 'Việt'],
    langIcons: [
			require('@assets/img/layout/lang1.png'),
			require('@assets/img/layout/lang2.png'),
			require('@assets/img/layout/lang3.png'),
			require('@assets/img/layout/lang4.png'),
			require('@assets/img/layout/lang5.png'),
			require('@assets/img/layout/lang6.png'),
			require('@assets/img/layout/lang7.png'),
			require('@assets/img/layout/lang8.png'),
    ],
		currentLang: 0,
    showLangList: false
  }),
  methods: {
    onChangeTab(tab) {
    	if (this.currenTab !== tab) {
				this.currenTab = tab;
			} else {
				this.currenTab = "";
      }
      this.$router.push({name: tab});
    }
  }
};
</script>
<style lang="scss">
@import "~@assets/scss/func.scss";
$w: 1530;
$h: 106;
$skewW: $h / 452 * 273 / 2;
.app-header {
  position: fixed;
  top: 0;
  width: $W;
  font-size: vw(24);
  height: 1px;
  .left {
    width: vw(273);
    height: vw(452);
    background: url("~@assets/img/layout/logo-header-left.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: vw($w);
    height: vw($h);
    position: absolute;
    padding-left: vw($skewW);
    left: vw(390);
    top: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:before {
      content: "";
      position: absolute;
      width: vw(1530 + $skewW);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background: #fff;
      transform: skewX(-30deg);
      box-shadow: 0 0 8px 0 rgba(0,0,0,.5);
    }
  }
  .right-container {
    display: none;
  }
  .tab-container {
    float: left;
    width: vw(889);
    height: $h;
    line-height: vw($h);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tab-item {
      height: vw(24);
      display: inline-block;
      line-height: 1;
      font-family: Arial;
      color: #000000;
      cursor: pointer;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: vw(-12);
        left: 50%;
        width: 0;
        height: 4px;
        background: #000000;
        transition: all 0.6s;
      }
      &:hover,
      &.active {
        font-weight: bold;

        &:after {
          left: 0;
          width: 100%;
        }
      }
    }
  }
  .search-lang {
    display: flex;
    align-items: center;
    line-height: vw($h);
    .searchbar {
      width: vw(137);
      border-right: 1px solid #000000;
      line-height: 1;
      height: vw(24);
      color: #000000;
      display: flex;
      align-items: center;
      img {
        width: vw(24);
      }
      .text {
        margin-left: vw(14);
      }
    }
  }
  .lang {
    display: flex;
    align-items: center;
    white-space: nowrap;
    line-height: vw($h);
    .icon-lang {
      width: vw(38.8);
      height: vw(38.8);
      margin-left: vw(31);
      margin-right: vw(7);
    }
    .lang-select {
      width: vw(250);
      flex: none;
      height: vw(49);
      margin-right: vw(41);

      .row1 {
        color: #959595;
        line-height: 1;
      }
      .row2 {
        line-height: 1;
        color: #000000;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .app-header {
    width: 100%;

    .left {
      width: wp(221);
      height: wp(462);
    }

    .right {
      display: none;
    }

    .right-wap {
      width: wp(140);
      height: wp(84);
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(120deg, transparent wp(45), red 0);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      padding-right: wp(27);
      transition: all .5s ease-in-out;

      .icon-line1 {
        width: wp(26);
        height: wp(3);
        background: #fff;
        margin-bottom: wp(10);
        transition: all .5s ease-in-out;
      }

      .icon-line2 {
        width: wp(52);
        height: wp(3);
        background: #fff;
        margin-bottom: wp(10);
        transition: all .5s ease-in-out;
      }

      .icon-line3 {
        width: wp(52);
        height: wp(3);
        background: #fff;
        transition: all .5s ease-in-out;
      }
    }

    .right-container {
      display: flex;
      width: wp(140);
      height: wp(84);
      background: transparent;
      position: fixed;
      top: 0;
      right: 0;
      max-height: 100vh;
      overflow: hidden;
      transition: all .5s ease-in-out;

      &.expand {
        width: 100vw;
        height: 100vh;
        background: #f1f1f1;

        .nav {
          width: 100vw;
          height: wp(86);
          background: #fff;

          .logo {
            width: wp(112);
          }

          .right-wap {
            height: wp(69);
            width: wp(128);
            top: wp(7);

            .icon-line1 {
              width: wp(35);
              transform-origin: 0 wp(2);
              transform: rotate(45deg);
            }

            .icon-line2 {
              width: 0;
            }

            .icon-line3 {
              width: wp(35);
              transform-origin: 0 wp(2);
              transform: rotate(-45deg);
            }
          }
        }
      }

      .nav {
        width: wp(140);
        height: wp(84);
        background: transparent;

        .logo {
          width: wp(0);
          height: wp(53);
          margin-left: wp(20);
          margin-top: wp(17);
          float: left;
        }
      }

      .input-group-addon {
        img {
          width: wp(37);
          height: wp(40);
          margin-right: wp(20);
        }

        line-height: wp(45);
        font-family: ArialMT;
        font-size: wp(28);
        color: #D1D1D1;
        background: transparent;
        border: none;
      }

      .input-group {
        margin: wp(125) wp(40) wp(85);
        border-bottom: 1px solid #535353;
        border-top: none;

        input {
          height: 8vw;
          border: none;
          background: transparent;
          box-shadow: none;
        }
      }

      .lang-container {
        width: wp(670);
        height: auto;
        background: #fff;
        margin: 0 wp(40) wp(62);
        padding: 0 wp(12) 0 wp(10);

        .lang {
          padding: wp(34) wp(8);
          height: wp(126);

          .arrow {
            width: wp(26);
            height: wp(14);
            display: inline-block;
            float: right;

            img {
              transition: all .5s ease-in-out;
            }

            line-height: 1;
          }

          .lang-select {
            width: auto;
            height: wp(58);

            .row1, .row2 {
              font-size: wp(28);
            }
          }

          &.active {
            border-bottom: 1px solid #A8A8A8;

            .arrow {
              img {
                transform: rotate(180deg);
              }
            }
          }
        }

        .icon-lang {
          width: wp(45);
          height: wp(45);
          margin-right: wp(16);
        }

        .lang-list {
          height: 0;
          padding: 0;
          transition: all .5s ease-in-out;
          overflow: hidden;

          .item {
            width: 50%;
            float: left;
            line-height: wp(47);
            font-family: Aileron-Regular;
            font-size: wp(28);

            &.active {
              color: #D2D2D2;
            }
          }

          .mb {
            margin-bottom: wp(73);
          }

          &.expand {
            padding: wp(33) wp(17) 0;
            height: wp(490);
          }
        }
      }
    }
  }
}
</style>
