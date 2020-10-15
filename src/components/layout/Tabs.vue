<template>
  <div class="tabs" :class="[type]">
    <div class="tab" v-for="tab in tabs">
      <div class="title" @click="onChangeTab(tab)" :class="{active: currentTab === tab}">
        <span>{{tab}}</span>
        <div class="arrow" v-if="secTabs[tab].length">
          <img src="@assets/img/layout/down.png" alt="">
        </div>
      </div>
      <div class="sec-container" :class="[tab.substr(0, 3) + tab.substr(tab.length - 3)]">
        <div class="sec" v-for="sec in secTabs[tab]">
          <div class="title" @click="onChangeSecTab(sec, tab)" :class="{active: currentSec === sec}">
            <span>{{sec}}</span>
            <div class="arrow" v-if="thirdTabs[sec] && thirdTabs[sec].length">
              <img src="@assets/img/layout/down.png" alt="">
            </div>
          </div>
          <div class="third-container" :class="[sec.substr(0, 3) + sec.substr(sec.length - 3), currentSec === sec ? 'expand' : '']">
            <div class="third" v-for="thi in thirdTabs[sec]">{{thi}}</div>
          </div>
        </div>
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
				type: String,
        default: 'navbar'
      }
    },
    data: () => ({

    }),
		methods: {
			onChangeTab(tab) {
        this.currentSec = '';
        $(`.${this.type} .third-container`).animate({height: 0}, 200);
				if (this.currentTab !== tab) {
					this.currentTab = tab;
					const height = this.secTabs[tab].length * 110 / 750 * 100 + 'vw';
					$(`.${this.type} .sec-container`).animate({height: 0}, 200);
					$(`.${this.type} .${tab.substr(0, 3) + tab.substr(tab.length - 3)}`).animate({height}, 200);
				} else {
					this.currentTab = "";
          $(`.${this.type} .${tab.substr(0, 3) + tab.substr(tab.length - 3)}`).animate({height: 0}, 200);

				}
			},
      onChangeSecTab(sec, tab) {
        if (this.currentSec !== sec) {
          this.currentSec = sec;
          if (this.thirdTabs[sec]) {
            const tabH = (this.secTabs[tab].length + this.thirdTabs[sec].length) * 110 / 750 * 100 + 'vw';
            const secH = this.thirdTabs[sec].length * 110 / 750 * 100 + 'vw';
            $(`.${this.type} .third-container`).animate({height: 0}, 200);
            setTimeout(() => {
              $(`.${this.type} .${tab.substr(0, 3) + tab.substr(tab.length - 3)}`).animate({height: tabH}, 200);
            }, 200);
            $(`.${this.type} .${sec.substr(0, 3) + sec.substr(sec.length - 3)}`).animate({height: secH}, 200);
          }
        } else {
          this.currentSec = "";
          $(`.${this.type} .${sec.substr(0, 3) + sec.substr(sec.length - 3)}`).animate({height: 0}, 200);
          const height = this.secTabs[tab].length * 110 / 750 * 100 + 'vw';
          $(`.${this.type} .${tab.substr(0, 3) + tab.substr(tab.length - 3)}`).animate({height}, 200);
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
          min-height: wp(110);
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
        .third,
        .sec {
          padding-left: wp(50);
        }
        .third {
          color: #303030;
        }
        .sec-container,
        .third-container {
          height: 0;
          overflow: hidden;
        }
        .sec-container {
          padding-right: wp(50);
        }
        border-bottom: 1px solid #A8A8A8;
      }
      &.footerbar {
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
