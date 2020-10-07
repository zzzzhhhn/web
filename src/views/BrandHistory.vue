<template>
  <div class="history-container">
    <img src="@assets/img/history/img1.png" alt="" class="img1-container" />
    <div class="clearfix flu-container">
      <div class="left pull-left">
        <div class="left1">
          <div class="year"><span>20</span>19</div>
          <img src="@assets/img/history/line-left.png" class="line-left" />
          <div class="title">May,21,2019</div>
          <div class="text">
            <p>JAC successfully participated in the acquisi-</p>
            <p>tion on Kazakhstan Allur Automobile Industry</p>
            <p>Group,marking the co-construction of “One</p>
            <p>Belt and One Road”entered a new stage</p>
          </div>
          <img src="@assets/img/history/left1.png" class="left1-img" />
        </div>
      </div>
      <img src="@assets/img/history/img2.png" class="pull-left img2" />
      <div class="right pull-left"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandHistory"
};
</script>

<style lang="scss" scoped>
@import "~@assets/scss/func.scss";
.history-container {
  line-height: 1;
  .img1-container {
    margin-bottom: vw(30);
  }

  .flu-container {
    .year {
      color: #fff;
      font-family: Aileron-Bold;
      font-size: vw(72);
      margin-bottom: vw(6);
      transform: translateX(vw(110));
      span {
        color: #cc000c;
      }
    }
    .line-left {
      width: vw(444);
      margin-bottom: vw(23);
      height: vw(17);
      min-height: 13px;
      transform: translateX(vw(117));
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
      .left1 {
        margin-top: vw(462);
        .left1-img {
          width: vw(489);
          height: vw(329);
        }
      }
    }

    .img2 {
      width: vw(180);
    }

    .right {
      width: vw(870);
      padding-left: vw(30);
    }
  }
}
</style>
