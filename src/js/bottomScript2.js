$(document).ready(function () {
// Collection Main Tab click event
    $("#faceCare").css("display", "block");
    $("#faceCareMain").addClass("tabActive");
    $(".mainTab").click(function(event) {
      var target = $( event.target );

      $("button").removeClass("tabActive");
      target.addClass("tabActive");

      if (event.target == "#targetCareMain") {
        $("#faceCare").css("display", "none");
        $("#targetCare").css("display", "block");
      } else {
        $("#faceCare").css("display", "block");
        $("#targetCare").css("display", "none");
      }; // if else

      // function handler( target ) {
      //   if ( target.is( "#targetCareMain" ) ) {
      //     $("#targetCare").css("display", "block");
      //     $("#faceCare").css("display", "none");
      //   }  else {
      //    $("#faceCare").css("display", "none");
      //    $("#targetCare").css("display", "block");
      //   };
      // }; // handler
      // handler();
    });// mainTab click event

}); // Document Ready


// // Sub-tabs for Face Care
function openFace(prodName1, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#EEEEEE";
        tablinks[i].style.color = "#9E9E9E";
        tablinks[i].style.borderBottom = "none";
    }
    document.getElementById(prodName1).style.display = "block";
    elmnt.style.borderBottom = "2px solid #913788";
    elmnt.style.color = "#913788";
    elmnt.style.backgroundColor = "#FFFFFF";
}
document.getElementById("defaultOpen1").click();

// Sub-tabs for Target Care
function openTarget(prodName2, elmnt) {
    var i, targetcontent, targetlink;
    targetcontent = document.getElementsByClassName("targetcontent");
    for (i = 0; i < targetcontent.length; i++) {
        targetcontent[i].style.display = "none";
    }
    targetlink = document.getElementsByClassName("targetlink");
    for (i = 0; i < targetlink.length; i++) {
        targetlink[i].style.backgroundColor = "#EEEEEE";
        targetlink[i].style.color = "#9E9E9E";
        targetlink[i].style.borderBottom = "none";
    }
    document.getElementById(prodName2).style.display = "block";
    elmnt.style.borderBottom = "2px solid #913788";
    elmnt.style.color = "#913788";
    elmnt.style.backgroundColor = "#FFFFFF";
}
document.getElementById("defaultOpen2").click();

// Regimen section Main Tabs
function openRegimen(evt, regimenName) {
    var i, regimencontent, regimenlinks;
    regimencontent = document.getElementsByClassName("regimenTabContent");
    for (i = 0; i < regimencontent.length; i++) {
        regimencontent[i].style.display = "none";
    }
    regimenlinks = document.getElementsByClassName("regimenTablinks");
    for (i = 0; i < regimenlinks.length; i++) {
        regimenlinks[i].className = regimenlinks[i].className.replace(" active", "");
    }
    document.getElementById(regimenName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenRegimen").click();
