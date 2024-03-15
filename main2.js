var says = [
  "yes,i did steal this from railing",
  "Fight me",
  "I like sleep",
  "Bot",
  "yes its open-source",
  "no you shouldnt skid it",
  "IM NOT ADDING SKBITY TOLIET"
  "what do i add?",
  "*you're* 👆🤓",
  "optimized by ChatGPT",
  "Cooper thanks for loving railin!",
  "i need ads on this site cuz i need money 😮",
  "uh",
  "EERM",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii sennon :)",
  "i hate myself",
  "im in love with a emo gorl 💅",
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
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip is: ${ipAddress}`);
      splashText();
    });
});
