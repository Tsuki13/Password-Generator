// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
 
}
//function that prompts user for criteria
function generatePassword(){
  var length1 = parseInt(prompt("Chose password length between 8-128 characters"));
  console.log(length1)
  if (length1 < 8 || length1 > 128) {
    alert("length needs to be between 8 & 128 characters!");
    return;
  }
  var characterOptions = [];  //array for confirmed criteria 

  var password1 = '';
  var upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerletters = 'abcdefghijklmnopqrstuvwxyz';
  var characters = '!@#$%^&*_-+?~,`';
  var numbers = '1234567890';

  //Add vars to characterOption if user confirms
  var lowercase = confirm("Do you want to use lowercase letters?");
  console.log(lowercase);
  if (lowercase == true){
    characterOptions.push(lowerletters);
  }
  var uppercase = confirm("Do you want to use uppercase letters?");
  console.log(uppercase);
  if (uppercase == true){
    characterOptions.push(upperletters);
  }
  var numeric = confirm("Do you want to use numbers?");
  console.log(numeric);
  if (numeric == true){
    characterOptions.push(numbers);
  }
  var specialchar = confirm("Do you want to use special characters?");
  console.log(specialchar);
  if (specialchar == true){
    characterOptions.push(characters);
  } 
  console.log(characterOptions)

//loop to pull random characters from characterOptions
  for (var i = 1; i <= length1; i++) {
    var randomNum = (Math.floor(Math.random()*characterOptions.length));
    var randomSelection = characterOptions[randomNum];

    var randomCharNum = Math.floor(Math.random()*randomSelection.length);
    var randomPick = randomSelection[randomCharNum];
    //add the random character to password
    password1 += randomPick;
    console.log(randomPick)
    
  }
  return password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);