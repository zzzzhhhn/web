export default {
  data: () => ({
    classTops: [],
    showVideo1: false,
    showVideo2: false,
    showVideo3: false,
    showVideo4: false,
    showVideo5: false,
    showVideo6: false,
    showVideo7: false,
    showVideo8: false,
    showVideo9: false,
    showVideo10: false
  }),
  mounted() {
    const vm = this;
    setTimeout(() => {
      $(".anitmate-container:not(.hidden-xs)").each(function() {
        vm.classTops.push({
          top: $(this).offset().top,
          class: $(this)
            .attr("class")
            .split(" ")[0]
        });
      });
      this.checkShow(0);
    }, 800);
    $(window).scroll(e => {
      this.checkShow($(e.target).scrollTop());
    });
  },
  methods: {
    /**
     * 滚动出现
     * @param top
     */
    checkShow(top) {
      if (top < $(window).height()) top = $(window).height();
      this.classTops.forEach(item => {
        if (item.top <= top + ($(window).height() * 2) / 3) {
          $("." + item.class).addClass("show");
          this[item.class] = true;
        } else {
          $("." + item.class).removeClass("show");
        }
      });
    },
    /**
     * 播放视频
     * @param v
     */
    onPlayVideo(v) {
      $('video').trigger('pause');
      this['showVideo' + v] = true;
      document.getElementById('video' + v).play();
    },
    onPause(v) {
      const media = document.getElementById('video' + v);
      if (media.paused) {
        media.play();
      } else {
        media.pause();
      }
    }
  },
  beforeDestroy() {
    $(window).unbind("scroll");
  }
};
