let pseudoCount = 0;
let hexlabsCount = 0;
let stemCount = 0;
let craftCount = 0;

function prevPseudo() {
  if (pseudoCount == 1) {
    document.getElementById("pseudoPic").src = "img/pseudoHead.png";
    pseudoCount--;
  } else if (pseudoCount == 2) {
    document.getElementById("pseudoPic").src = "img/pseudoPage2.png";
    pseudoCount--;
  } else if (pseudoCount == 3) {
    document.getElementById("pseudoPic").src = "img/pseudoPage3.png";
    pseudoCount--;
  }
}

function nextPseudo() {
  if (pseudoCount == 0) {
    document.getElementById("pseudoPic").src = "img/pseudoPage2.png";
    pseudoCount++;
  } else if (pseudoCount == 1) {
    document.getElementById("pseudoPic").src = "img/pseudoPage3.png";
    pseudoCount++;
  } else if (pseudoCount == 2) {
    document.getElementById("pseudoPic").src = "img/pseudoPage4.png";
    pseudoCount++;
  }
}

function prevHexlabs() {
  if (hexlabsCount == 1) {
    document.getElementById("hexlabsPic").src = "img/hexlabs.jpeg";
    hexlabsCount--;
  } else if (hexlabsCount == 2) {
    document.getElementById("hexlabsPic").src = "img/hackgtBadge.png";
    hexlabsCount--;
  } else if (hexlabsCount == 3) {
    document.getElementById("hexlabsPic").src = "img/hackgtx.png";
    hexlabsCount--;
  }
}

function nextHexlabs() {
  if (hexlabsCount == 0) {
    document.getElementById("hexlabsPic").src = "img/hackgtBadge.png";
    hexlabsCount++;
  } else if (hexlabsCount == 1) {
    document.getElementById("hexlabsPic").src = "img/hackgtx.png";
    hexlabsCount++;
  } else if (hexlabsCount == 2) {
    document.getElementById("hexlabsPic").src = "img/hackgtx_sweatshirt.png";
    hexlabsCount++;
  }
}

function prevSTEM() {
  if (stemCount == 1) {
    document.getElementById("stemPic").src = "img/SHEMENU.png";
    stemCount--;
  } else if (stemCount == 2) {
    document.getElementById("stemPic").src = "img/SHEFIVE.png";
    stemCount--;
  } else if (stemCount == 3) {
    document.getElementById("stemPic").src = "img/SHETHR.png";
    stemCount--;
  }
}

function nextSTEM() {
  if (stemCount == 0) {
    document.getElementById("stemPic").src = "img/SHEFIVE.png";
    stemCount++;
  } else if (stemCount == 1) {
    document.getElementById("stemPic").src = "img/SHETHR.png";
    stemCount++;
  } else if (stemCount == 2) {
    document.getElementById("stemPic").src = "img/SHEFOUR.png";
    stemCount++;
  }
}

function prevCraft() {
  if (craftCount == 1) {
    document.getElementById("craftPic").src = "img/bear_embroidery.jpeg";
    craftCount--;
  } else if (craftCount == 2) {
    document.getElementById("craftPic").src = "img/hat_embroidery.jpeg";
    craftCount--;
  } else if (craftCount == 3) {
    document.getElementById("craftPic").src = "img/wood_cut.jpeg";
    craftCount--;
  } else if (craftCount == 4) {
    document.getElementById("craftPic").src = "img/miffy_waterjet.jpg";
    craftCount--;
  } else if (craftCount == 4) {
    document.getElementById("craftPic").src = "img/ceramics.jpeg";
    craftCount--;
  }
}

function nextCraft() {
  if (craftCount == 0) {
    document.getElementById("craftPic").src = "img/hat_embroidery.jpeg";
    craftCount++;
  } else if (craftCount == 1) {
    document.getElementById("craftPic").src = "img/wood_cut.jpeg";
    craftCount++;
  } else if (craftCount == 2) {
    document.getElementById("craftPic").src = "img/miffy_waterjet.jpg";
    craftCount++;
  } else if (craftCount == 3) {
    document.getElementById("craftPic").src = "img/ceramics.jpeg";
    craftCount++;
  }
}
