// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
 var password = '';
}



//function that prompts user for criteria
function generatePassword(){
  var length1 = parseInt(prompt("Chose password length between 8-128 characters"));
  console.log(length1)
  if (length1 < 8 || length1 > 128) {
    alert("length needs to be between 8 & 128 characters!");
    return;
  }
  //array for confirmed criteria 
  var inputVal = []; 

  var upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerletters = 'abcdefghijklmnopqrstuvwxyz';
  var characters = '!@#$%^&*_-+?~,`';
  var numbers = '1234567890';

  //Add var to inputVal array if user confirms
  var lowercase = confirm("Do you want to use lowercase letters?");
  console.log(lowercase);
  if (lowercase == true){
    inputVal.push(lowerletters);
  }
  var uppercase = confirm("Do you want to use uppercase letters?");
  console.log(uppercase);
  if (uppercase == true){
    inputVal.push(upperletters);
  }
  var numeric = confirm("Do you want to use numbers?");
  console.log(numeric);
  if (numeric == true){
    inputVal.push(numbers);
  }
  var specialchar = confirm("Do you want to use special characters?");
  console.log(specialchar);
  if (specialchar == true){
    inputVal.push(characters);
  } 
  console.log(inputVal)

//loop to pull random characters from inputVal array
  for (var i = 1; i <= length1; i++) {
    var inputChoices = (Math.floor(Math.random() *inputVal.length));
    var randomSelectionarr = inputVal[inputChoices];
    var lengthbyuser = Math.floor(Math.random() *randomSelectionarr.length);
    var randomPick = randomSelectionarr[lengthbyuser];
    password += randomPick;
 
    console.log(randomPick)
  }


  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);