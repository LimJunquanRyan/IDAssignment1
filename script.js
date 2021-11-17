function navigate() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


var slide = 0;
var imgCaseABS = ["caseABS.jpg"];
var imgCaseAcrylic = ["caseAcrylicSide.jfif", "caseAcrylicTop.jpg", "caseAcrylicTopSide.jfif"];

function autoSlides(list, listName) {
  var slideItem = document.getElementsByClassName(listName);

  slideItem.style.backgroundImage = list[slide];
  slide++;
  if (slide === length(list)) {
    slide = 0;
  }

  setTimeout(autoSlides(list), 3000);
}