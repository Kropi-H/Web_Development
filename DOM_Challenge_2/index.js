var randomNumber1 = Math.floor(Math.random()*6)+1; // var num 1-6

var randomDiceImage = "dice"+randomNumber1+".png"; //assign random num to the imabe

var randomImageSource = "images/"+randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //will check first img elemen
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // will check second img element

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player ONE Wins";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player TWO Wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
