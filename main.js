document.onkeypress = function (e) { if(e.key == "`") window.location = "https://www.classroom.google.com/h" };

document.querySelector('button').addEventListener('click', () => {
  while (true) {}
});

var says = [
  "yes,i did steal this from railing",
  "Fight me",
  "I like sleep",
  "Bot",
  "Fish Tacos",
  "Now serving thirty two games",
  "yes its open-source",
  "no you shouldnt skid it",
  "IM NOT ADDING SKBITY TOLIET",
  "what do i add?",
  "*you're* 👆🤓",
  "optimized by ChatGPT",
  "Cooper thanks for loving this, i think!",
  "Theres a proxy i think",
  "TACOS",
  "whats up brothers",
  "i need ads on this site cuz i need money 😮",
  "uh",
  "EERM",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
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
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip is: ${ipAddress}`);
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
