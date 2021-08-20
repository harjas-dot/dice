var r1 = (Math.random() * 6) + 1;
var rn1 = Math.floor(r1);
var r2 = (Math.random() * 6) + 1;
var rn2 = Math.floor(r2);


if (rn1 === 1) {
  document.getElementById("img1").src = "img/dice1.png";
} else if (rn1 === 2) {
  document.getElementById("img1").src = "img/dice2.png";
} else if (rn1 === 3) {
  document.getElementById("img1").src = "img/dice3.png";
} else if (rn1 === 4) {
  document.getElementById("img1").src = "img/dice4.png";
} else if (rn1 === 5) {
  document.getElementById("img1").src = "img/dice5.png";
} else if (rn1 === 6) {
  document.getElementById("img1").src = "img/dice6.png";
}



if (rn2 === 1) {
  document.getElementById("img2").src = "img/dice1.png";
} else if (rn2 === 2) {
  document.getElementById("img2").src = "img/dice2.png";
} else if (rn2 === 3) {
  document.getElementById("img2").src = "img/dice3.png";
} else if (rn2 === 4) {
  document.getElementById("img2").src = "img/dice4.png";
} else if (rn2 === 5) {
  document.getElementById("img2").src = "img/dice5.png";
} else if (rn2 === 6) {
  document.getElementById("img2").src = "img/dice6.png";
}



if(rn1===rn2){
  document.getElementById("result").innerHTML="DRAW";
}
else if(rn1>rn2){
  document.getElementById("result").innerHTML="PLAYER 1 WINS";
}
else if(rn1<rn2){
  document.getElementById("result").innerHTML="PLAYER 2 WINS";
}

function reset(){
  document.getElementById("result").innerHTML="REFRESH ME";
  document.getElementById("img2").src = "img/dice6.png";
  document.getElementById("img1").src = "img/dice6.png";
}
