function bold() {
  if (document.getElementById("rez").style.fontWeight == "900")
    document.getElementById("rez").style.fontWeight = "";
  else document.getElementById("rez").style.fontWeight = "900";
}
function Italic() {
  if (document.getElementById("rez").style.fontStyle == "italic")
    document.getElementById("rez").style.fontStyle = "";
  else document.getElementById("rez").style.fontStyle = "italic";
}

function Underlined() {
  if (document.getElementById("rez").style.textDecoration == "underline")
    document.getElementById("rez").style.textDecoration = "";
  else document.getElementById("rez").style.textDecoration = "underline";
}
/* Fonts */
function fh() {
  document.getElementById("rez").style.fontFamily = "Helvetica";
}
function ft() {
  document.getElementById("rez").style.fontFamily = "Times New Roman";
}
function fc() {
  document.getElementById("rez").style.fontFamily = "Courier";
}
function fv() {
  document.getElementById("rez").style.fontFamily = "Verdana";
}

/* colors */

function red() {
  document.getElementById("rez").style.color = "red";
}
function blue() {
  document.getElementById("rez").style.color = "blue";
}

/* DOESNT WORK */
function yellow() {
  document.getElementById("rez").style.color = "yellow";
}

function purple() {
  document.getElementById("rez").style.color = "purple";
}

function inner() {
  var x = document.getElementById("text");
  var y = document.getElementById("rez");
  y.innerHTML = x.value;
}
/* SIZE CHANGER YAY */
function s1() {
  document.getElementById("rez").style.fontSize = "50px";
}
function s2() {
  document.getElementById("rez").style.fontSize = "100px";
}
function s3() {
  document.getElementById("rez").style.fontSize = "150px";
}
function s4() {
  document.getElementById("rez").style.fontSize = "220px";
}
