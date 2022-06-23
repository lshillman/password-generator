// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specials = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

console.log(specials);

var pwLength;
var includeLower;
var includeUpper;
var includeNumbers;
var includeSpecials;

function collectLength() { // prompts the user to enter a length, then checks to see if it's valid, returns the input if so, re-prompts if not
  var passwordLength = prompt("How long should your password be? Please type a number between 8 and 128:");
  console.log("length is " + passwordLength);
  if ((passwordLength > 7) && (passwordLength < 129)) {
    pwLength = passwordLength;
    collectUpperPref();
  } else if (passwordLength != null) {
    alert("Password must be at least 8 characters and no more than 128 characters. Please try again!");
    collectLength();
  }
  else {
    return;
  }
}

function collectLowerPref(){
  // TODO write this function
}

function collectUpperPref() {
  var upperPref = prompt("Include uppercase letters (A-Z)? Type y or n:");
  if ((upperPref == "Y") || (upperPref == "N") || (upperPref == "y") || (upperPref == "n")) {
    console.log(upperPref);
  } else if (upperPref != null) {
    alert('I need a "Y" or "N" here; please try again.');
    collectUpperPref();
  } else {
    console.log("AAAARRRGGGHHH");
  }
}

function collectNumberPref () {
  // TODO write this
}

function collectSpecialPref () {
  // TODO write this
}

function generatePassword() {
  collectLength();

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
