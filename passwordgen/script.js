    
    //CHARACTER INDEX//

var characterLength = 8;
var choiceArr = [];
var specialCharArr = ['!','@','#','$','%','^','&',')','_','~',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

    //BUTTON FUNCTIONS//

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();
  

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    passwordText.value = "";
}
}


function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  }
  return password;
}

//PROMPTS//

function getPrompts() {
  choiceArr = [];
 characterLength = parseInt(prompt("How many characters do you want? 8-128"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please try again.");
    return false;
  }
  
  if (confirm("Would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like to include special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like to include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}


















// Get references to the #generate element
// Write password to the #password input
// Add event listener to generate button



