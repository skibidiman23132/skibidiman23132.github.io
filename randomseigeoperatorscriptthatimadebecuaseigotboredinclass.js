//https://stackoverflow.com/a/16147661

var link = document.getElementById('getNumberattacker','getNumberdefender'); // Gets the link
link.onclick = getNumberattacker; getNumberdefender; // Runs the function on click

function getNumberattacker() {
    var minNumber = 0; // The minimum number you want
    var maxNumber = 38; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#myNumber').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}

function getNumberdefender() {
    var minNumber = 0; // The minimum number you want
    var maxNumber = 37; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#Defender').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}