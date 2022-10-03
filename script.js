// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  const specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordOptions = {
    length: 0,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    special: false
  }

  passwordOptions.length = window.prompt("How many characters would you like your password to contain?");
  if (passwordOptions.length < 8 || passwordOptions.length > 128) {
    window.alert("Password must be between 8 and 128 characters");
    return;
  }

  passwordOptions.lowerCase = window.confirm("Click OK to confirm including lowercase characters");
  passwordOptions.upperCase = window.confirm("Click OK to confirm including uppercase characters");
  passwordOptions.numeric = window.confirm("Click OK to confirm including numeric characters");
  passwordOptions.special = window.confirm("Click OK to confirm including special characters");

  if (passwordOptions.lowerCase === false && passwordOptions.upperCase === false && passwordOptions.numeric === false && passwordOptions.special === false) {
    window.alert("You must select at least one character type");
    return;
  }

  var password = "";
  const availableChars = [];

  if (passwordOptions.lowerCase === true) {
    availableChars.push(lowerCase.split(""));
  }

  if (passwordOptions.upperCase === true) {
    availableChars.push(upperCase.split(""));
  }

  if (passwordOptions.numbers === true) {
    availableChars.push(numbers.split(""));
  }

  if (passwordOptions.special === true) {
    availableChars.push(specialChars.split(""));
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var randomChar = availableChars[Math.floor(Math.random() * availableChars.length)];
    password += randomChar[Math.floor(Math.random() * randomChar.length)];
  }

  return (password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
