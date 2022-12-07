var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;
var randomimage="dice"+randomnumber1+".png";
var randomimagesrc="images/"+randomimage;
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesrc);


var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;
var randomimage2="dice"+randomnumber2+".png";
var randomimagesrc2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesrc2);

if(randomnumber1>randomnumber2){
    var heading=document.querySelectorAll("h1")[0];
    heading.innerHTML="PLAYER 1 WINS ";
    heading.style.color="red";
    
}

else if(randomnumber2>randomnumber1){
    var heading=document.querySelectorAll("h1")[0];
    heading.innerHTML="PLAYER 2 WINS ";
    heading.style.color="green";
    
}
else{
    var heading =document.querySelectorAll("h1")[0];
    heading.innerHTML="DRAW";
    heading.style.color="white";
}