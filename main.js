window.addEventListener("keydown", function (e) {
  if (e.key === "q" || e.key === "Q") {
    // Change the favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'https://github.com/Nintendoboi222/nintendoboi222.github.io/blob/36cb79dd997be2230721ee856d79abc36d4b0d4b/gmail-logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
});



document.onkeydown = function (e) {
  if (e.key === "Enter") {
      splashText();
  }
};document.querySelector('button').addEventListener('click', () => {
  while (true) {}
});

var says = [
  "yes,i did steal this from railing",
  "shoutout to IdTech",
  "DMCA, no more minecraft :(",
  "hello australians",
  "Updated once in a while",
  "2.2k ish GOOGLE CLICKS RAHHHHHH",
  "parents aprove(trust)",
  "Press the weird squiggly line",
  "The Snack That Smiles Back",
  "GoldFish",
  "mersker mersker",
  "papa louie better be paying me double for the amount of work im doing",
  "erm what the sigma",
  "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
  "press the enter key",
  "if you have a game that you have made and would like to add, email me(in the requests page)",
  "just bc i added gambling; if you have any problems with gambling, call 1-800-426-2537",
  "Fight me(pls dont)",
  "har har har har harhahrharhahrahrhhrahrhrhharh",
  "I like sleep",
  "mb for not adding more games",
  "U a Bot",
  "Fish Tacos",
  "Now serving 100 ish games🦖",
  "yes its open-source, dummy",
  "papas pizzaaaaaaaaaaaa",
  "IM NOT ADDING SKBITY TOLIET",
  "what do i add?",
  "*you're* 👆🤓",
  "optimized by ChatGPT",
  "Theres a proxy site, i think",
  "TACOS",
  "whats up brothers",
  "is this websites trash?", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH",
  "ZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzz",
  "Special teams, speacial plays, speacial players",
  "ALEXXXXXXX",
  "ty willard wildcats and twality join my discord - iCryWhenAngelsDeserve2Die",
  "skibidi skuza",
  "SUB TO FTTREDDIE",
  "SUB TO BILLYAVIATION",
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
