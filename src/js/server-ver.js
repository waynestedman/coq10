<script type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick'
  ], function ($) {
$(document).ready(function(){
$('#ingredientsDesc').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true
});
  $('#commentsSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
   }); // comments slider
});
});
// ]]></script>

// *********************** Page Bottom *************************************** //
<script type="text/javascript" xml="space">// <![CDATA[
  require([
    'jquery',
    'slick'
    ], function ($) {
      $(document).ready(function () {
      // Set intial tab states
        $("#faceCare").css("display", "block");
        $("#faceCareMain").addClass("tabActive");
        $("#faceProd-btn1").addClass("subTabActive");
        $("#faceProduct1").css("display", "block");
        $("#regimenCore").css("display", "block");
        $("#regimenCoreBtn").addClass("tabActive");
        $("#core1").css("display", "block");

      // Collection
        function faceCare() {
          $(".faceButtons").click(function(subEvent) {
            var subTarget = $( subEvent.target );
            var i;
            $("button").removeClass("subTabActive");
            subTarget.addClass("subTabActive");
            $(".faceContent").css("display", "none");
            i = subTarget.data("id");
            $("#faceProduct" + i).css("display", "block");
          }); // faceButtons sub-event
        }; // face function
        function targetCare() {
          $(".targetButtons").click(function(subEvent) {
            var subTarget = $( subEvent.target );
            var i;
            $("button").removeClass("subTabActive");
            subTarget.addClass("subTabActive");
            $(".targetContent").css("display", "none");
            i = subTarget.data("id");
            $("#targetProduct" + i).css("display", "block");
          }); // targetButtons sub-event
        }; // targetCare function

        faceCare();

        $(".mainTab").click(function(event) {
          var target = $( event.target );
          $("button").removeClass("tabActive");
          target.addClass("tabActive");
          $(".mainTab-subtxt").removeClass("tabActive");

          if (target.is("#faceCareMain")) {
            $("#faceCare").css("display", "block");
            $("#targetCare").css("display", "none");
            $("#faceProduct1").css("display", "block");
            $("#faceProd-btn1").addClass("subTabActive");
            faceCare();
          } else if (target.is("#targetCareMain")) {
            $("#faceCare").css("display", "none");
            $("#targetCare").css("display", "block");
            $("#targetProduct1").css("display", "block");
            $("#targetProd-btn1").addClass("subTabActive");
            targetCare();
          } else {
            console.log("Collection selection error!");
          } // if else
        });// mainTab click event
      // Regimen
        $(".regimenTab").click(function(event) {
          var target = $( event.target );
          $("button").removeClass("tabActive");
          target.addClass("tabActive");
          $(".regimenTab-subtxt").removeClass("tabActive");

          if (target.is("#regimenCoreBtn")) {
            $("#regimenCore").css("display", "block");
            $("#regimenSimple").css("display", "none");
            $("core1").css("display", "block");
          } else if (target.is("#regimenSimpleBtn")) {
            $("#regimenCore").css("display", "none");
            $("#regimenSimple").css("display", "block");
            $("#simple1").css("display", "block");
          } else {
            console.log("Regimen selection error!");
          } // if else
        });// Regimen Tab click event
      }); // Document Ready
    });
// ]]></script>
