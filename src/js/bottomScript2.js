$(document).ready(function () {
// Set intial tab states
    $("#faceCare").css("display", "block");
    $("#faceCareMain").addClass("tabActive");
    $("#faceProd-btn1").addClass("subTabActive");
    $("#faceProduct1").css("display", "block");
    $("#regimenSimple").css("display", "block");
    $("#regimenSimpleBtn").addClass("tabActive");
    $("#csimple").css("display", "block");

// Collection
    function faceCare() {
      $(".faceButtons").on('click touchstart', function(subEvent) {
        var subTarget = $( subEvent.target );
        var i;
        $("p").removeClass("subTabActive");
        subTarget.addClass("subTabActive");
        $(".faceContent").css("display", "none");
        i = subTarget.data("id");
        $("#faceProduct" + i).css("display", "block");
      }); // faceButtons sub-event
    }; // face function
    function targetCare() {
      $(".targetButtons").on('click touchstart', function(subEvent) {
        var subTarget = $( subEvent.target );
        var i;
        $("p").removeClass("subTabActive");
        subTarget.addClass("subTabActive");
        $(".targetContent").css("display", "none");
        i = subTarget.data("id");
        $("#targetProduct" + i).css("display", "block");
      }); // targetButtons sub-event
    }; // targetCare function

    faceCare();

    $(".mainTab").on('click touchstart', function(event) {
      var target = $( event.target );
      $(".mainTab .mainTablinks").removeClass("tabActive");
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
    $(".regimenTab").on('click touchstart', function(event) {
      var target = $( event.target );
      $(".regimenTab .regimenTablinks").removeClass("tabActive");
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
