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


//Upper Case Array
var asciiUpperArray=[];
    for (var i=65; i<91; i++) {
        asciiUpperArray.push(i);
    }
    console.log(asciiUpperArray);

var uppercaseArray = asciiUpperArray.map((i)=>String.fromCharCode(i));
console.log(uppercaseArray);

//Numbers Array
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
    asciiSpecialCharsArray4.push(i);
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

//check available chars
var availableChars = lowercaseArray.concat(uppercaseArray.concat(numbersArray.concat(specialCharsArray)))
console.log(availableChars);


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
    //must PROMPT use for length of word (8-128)(use PROMPT)var validinput=  for (i=8; i<129; i++)

function generatePassword() {
    let passwordResult = [];
    let addChars = '';
    let userInput = window.prompt("Please enter a password length between 8-128 characters.")

    if(userInput < 8 || userInput > 128) {
            window.alert("Please enter a value between 8-128");
    } else {  
    //confirm user for upper/lower/number/special (yes no?) - use CONFIRM
        //if yes, add 'lowercase' -- confirm
            if (window.confirm("Would you like to include lowercase letters in your password?")) {
                    
                    passwordResult.push(lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)]);
                    addChars += lowercaseArray;
            }

                        //if yes, add 'uppercase' -- confirm
            if (window.confirm("Would you like to include uppercase letters in your password?")) {
                            
                    passwordResult.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
                    addChars += uppercaseArray;
            }

                        //confirm user if they'd like to use numbers
            if (window.confirm("Would you like to include numbers in your password?")) {
                    passwordResult.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
                    addChars += numbersArray;
            }     
                        //confirm user if they'd like to use special characters
            if (window.confirm("Would you like to include special letters in your password?")) {
                    passwordResult.push(specialCharsArray[Math.floor(Math.random()*specialCharsArray.length)]);
                    addChars += specialCharsArray;
            }
                        //make sure password correct length
            for (let i=4; i < userInput; i++){
                passwordResult.push(addChars[Math.floor(Math.random()*addChars.length)]);
            }  
            passwordResult = passwordResult.join('');
            return passwordResult;
    }  
}
