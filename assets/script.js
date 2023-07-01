// Assignment code here
//Create an auto-generated array of numbers
//check if generated on chrome with console.log

var lowercaseArray = [];
var uppercaseArray = [];
var numbersArray= [];
var specialCharsArray = [];

//generate integer arrays to convert to characters using ascii value.
var asciiLowercaseArray=[];
    for(var i=97; i<123; i++) {
        asciiLowercaseArray.push(i);
    } 
    console.log(asciiLowercaseArray); 

//generate ascii value
var lowercaseArray = asciiLowercaseArray.map((i)=>String.fromCharCode(i)); 
console.log(lowercaseArray); 



var asciiUpperArray=[];
    for (var i=65; i<91; i++) {
        asciiUpperArray.push(i);
    }
    console.log(asciiUpperArray);

var uppercaseArray = asciiUpperArray.map((i)=>String.fromCharCode(i));

console.log(uppercaseArray);

var asciiNumberArray = []
    for (var i=48; i<58; i++) {
        asciiNumberArray.push(i)
    }
    console.log(asciiNumberArray);

var numbersArray = asciiNumberArray.map((i)=>String.fromCharCode(i));
console.log(numbersArray)

//Special Chars, created 4 different arrays and concated them, would've been easier to type them out tbh
var specialCharsArray = []
var asciiSpecialCharsArray1=[]
    for(var i=33;i<48;i++) {
        asciiSpecialCharsArray1.push(i);
    }
    console.log(asciiSpecialCharsArray1);

var asciiSpecialCharsArray2=[]
    for(var i=58;i<65;i++) {
        asciiSpecialCharsArray2.push(i);
    }
    console.log(asciiSpecialCharsArray2);

var asciiSpecialCharsArray3=[]
    for(var i=91; i<97; i++) {
    asciiSpecialCharsArray3.push(i);
    }
    console.log(asciiSpecialCharsArray3);

var asciiSpecialCharsArray4=[]
    for(var i=123; i<127; i++) {
    asciiSpecialCharsArray3.push(i);
    }
    console.log(asciiSpecialCharsArray4);

var asciiSpecialCharsArray = asciiSpecialCharsArray1.concat(
    asciiSpecialCharsArray2.concat(
        asciiSpecialCharsArray3.concat(
            asciiSpecialCharsArray4)));
            console.log(asciiSpecialCharsArray);

var specialCharsArray = asciiSpecialCharsArray.map((i)=>String.fromCharCode(i));

console.log(specialCharsArray);
            

/*Special Character Array - "((32) ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'])" - from console.log 

ascii table - https://www.w3schools.com/charsets/ref_html_ascii.asp*/




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
// Create the variables and get the info we need (Lines 1-82)

// What do we need to do? 
function writePassword() {
  
    var availableChars = []; 
    var lowercaseArray = [];
    var uppercaseArray = [];
    var numbersArray= [];
    var specialCharsArray = [];
    var passwordResult = '';
    //must PROMPT use for length of word (8-128)(use PROMPT)var validinput=  for (i=8; i<129; i++);


let userInput = window.prompt("Please enter a password length between 8-128 characters.");
        do {
            userInput = prompt("Please enter a password length between 8-128 characters.")
        }
        while (userInput<8 || userInput>128);

    
    //confirm user for upper/lower case (yes no?) - use CONFIRM
        //if yes, add 'lowercase' -- confirms
        //if yes, add 'uppercase'
    if (window.confirm("Would you like to include lowercase letters in your password?")) 
            {
                availableChars.push(lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)]);
                passwordResult += lowercaseArray;
                n--;
            }

    if (window.confirm("Would you like to include uppercase letters in your password?")) 
            {
                availableChars.push(uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)]);
                passwordResult += uppercaseArray;
                n--;
            }

        //confirm user if they'd like to use numbers
    if (window.confirm("Would you like to include numbers in your password?")) 
            {
                availableChars.push(numbersArray[Math.floor(Math.random()*numbersArray.length)]);
                password += numbersArray;
                n--;
            }
        
        //confirm user if they'd like to use special characters
    if (window.confirm("Would you like to include special letters in your password?")) 
            {
                availableChars.push(specialCharsArray[Math.floor(Math.random()*specialCharsArray.length)]);
                passwordResult += specialCharsArray;
                n--;
            }   
    console.log(availableChars);
        //confirms they select at least one option.
        if(passwordResult === '') {window.alert("please select 1 of the above.")}
    
        
    //Create a pool of available characters
        for (let i = 0; i < n; i++) {
            result.push(passwordResult[Math.floor(Math.random() * passwordResult.length)])
    }
}
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

