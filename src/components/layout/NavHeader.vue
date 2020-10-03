<template>
  <div class="app-header z99">
    <div class="left"></div>
    <div class="right">
      <div class="tab-container">
        <div
          class="tab-item"
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: item === currenTab }"
          @click="currenTab = item"
        >
          {{ item }}
        </div>
      </div>
      <div class="pull-right search-lang">
        <div class="searchbar">
          <img src="@assets/img/search.png" alt="" />
          <span class="text">Search</span>
        </div>
        <div class="lang">
          <img class="icon-lang" src="@assets/img/lang.png" alt="" />
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
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data: () => ({
    tabs: ["Showroom", "Brand", "News&Events", "Lifestyle", "Worldwide"],
    currenTab: "Showroom"
  }),
  methods: {}
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
  left: $pa;
  width: $W;
  font-size: vw(24);
  height: 1px;
}
.left {
  width: vw(273);
  height: vw(452);
  background: url("~@assets/img/logo-header-left.png") no-repeat;
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
  }
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
</style>
