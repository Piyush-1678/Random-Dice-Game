var randomnumber1 = Math.floor(Math.random()*6 )+1;

var randomImage = "images/dice" + randomnumber1 +".png";

document.querySelector(".img1").setAttribute("src",randomImage);

var randomnumber2 = Math.floor(Math.random()*6 )+1;

var randomImage2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomImage2);


if (randomnumber1 >  randomnumber2){
  document.querySelector("h1").innerHTML ="🚩 Player One Won !!"  ;
}
else if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML ="🎌Draw !🎌";
}
else{
  document.querySelector("h1").innerHTML ="Player Two Won !! 🚩";
}
