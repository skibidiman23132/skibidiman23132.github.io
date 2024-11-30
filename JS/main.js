document.onkeydown = function (e) {
  if (e.key === "Enter") {
    splashText();
  }
};

var says = [];
fetch('https://raw.githubusercontent.com/Nintendoboi222/games/refs/heads/main/says.txt')
  .then(response => response.text())
  .then(text => {
    says = text.split('\n').filter(line => line.trim() !== '');
    splashText();
  });

function splashText() {
  if (says.length > 0) {
    document.querySelector(".Index-SplashText").innerHTML =
      says[Math.floor(Math.random() * says.length)];
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();
  
  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
        proxylocation = data.YourFuckingLocation;
        ipAddress = data.YourFuckingIPAddress;
        isp = data.YourFuckingISP;
        says.push(`Sending missile to ${proxylocation}😈`);
        says.push(`umm your ip is ${ipAddress}`);
        says.push(`nice isp, "${isp}"`);
        splashText();
    });
  fetch("https://discord.com/api/guilds/1288933489818865784/widget.json")
    .then((response) => response.json())
    .then((data) => {
      invite = data.instant_invite;
      says.push(`Join? "${invite}"`);
      splashText();
    });
});
