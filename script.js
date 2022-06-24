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
    collectLowerPref();
  } else if (passwordLength != null) {
    alert("Password must be at least 8 characters and no more than 128 characters. Please try again!");
    collectLength();
  }
  else {
    return;
  }
}

function collectLowerPref(){
  var lowerPref = prompt("Include lowercase letters (a-z)? Type y or n:");
  if ((lowerPref == "Y") || (lowerPref == "y")) {
    includeLower = true;
    collectUpperPref();
  } else if ((lowerPref == "N") || (lowerPref == "n")) {
    includeLower = false;
    collectUpperPref();
  } else if (lowerPref != null) {
    alert('I need a "Y" or "N" here; please try again.');
    collectLowerPref();
  } else {
    console.log("aaaarrrggghhh");
  }
}

function collectUpperPref() {
  var upperPref = prompt("Include uppercase letters (A-Z)? Type y or n:");
  if ((upperPref == "Y") || (upperPref == "y")) {
    includeUpper = true;
    collectNumberPref();
  } else if ((upperPref == "N") || (upperPref == "n")) {
    includeUpper = false;
    collectNumberPref();
  } else if (upperPref != null) {
    alert('I need a "Y" or "N" here; please try again.');
    collectUpperPref();
  } else {
    console.log("AAAARRRGGGHHH");
  }
}

function collectNumberPref () {
  var numberPref = prompt("Include numbers (0-9)? Type y or n:");
  if ((numberPref == "Y") || (numberPref == "y")) {
    includeNumbers = true;
    collectSpecialPref();
  } else if ((numberPref == "N") || (numberPref == "n")) {
    includeNumbers = false;
    collectSpecialPref();
  } else if (numberPref != null) {
    alert('I need a "Y" or "N" here; please try again.');
    collectNumberPref();
  } else {
    console.log("AAAARRRGGGHHH");
  }
}

function collectSpecialPref () {
  var specialPref = prompt("Include special characters? Type y or n:");
  if ((specialPref == "Y") || (specialPref == "y")) {
    includeSpecials = true;
    validateUserChoices();
  } else if ((specialPref == "N") || (specialPref == "n")) {
    includeSpecials = false;
    validateUserChoices();
  } else if (specialPref != null) {
    alert('I need a "Y" or "N" here; please try again.');
    collectSpecialPref();
  } else {
    console.log("AAAARRRGGGHHH");
  }
}

function validateUserChoices(){
  if (includeLower || includeUpper || includeNumbers || includeSpecials) {
    buildPassword();
  } else {
    alert('Thank you for your interest in generating a secure password. Unfortunately, as you do not seem to want any characters in your password, we must regretfully decline your request. We invite you to request another secure password when you are ready to provide sensible criteria.');
  }
}

function buildPassword(){
  console.log('Now building the password...');
  var selectedCharSet = "";
  if (includeLower) {
    selectedCharSet += lowers.join("");
  }
  if (includeUpper) {
    selectedCharSet += uppers.join("");
  }
  if (includeNumbers) {
    selectedCharSet += numbers.join("");
  }
  if (includeSpecials) {
    selectedCharSet += specials.join("");
  }
  console.log(selectedCharSet);
  var passwordArray = [];
  // initialize password array with desired length of password. Necessary so we can add characters of different types in random positions.
  for (let i = 0; i < pwLength; i++) {
    passwordArray.push("");
  }



  if (includeLower) {
    passwordArray[Math.floor(Math.random() * pwLength)] = lowers[Math.floor(Math.random() * lowers.length)];
    console.log(passwordArray);
  }
  if (includeUpper) {
    passwordArray.push(uppers[Math.floor(Math.random() * uppers.length)]);
    console.log(passwordArray);
  }
  if (includeNumbers) {
    passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(passwordArray);
  }
  if (includeUpper) {
    passwordArray.push(specials[Math.floor(Math.random() * specials.length)]);
    console.log(passwordArray);
  }

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
