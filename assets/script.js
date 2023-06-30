// Assignment code here
var lowerCase = []
var upperCase = []
var numbers = []
var specialChars = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PHASE 1 
// Create the variables and get the info we need
// What do we need to do? 
var availableChars = []
  //must PROMPT use for length of word (8-128)(use PROMPT)
  //confirm user for upper/lower case (yes no?) - use CONFIRM
    //if yes, add 'lowercase'
    //if yes, add 'uppercase'
  //confirm user if they'd like to use numbers
    //if yes, add 'numbers'
  //confirm user if they'd like to use special characters
    //if yes, add 'special characters'
  //Create a pool of available characters
    //available chars are added if user confirms 'YES'
    //available chars are NOT added if user confirms 'NO'

      /*Edge Cases - 
        charcter length less than 8 characters
        character length longer than 128 characters
        user does not confirm "YES" to pool of available characters
        user types out numbers... ex. "twelve" */

// PHASE 2
//What values do we need?
  //Create password variable that is an empty string
  //create a 'for' loop that runs '.length' number of times
  //in for loop, generate a single random character and append this character to our password
    //FOR LOOP STEPS
    //create a random number between 0 and length consisting of our available pool character types array depending on user selection
    //select 1 element from array of availablechars at index random number we generate
    //var newChar = avilablechars[randomNum]
    //append this new element to password variable