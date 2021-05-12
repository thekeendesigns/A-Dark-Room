let cursor = document.getElementById("cursorId");

document.addEventListener("mousemove", function(e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

let hoverElem = document.querySelectorAll(
  "a, .logo-text, .button_container, div.button, div.headerButton, .button_container span"
);

for (let hoverOn of hoverElem) {
  hoverOn.addEventListener("mouseenter", function(event) {
    document.getElementById("cursorId").style.width = "70px";
    document.getElementById("cursorId").style.height = "70px";
    document.getElementById("cursorId").style.opacity = "0.5";
    document.getElementById("cursorId").style.zIndex = "0";
  });
}

for (let hoverOff of hoverElem) {
  hoverOff.addEventListener("mouseleave", function(event) {
    document.getElementById("cursorId").style.width = "10px";
    document.getElementById("cursorId").style.height = "10px";
    document.getElementById("cursorId").style.opacity = "1";
    document.getElementById("cursorId").style.zIndex = "3";
  });
}
