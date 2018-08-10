$(document).ready(function(){
  $("#faceSlider").slick({
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // cssEase: 'ease-in-out',
    dots: true,
    // fade: true,
    infinite: false,
    pauseOnDotsHover: true,
    // speed: 1200,
    customPaging: function(slider, i) {
        var thumbnail = $(slider.$slides[i]).data("thumbnail");
        return '<a href="javascript:void(0)"><img src="'+thumbnail+'" class="img-wrapper"></a>'}
  }); //faceSlider
  $("#targetedSlider").slick({
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // cssEase: 'ease-in-out',
    dots: true,
    // fade: true,
    infinite: false,
    pauseOnDotsHover: true,
    // speed: 1200,
    customPaging: function(slider, i) {
        var thumbnail = $(slider.$slides[i]).data("thumbnail");
        return '<a href="javascript:void(0)"><img src="'+thumbnail+'" class="img-wrapper"></a>'}
  }); //targetedSlider
}); //doc ready
