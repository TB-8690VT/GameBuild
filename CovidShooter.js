var syringe = document.getElementById("syringe");


window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(syringe).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    syringe.style.left = left - 10 + "px";
  }
//  460  =>  board width - syringe width
  else if (e.key == "ArrowRight" && left <= 460) {
    syringe.style.left = left + 10 + "px";
  }