var attackerLink = document.getElementById('getNumberattacker');
var defenderLink = document.getElementById('getNumberdefender');

attackerLink.onclick = getNumberattacker;
defenderLink.onclick = getNumberdefender;

function getNumberattacker() {
    var minNumber = 0;
    var maxNumber = 38;
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    document.getElementById('Attacker').innerHTML = randomnumber;
    return false;
}

function getNumberdefender() {
    var minNumber = 0;
    var maxNumber = 37;
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    document.getElementById('Defender').innerHTML = randomnumber;
    return false;
}
