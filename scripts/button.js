let i = 0; // "boolean" for stoking fire button animation
let j = 0; // "boolean" for gather wood button animation
let k = 0; // "boolean" for checking traps button animation

let woodInc = Math.floor(Math.random() * 100 + 20);
let woodInv = 5;

function moveGather() {
  if (j == 0) {
    j = 1;
    let elem = document.getElementById("cooldown1");
    let width = 100;
    let id = setInterval(frame, 10);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("gatherButton").classList.remove("disabled");
        j = 0;
      } else {
        width--;
        elem.style.width = width + "%";
        document.getElementById("gatherButton").classList.add("disabled");
      }
    }
  }

  woodInv += woodInc;
  document.querySelector("#row_wood .row_val").innerHTML = woodInv;

  // Get a reference to the element in which we want to insert a new node
  let parentElement = document.getElementById("notification1");
  // Get a reference to the first child
  let theFirstChild = parentElement.firstChild;

  // Create a new element
  let newElement = document.createElement("div");
  newElement.className = "notification";
  newElement.id = "notification1";
  newElement.innerHTML = `dry brush and dead branches litter the forest floor.`;

  // Insert the new element before the first child
  parentElement.insertBefore(newElement, theFirstChild);
}

let meatInc = Math.floor(Math.random() * 20 + 5);
let meatInv = 0;

let furInc = Math.floor(Math.random() * 10 + 2);
let furInv = 0;
function moveTraps() {
  if (k == 0) {
    k = 1;
    let elem = document.getElementById("cooldown2");
    let width = 100;
    let id = setInterval(frame, 10);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("trapsButton").classList.remove("disabled");
        k = 0;
      } else {
        width--;
        elem.style.width = width + "%";
        document.getElementById("trapsButton").classList.add("disabled");
      }
    }
  }

  meatInv += meatInc;
  document.querySelector("#row_meat .row_val").innerHTML = meatInv;

  furInv += furInc;
  document.querySelector("#row_fur .row_val").innerHTML = furInv;

  let parentElement = document.getElementById("notification1");
  // Get a reference to the first child
  let theFirstChild = parentElement.firstChild;

  // Create a new element
  let newElement = document.createElement("div");
  newElement.className = "notification";
  newElement.id = "notification1";
  newElement.innerHTML = `You pick up some meat, fur and bones left by the poor animal`;

  // Insert the new element before the first child
  parentElement.insertBefore(newElement, theFirstChild);
}

let cartPts = 20;
let counterCart = 0;
document.getElementById("build_cart").addEventListener("click", function() {
  if (cartPts < woodInv) {
    counterCart++;
    woodInv -= cartPts;
    document.querySelector("#row_wood .row_val").innerHTML = woodInv;
    document.getElementById("build_cart").classList.add("disabled");

    let parentElement = document.getElementById("notification1");
    // Get a reference to the first child
    let theFirstChild = parentElement.firstChild;

    let newElement = document.createElement("div");
    newElement.className = "notification";
    newElement.id = "notification1";
    newElement.innerHTML = `crafted a cart, you are able to collect more resources`;

    // Insert the new element before the first child
    parentElement.insertBefore(newElement, theFirstChild);
  }
  if (counterCart == 1) {
    console.log("done");
    cartPts = 99999999;
  }
});

function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("cooldown");
    let width = 100;
    let id = setInterval(frame, 80);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("stokeButton").classList.remove("disabled");
        i = 0;
      } else {
        width--;
        elem.style.width = width + "%";
        document.getElementById("stokeButton").classList.add("disabled");
      }
    }
    woodInv--;
    document.querySelector("#row_wood .row_val").innerHTML = woodInv;
  }

  let parentElement = document.getElementById("notification1");
  // Get a reference to the first child
  let theFirstChild = parentElement.firstChild;

  // Create a new element
  let newElement = document.createElement("div");
  newElement.className = "notification";
  newElement.id = "notification1";
  newElement.innerHTML = `The fire is roaring, the room is warm.`;

  // Insert the new element before the first child
  parentElement.insertBefore(newElement, theFirstChild);
}

let doc = document.getElementById("header");
let headerBtns = doc.getElementsByClassName("headerButton");

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}
