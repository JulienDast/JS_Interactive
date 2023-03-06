var footer = document.querySelector("footer");
var header = document.querySelector("header");


//Fonctionnalité 1
footer.addEventListener('click', clickfooter);

function clickfooter(){
  console.log('Clique') 
}

//Fonctionnalité 1-bis
let countClicks = 0;

footer.onclick = function() { 
countClicks++;
console.log("Clic numéro " + countClicks);
}

{//Fonctionnalité 2
let navbarId = document.getElementById("navbarHeader");
let togglebutton = document.querySelector("button.navbar-toggler")
togglebutton.addEventListener('click', Navbar);

function Navbar(){
navbarId.classList.toggle("collapse");
}
}//

{//Fonctionnalité 3
let first_card = document.getElementsByClassName("card")[0];
let first_card_edit = first_card.getElementsByTagName("button")[1];
let first_card_text = first_card.querySelector(".card-text");

first_card_edit.addEventListener('click', colorize_red);

function colorize_red(){
  first_card_text.style.color = "red"
}
}//

{//Fonctionnalité 4
let second_card = document.getElementsByClassName("card")[1];
let second_card_edit = second_card.getElementsByTagName("button")[1];
let second_card_text = second_card.querySelector(".card-text");

second_card_edit.addEventListener('click', colorize_green);

function colorize_green(){
  if (second_card_text.style.color === 'green'){
    second_card_text.style.color = '' ;
    }
    else{
    second_card_text.style.color = "green";
  }
}
}//

{//Fonctionnalité 5

let link = document.getElementsByTagName("link")[0];
header.addEventListener('dblclick',()=>{
link.disabled ?(link.disabled=false) : (link.disabled=true)
});
}//

{//Fonctionnalité 6
}