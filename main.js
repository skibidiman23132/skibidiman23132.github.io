document.onkeypress = function (e) { if(e.key == "`") window.location = "https://www.classroom.google.com/h" };
document.onkeypress = function (e) { if (e.keyCode === 32) { splashText(); } };
document.querySelector('button').addEventListener('click', () => {
  while (true) {}
});

var says = [
  "yes,i did steal this from railing",
  "anyone got a thingamabob?",
  "Fight me(pls dont)",
  "Gilroy built like warden without the beard and glasses",
  "har har har har harhahrharhahrahrhhrahrhrhharh",
  "I like sleep",
  "mb for not adding more games",
  "U a Bot",
  "Fish Tacos",
  "Now serving thirty two ish games",
  "yes its open-source",
  "no you shouldnt skid it",
  "IM NOT ADDING SKBITY TOLIET",
  "what do i add?",
  "*you're* 👆🤓",
  "optimized by ChatGPT",
  "Theres a proxy i think",
  "TACOS",
  "whats up brothers",
  "i need ads on this site cuz i need money",
  "uh",
  "EERM",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH",
  "ZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzz",
  "Special teams, speacial plays, speacial players",
  "ALEXXXXXXX",
  "skibidi skuza",
  "Hop on",
  "chicken nugget da best turtle",
  "▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10",
  "L + dont care + CURSE OF THE NILE ‼️ ‼️ 𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂𓂿𓂺𓃃𓃂𓂛𓂏𓅱𓅥𓅩𓅦𓅹𓅸𓅳𓅩𓅪𓄭𓄫𓄮𓄬𓄗𓄑𓄌𓃦𓃧𓃨𓃤𓃟𓃓𓃅𓃁𓂽𓃂𓂊𓁾𓂀𓁽𓁼𓁠𓁛𓁟𓁦𓁜𓁭𓁡𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂𓂿𓂺𓃃𓃂𓂛𓂏𓅱𓅥𓅩𓅦𓅹𓅸𓅳𓅩𓅪𓄭𓄫𓄮𓄬𓄗𓄑𓄌𓃦𓃧𓃨𓃤𓃟𓃓𓃅𓃁𓂽𓃂𓂊𓁾𓂀𓁽𓁼𓁠𓁛𓁟𓁦𓁜𓁭𓁡𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂",
  "the person who made this websites pretty cool, ig", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii sennon :)",
  "amog",
  "do we got pe or tech today",
  "💀", 
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();
  
  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      proxylocation = data.YourFuckingLocation;
      says.push(`Sending missile to ${proxylocation}😈`);
      splashText();
    });
  
  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip is ${ipAddress}`);
      splashText();
    });
});


/*
let user=document.getElementById("txt_user")
let password=document.getElementById("txt_pass")
let button=document.getElementById("imdone")
let login=document.getElementById("login")
let maincontent =document. getElementById("content");
let page_cookie={};
try{
page_cookie=JSON.parse(document.cookie);
} catch(error){
      console.error(error);
      page_cookie.login=false;
      document.cookie=JSON.parse(page_cookie);
      document.cookie=JSON.stringify(page_cookie);
}
auth=[{username:"Student", password:"Lobster"},
 {username:"Owner", password:"Frog"}];
function checkpassword(username,password,auth){
return auth.username==username && auth.password==password;
};
document.onkeypress = function (e) { if(e.key == "Enter" && login.focus){
  unlockpage();
}};
function unlockpage(){
      page_cookie.login=true; 
      document.cookie=JSON.stringify(page_cookie);
      maincontent.classList.remove("lock");
      login.classList.add("lock");
        }
if (page_cookie.login){unlockpage();}
button.onclick=()=>{
      for (let i=0; i<auth.length; i++){
if (checkpassword(user.value,password.value,auth[i])){
          unlockpage();
      }
    }
}
*/
