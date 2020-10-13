export default {
  data: () => ({
    classTops: []
  }),
  mounted() {
    const vm = this;
    setTimeout(() => {
      $(".anitmate-container").each(function() {
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
    }
  },
  beforeDestroy() {
    $("body").unbind("scroll");
  }
};
