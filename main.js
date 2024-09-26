// var currentUrl = 'https://www.classroom.google.com/h';

// function showPopup() {
//   document.getElementById('skib').style.display = 'block';
// }

// function saveUrl() {
//   var newUrl = document.getElementById('newUrl').value;
//   if (newUrl) {
//     currentUrl = newUrl;
//     document.getElementById('popup').style.display = 'none';
//   } else {
//     alert('Please enter a valid URL, https://example.com/');
//   }
// }

// document.getElementById('changeRedirectBtn').addEventListener('click', showPopup);

// document.getElementById('saveUrlBtn').addEventListener('click', saveUrl);

// document.onkeydown = function (e) {
//   if (e.key === "`") {
//     window.open(currentUrl, '_blank');
//   }
// };



document.onkeydown = function (e) { if (e.keyCode === 13) { splashText(); } };
document.querySelector('button').addEventListener('click', () => {
  while (true) {}
});

var says = [
  "yes,i did steal this from railing",
  "shoutout to IdTech",
  "DMCA, no more minecraft :(",
  "hello australians",
  "parents aprove(trust)",
  "artifcal smartness is fire trust",
  "shes says shes from the islands",
  "mersker mersker",
  "papa louie better be paying me double for the amount of work im doing",
  "erm what the sigma",
  "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
  "press the enter key",
  "if you have a game that you have made and would like to add, email me(in the requests page)",
  "just bc i added gambling; if you have any problems with gambling, call 1-800-426-2537",
  "Fight me(pls dont)",
  "Gilroy built like warden without the beard and glasses",
  "har har har har harhahrharhahrahrhhrahrhrhharh",
  "I like sleep",
  "mb for not adding more games",
  "U a Bot",
  "Fish Tacos",
  "Now serving 69 ish games🦖",
  "yes its open-source, dummy",
  "papas pizzaaaaaaaaaaaa",
  "IM NOT ADDING SKBITY TOLIET",
  "what do i add?",
  "*you're* 👆🤓",
  "optimized by ChatGPT",
  "Theres a proxy site, i think",
  "TACOS",
  "whats up brothers",
  //"soory bout the ads :(",
  "uh",
  "EERM",
  "Schools Pretty Boring, i think",
  "is this websites trash?", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH",
  "ZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzz",
  "Special teams, speacial plays, speacial players",
  "ALEXXXXXXX",
  "skibidi skuza",
  "Hop on",
  "chicken nugget da best turtle",
  "L + dont care + CURSE OF THE NILE ‼️ ‼️ 𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂𓂿𓂺𓃃𓃂𓂛𓂏𓅱𓅥𓅩𓅦𓅹𓅸𓅳𓅩𓅪𓄭𓄫𓄮𓄬𓄗𓄑𓄌𓃦𓃧𓃨𓃤𓃟𓃓𓃅𓃁𓂽𓃂𓂊𓁾𓂀𓁽𓁼𓁠𓁛𓁟𓁦𓁜𓁭𓁡𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂𓂿𓂺𓃃𓃂𓂛𓂏𓅱𓅥𓅩𓅦𓅹𓅸𓅳𓅩𓅪𓄭𓄫𓄮𓄬𓄗𓄑𓄌𓃦𓃧𓃨𓃤𓃟𓃓𓃅𓃁𓂽𓃂𓂊𓁾𓂀𓁽𓁼𓁠𓁛𓁟𓁦𓁜𓁭𓁡𓀔𓀇𓀅𓀋𓀡𓀡𓀕𓀠𓀧𓀨𓀣𓀷𓀷𓀿𓀿𓁀𓁶𓁰𓁴𓁿𓂀𓁾𓁵𓁯𓂞𓂤𓂗𓃃𓂾𓂺𓂹𓃞𓃙𓃖𓃓𓃕𓃓𓃜𓃘𓃙𓃟𓃛𓃞𓂺𓃂",
  "the person who made this websites pretty cool, but it depends on the perspective", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii sennon :)",
  "amog",
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
  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingISP;
      says.push(`nice isp, "${ipAddress}"`);
      splashText();
    });
  fetch("https://discord.com/api/guilds/1288933489818865784/widget.json")
    .then((response) => response.json())
    .then((data) => {
      invite = data.instant_invite;
      says.push(`Join the discord? "${invite}"`);
      splashText();
    });
});

//function cheat() {
//  var savedTime = parseInt(localStorage.getItem('savedTime'));
//  savedTime += 3600; // Add 3600 seconds to the savedTime
//  localStorage.setItem('savedTime', savedTime);
//  document.getElementById('time-counter').textContent = formatTime(savedTime);
//}
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
