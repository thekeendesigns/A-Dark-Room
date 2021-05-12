document.getElementById("toggle").addEventListener(
  // opens and closes nav
  "click",
  function() {
    document.getElementById("toggle").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("open");
  },
  false
);

// closes menu, when user clicks a link
let navClick = document.querySelectorAll(".clicked-to-nav");
for (let navClicked of navClick) {
  navClicked.addEventListener("click", function(event) {
    document.getElementById("overlay").classList.remove("open");
    document.getElementById("toggle").classList.remove("active");
  });
}
