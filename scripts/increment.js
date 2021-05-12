let pts = 5;
let increment = 20;
document.getElementById("build_trap").addEventListener(
  "click",
  function() {
    if (pts < woodInv) {
      // reduces wood store count, if user has enough wood
      woodInv -= pts;
      document.querySelector("#row_wood .row_val").innerHTML = woodInv;
      pts += increment;
      document.querySelector("#build_trap #row_val").innerHTML = pts;

      let parentElement = document.getElementById("notification1");
      // Get a reference to the first child
      let theFirstChild = parentElement.firstChild;

      // Create a new element
      let newElement = document.createElement("div");
      newElement.className = "notification";
      newElement.id = "notification1";
      newElement.innerHTML = `A trap is set.`;

      // Insert the new element before the first child
      parentElement.insertBefore(newElement, theFirstChild);
    }
  },
  false
);

let hutPts = 200;
let incrementHut = 50;
document.getElementById("build_hut").addEventListener(
  "click",
  function() {
    if (hutPts < woodInv) {
      woodInv -= hutPts;
      document.querySelector("#row_wood .row_val").innerHTML = woodInv;
      hutPts += incrementHut;
      document.querySelector("#build_hut #row_val").innerHTML = hutPts;

      let parentElement = document.getElementById("notification1");
      // Get a reference to the first child
      let theFirstChild = parentElement.firstChild;

      // Create a new element
      let newElement = document.createElement("div");
      newElement.className = "notification";
      newElement.id = "notification1";
      newElement.innerHTML = `The hut is built, a family takes shelter in it.`;

      // Insert the new element before the first child
      parentElement.insertBefore(newElement, theFirstChild);
    }
  },
  false
);

let woodPts = 200;
let furPts = 10;
let meatPts = 5;
let incrementWood = 50;
let incrementFur = 10;
let incrementMeat = 5;
document.getElementById("build_lodge").addEventListener(
  "click",
  function() {
    if (meatPts < meatInv && woodPts < woodInv && furPts < furInv) {
      woodInv -= woodPts;
      document.querySelector("#row_wood .row_val").innerHTML = woodInv;

      furInv -= furPts;
      document.querySelector("#row_fur .row_val").innerHTML = furInv;

      meatInv -= meatPts;
      document.querySelector("#row_meat .row_val").innerHTML = meatInv;

      woodPts += incrementWood;
      furPts += incrementFur;
      meatPts += incrementMeat;

      document.querySelector("#build_lodge #row_val").innerHTML = woodPts;
      document.querySelector("#build_lodge #row_val_1").innerHTML = furPts;
      console.log(furPts);
      document.querySelector("#build_lodge #row_val_2").innerHTML = meatPts;

      let parentElement = document.getElementById("notification1");
      // Get a reference to the first child
      let theFirstChild = parentElement.firstChild;

      // Create a new element
      let newElement = document.createElement("div");
      newElement.className = "notification";
      newElement.id = "notification1";
      newElement.innerHTML = `A lodge is built, suitable for a large family.`;

      // Insert the new element before the first child
      parentElement.insertBefore(newElement, theFirstChild);
    }
  },
  false
);
