$(document).ready(function () {
  var rangeSlider = $("#pln-value-selector");

  rangeSlider.ionRangeSlider({
    type: "single",
    grid: true,
    min: 1,
    max: 500000,
    from: 1,
    step: 1,
    postfix: " PLN",
    prettify_enabled: true,
    prettify_separator: ",",
    onChange: function (data) {
      $("#selected-value").text(data.from + " PLN");
    },
  });
});


$('.slick').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  dots: true,
  prevArrow: $(".slide-m-prev"),
  nextArrow: $(".slide-m-next")
})

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["pl"],
  separateDialCode: true,
  customContainer:"phone-field"
});
window.ga = function () {
  ga.q.push(arguments)
};
ga.q = [];
ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('set', 'anonymizeIp', true);
ga('set', 'transport', 'beacon');
ga('send', 'pageview')
