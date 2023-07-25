// Assignment code here
//Create an auto-generated array of numbers
//check if generated on chrome with console.log

var lowercaseArray = ["a", "b", "c", "d", "e"];
var uppercaseArray = ["A", "B", "C", "D", "E"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharsArray = [  "!",'"',"#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordResult = [];
  let addChars = [];
  let userInput = window.prompt(
    "Please enter a password length between 8-128 characters."
  );

  if (userInput < 8 || userInput > 128) {
    window.alert("Please enter a value between 8-128");
    return null;
  }
  var lowercaseConfirm = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var uppercaseConfirm = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var numConfirm = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var specialConfirm = window.confirm(
    "Would you like to include special letters in your password?"
  );
  if (
    !lowercaseConfirm &&
    !uppercaseConfirm &&
    !numConfirm &&
    !specialConfirm
  ) {
    alert("please choose atleast one option!");
    return null;
  }
  if (lowercaseConfirm) {
    addChars = addChars.concat(lowercaseArray);
  }
  if (uppercaseConfirm) {
    addChars = addChars.concat(uppercaseArray);
  }
  if (numConfirm) {
    addChars = addChars.concat(numbersArray);
  }
  if (specialConfirm) {
    addChars = addChars.concat(specialCharsArray);
  }
  for (let i = 0; i < userInput; i++) {
    var randomChar =
      addChars[Math.floor(Math.random(addChars.length) * addChars.length)];

    passwordResult.push(randomChar);
  }
  return passwordResult.join("");
}
generateBtn.addEventListener("click", writePassword);