var randomNumber1=Math.floor(1+(Math.random(randomNumber1)*6));
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor(1+(Math.random(randomNumber2)*6));
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else if (randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML="Draw"
}
