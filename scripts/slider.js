document
  .getElementById("location_outside")
  .addEventListener("click", function() {
    document.getElementById("locationSlider").style.marginLeft = "-700px";
    document.getElementById("storesContainer").style.position = "absolute";
  });

document.getElementById("location_room").addEventListener("click", function() {
  document.getElementById("locationSlider").style.marginLeft = "0px";
});

let rightSide = document.querySelectorAll(".carousel-right");
let leftSide = document.querySelectorAll(".carousel-left");
for (let right of rightSide) {
  right.addEventListener("click", function(event) {
    let moveRight = "translateX(-1262px)";

    let x = document.getElementById("carousel-container");
    x.style.transform = moveRight;
  });
}

for (let left of leftSide) {
  left.addEventListener("click", function(event) {
    let moveLeft = "translateX(0px)";

    let xLeft = document.getElementById("carousel-container");
    xLeft.style.transform = moveLeft;
  });
}
