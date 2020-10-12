<template>
  <div class="tabs" :class="{footer: type === 2}">
    <div class="tab" v-for="tab in tabs">
      <div class="title" @click="onChangeTab(tab)" :class="{active: currenTab === tab}">
        <span>{{tab}}</span>
        <div class="arrow" v-if="secTabs[tab].length">
          <img src="@assets/img/layout/down.png" alt="">
        </div>
      </div>
      <div class="sec-container" :class="[tab.substr(0, 4), currenTab === tab ? 'expand' : '']">
        <div class="sec" v-for="t in secTabs[tab]">{{t}}</div>
      </div>
    </div>
  </div>
</template>

<script>
	import tabs from "@mixins/tabs";

	export default {
		name: "Tabs",
		mixins: [tabs],
    props: {
			type: {
				type: Number,
        default: 1
      }
    },
    data: () => ({

    }),
		methods: {
			onChangeTab(tab) {
				if (this.currenTab !== tab) {
					this.currenTab = tab;
				} else {
					this.currenTab = "";
				}
			}
		}
	}
</script>

<style lang="scss">
  @import "~@assets/scss/func.scss";
  @media screen and (max-width: 767px){
    .tabs {
      padding: 0 wp(50);
      .tab {

        .sec,
        .title {
          height: wp(110);
          line-height: wp(110);
          font-family: ArialMT;
          font-size: wp(28);
          padding-left: wp(6);
          padding-right: wp(9);
          &.active {
            span {
              padding-bottom: wp(10);
              border-bottom: 1px solid #000000;
            }
            .arrow {
              img {
                transform: rotate(180deg);
              }
            }
          }
        }
        .sec {
          padding-left: wp(50);
        }

        .sec-container {
          height: 0;
          transition: all .5s ease-in-out;
          overflow: hidden;
          &.expand {
            &.Bran {
              height: wp(660);
            }
            &.Show {
              height: wp(440);
            }
            &.News {
              height: wp(220);
            }
            &.Worl {
              height: wp(220);
            }
          }
        }
        border-bottom: 1px solid #A8A8A8;
      }
      &.footer {
        .tab {
          border-bottom: none;
          .title {
            font-family: Arial-BoldMT;
            font-weight: bold;
            font-size: wp(30);
          }
        }
      }
    }
    .arrow {
      width: wp(26);
      height: wp(14);
      display: inline-block;
      float: right;
      img {
        transition: all .5s ease-in-out;
      }
    }
  }
</style>
