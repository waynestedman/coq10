$(document).ready(function () {
// Collection Main Tab click event
    $("#faceCare").css("display", "block");
    $("#faceCareMain").addClass("tabActive");
    $("#faceProd-btn1").addClass("subTabActive");
    $("#faceProduct1").css("display", "block");

    function faceCare() {
      $(".faceButtons").click(function(subEvent) {
        var subTarget = $( subEvent.target );
        var i;
        $("button").removeClass("subTabActive");
        subTarget.addClass("subTabActive");
        $(".faceContent").css("display", "none");
        i = subTarget.data("id");
        $("#faceProduct" + i).css("display", "block");
      }); // faceButtons event
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
      }); // faceButtons event
    }; // faceCare function
    faceCare();

    $(".mainTab").click(function(event) {
      var target = $( event.target );
      $("button").removeClass("tabActive");
      target.addClass("tabActive");
      if (target.is("#faceCareMain")) {
        $("#faceCare").css("display", "block");
        $("#targetCare").css("display", "none");
        $("faceProduct1").css("display", "block");
        $("#faceProd-btn1").addClass("subTabActive");
        faceCare();
      } else if (target.is("#targetCareMain")) {
        $("#faceCare").css("display", "none");
        $("#targetCare").css("display", "block");
        $("#targetProduct1").css("display", "block");
        $("#targetProd-btn1").addClass("subTabActive");
        targetCare();
      } else {
        console.log("selection error!");
      } // if else
    });// mainTab click event


}); // Document Ready


// // Sub-tabs for Face Care
// function openFace(prodName1, elmnt) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].style.backgroundColor = "#EEEEEE";
//         tablinks[i].style.color = "#9E9E9E";
//         tablinks[i].style.borderBottom = "none";
//     }
//     document.getElementById(prodName1).style.display = "block";
//     elmnt.style.borderBottom = "2px solid #913788";
//     elmnt.style.color = "#913788";
//     elmnt.style.backgroundColor = "#FFFFFF";
// }
// document.getElementById("defaultOpen1").click();

// Sub-tabs for Target Care
// function openTarget(prodName2, elmnt) {
//     var i, targetcontent, targetlink;
//     targetcontent = document.getElementsByClassName("targetcontent");
//     for (i = 0; i < targetcontent.length; i++) {
//         targetcontent[i].style.display = "none";
//     }
//     targetlink = document.getElementsByClassName("targetlink");
//     for (i = 0; i < targetlink.length; i++) {
//         targetlink[i].style.backgroundColor = "#EEEEEE";
//         targetlink[i].style.color = "#9E9E9E";
//         targetlink[i].style.borderBottom = "none";
//     }
//     document.getElementById(prodName2).style.display = "block";
//     elmnt.style.borderBottom = "2px solid #913788";
//     elmnt.style.color = "#913788";
//     elmnt.style.backgroundColor = "#FFFFFF";
// }
// document.getElementById("defaultOpen2").click();

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
