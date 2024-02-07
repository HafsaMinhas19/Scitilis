$(".project-item > div > .lg-screen-project-link").each(function () {
  $(this)
    .on("mouseover", function () {
      $(".work").addClass("hover");
      $(".project-item").removeClass("active");
      $(this).parent().parent().addClass("active");
    })
    .on("mouseleave", function () {
      $(".work").removeClass("hover");
    });
});

let totalItems = $(".carousel-item").length;
totalItems = totalItems.toLocaleString("en-US", {
  minimumIntegerDigits: 2,
  useGrouping: false,
});
let currentIndex = $(".carousel-item.active").index() + 1;
currentIndex = currentIndex.toLocaleString("en-US", {
  minimumIntegerDigits: 2,
  useGrouping: false,
});
$(".total-items").html("" + currentIndex + "<span></span>" + totalItems + "");
$(".current-item").html(currentIndex);

$("#homeCarousel").bind("slid.bs.carousel", function () {
  currentIndex = $(".carousel-item.active").index() + 1;
  currentIndex = currentIndex.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  $(".total-items").html("" + currentIndex + "<span></span>" + totalItems + "");
  $(".current-item").html(currentIndex);
});

function tobottom() {
  $("html,body").animate(
    { scrollTop: $("html").height() - $(window).height() },
    1000,
    "easeInOutQuad"
  );
}
