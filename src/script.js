// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordLength = prompt(
    "Enter the desired password length (between 8 and 128 characters):"
  );
  passwordLength = Number(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return null;
  }

  var includeSpecialCharacters = confirm("Include special characters?");
  var includeNumericCharacters = confirm("Include numeric characters?");
  var includeLowerCasedCharacters = confirm("Include lowercase characters?");
  var includeUpperCasedCharacters = confirm("Include uppercase characters?");

  if (
    !(
      includeSpecialCharacters ||
      includeNumericCharacters ||
      includeLowerCasedCharacters ||
      includeUpperCasedCharacters
    )
  ) {
    alert("You must select at least one type of characters.");
    return null;
  }

  return {
    passwordLength: passwordLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return ""; // If no valid options, return an empty string
  }

  var availableCharacters = [];
  var generatedPassword = "";

  if (options.includeSpecialCharacters) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  if (options.includeNumericCharacters) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }

  if (options.includeLowerCasedCharacters) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }

  if (options.includeUpperCasedCharacters) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }

  for (var i = 0; i < options.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    var randomCharacter = availableCharacters[randomIndex];
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}

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
