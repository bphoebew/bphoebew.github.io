let pseudoCount = 0;
let pseudoSlideshow = [
  "img/pseudoHead.png",
  "img/pseudoPage2.png",
  "img/pseudoPage3.png",
  "img/pseudoPage4.png",
];
let hexlabsCount = 0;
let hexlabsSlideshow = [
  "img/hexlabs.jpeg",
  "img/hackgtBadge.png",
  "img/hackgtx.png",
  "img/hackgtx_sweatshirt.png",
];
let stemCount = 0;
let stemSlideshow = [
  "img/SHEMENU.png",
  "img/SHEFIVE.png",
  "img/SHETHR.png",
  "img/SHEFOUR.png",
];
let craftCount = 0;
let craftSlideshow = [
  "img/bear_embroidery.jpeg",
  "img/hat_embroidery.jpeg",
  "img/wood_cut.jpeg",
  "img/miffy_waterjet.jpg",
  "img/ceramics.jpeg",
];

function prevPseudo() {
  if (pseudoCount !== 0) {
    document.getElementById("pseudoPic").src = pseudoSlideshow[pseudoCount - 1];
    pseudoCount--;
  } else {
    document.getElementById("pseudoPic").src =
      pseudoSlideshow[pseudoSlideshow.length - 1];
    pseudoCount = pseudoSlideshow.length - 1;
  }
}

function nextPseudo() {
  if (pseudoCount !== pseudoSlideshow.length - 1) {
    document.getElementById("pseudoPic").src = pseudoSlideshow[pseudoCount + 1];
    pseudoCount++;
  } else {
    document.getElementById("pseudoPic").src = pseudoSlideshow[0];
    pseudoCount = 0;
  }
}

function prevHexlabs() {
  if (hexlabsCount !== 0) {
    document.getElementById("hexlabsPic").src =
      hexlabsSlideshow[hexlabsCount - 1];
    hexlabsCount--;
  } else {
    document.getElementById("hexlabsPic").src =
      hexlabsSlideshow[hexlabsSlideshow.length - 1];
    hexlabsCount = hexlabsSlideshow.length - 1;
  }
}

function nextHexlabs() {
  if (hexlabsCount !== pseudoSlideshow.length - 1) {
    document.getElementById("hexlabsPic").src =
      hexlabsSlideshow[hexlabsCount + 1];
    hexlabsCount++;
  } else {
    document.getElementById("hexlabsPic").src = hexlabsSlideshow[0];
    hexlabsCount = 0;
  }
}

function prevSTEM() {
  if (stemCount !== 0) {
    document.getElementById("stemPic").src = stemSlideshow[stemCount - 1];
    stemCount--;
  } else {
    document.getElementById("stemPic").src =
      stemSlideshow[stemSlideshow.length - 1];
    stemCount = stemSlideshow.length - 1;
  }
}

function nextSTEM() {
  if (stemCount !== stemSlideshow.length - 1) {
    document.getElementById("stemPic").src = stemSlideshow[stemCount + 1];
    stemCount++;
  } else {
    document.getElementById("stemPic").src = stemSlideshow[0];
    stemCount = 0;
  }
}

function prevCraft() {
  if (craftCount !== 0) {
    document.getElementById("craftPic").src = craftSlideshow[craftCount - 1];
    craftCount--;
  } else {
    document.getElementById("craftPic").src =
      craftSlideshow[craftSlideshow.length - 1];
    craftCount = craftSlideshow.length - 1;
  }
}

function nextCraft() {
  if (craftCount !== craftSlideshow.length - 1) {
    document.getElementById("craftPic").src = craftSlideshow[craftCount + 1];
    craftCount++;
  } else {
    document.getElementById("craftPic").src = craftSlideshow[0];
    craftCount = 0;
  }
}
