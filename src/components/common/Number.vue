<template>
  <div class="number-container por" :class="{ red: red }">
    <div :class="['num-content', topClass]">
      <div class="num">0</div>
      <div class="num">1</div>
      <div class="num">2</div>
      <div class="num">3</div>
      <div class="num">4</div>
      <div class="num">5</div>
      <div class="num">6</div>
      <div class="num">7</div>
      <div class="num">8</div>
      <div class="num">9</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    num: {
      type: Number,
      default: 0
    },
    red: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    topClass: ""
  }),
  watch: {
    show(val) {
      if (val) {
        this.topClass = "show" + this.num;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.number-container {
  width: vw(45);
  height: vw(72);
  display: inline-block;
  overflow: hidden;
  &.red {
    color: #cc000c;
  }
  .num-content {
    position: absolute;
    top: 0;
    left: 0;
    transition: top 0.5s ease-in-out;
    &.show1 {
      top: vw(-72);
    }
    &.show2 {
      top: vw(-72 * 2);
    }
    &.show3 {
      top: vw(-72 * 3);
    }
    &.show4 {
      top: vw(-72 * 4);
    }
    &.show5 {
      top: vw(-72 * 5);
    }
    &.show6 {
      top: vw(-72 * 6);
    }
    &.show7 {
      top: vw(-72 * 7);
    }
    &.show8 {
      top: vw(-72 * 8);
    }
    &.show9 {
      top: vw(-72 * 9);
    }
  }
  .num {
    width: 100%;
    height: vw(72);
    text-align: center;
    font-family: Aileron-Bold;
    font-size: vw(72);
  }
}
</style>
