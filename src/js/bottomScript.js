// Collection Main Tabs
function openMain(evt, careName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("mainTabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("mainTablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(careName).style.display = "block";
    evt.currentTarget.className += " active";
}


// document.getElementById("defaultOpenM").click();
// tabOpen.click();
// document.querySelector('.defaultOpen').setAttribute("checked", "checked");

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
// document.getElementById("defaultOpenRegimen").click();

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
// document.getElementById("defaultOpenR").click();

$(document).ready(function () {
  $("button").click(function(){
      $("imgTest").attr("width","500");
  });
});

// Regimen section Main Tabs
// function openRegimen(evt, regimenName) {
//     var i, regimencontent, regimenlinks;
//     regimencontent = document.getElementsByClassName("regimenTabContent");
//     for (i = 0; i < regimencontent.length; i++) {
//         regimencontent[i].style.display = "none";
//     }
//     regimenlinks = document.getElementsByClassName("regimenTablinks");
//     for (i = 0; i < regimenlinks.length; i++) {
//         regimenlinks[i].className = regimenlinks[i].className.replace(" active", "");
//     }
//     document.getElementById(regimenName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
// document.getElementById("defaultOpenRegimen").click();
