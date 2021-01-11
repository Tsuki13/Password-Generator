// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
 var password = ' ';
}


//array for confirmed criteria 
var inputVal = []; 
//function that prompts user for criteria
function generatePassword(){
  var length = prompt("Chose password length between 8-128 characters");
  console.log(length)
  if (length < 8 || length > 128) {
    alert("length needs to be between 8 & 128 characters!");
    return;
  }
  var upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerletters = 'abcdefghijklmnopqrstuvwxyz';
  var characters = ["!,@,#,$,%,^,&,*,_,-,+,?,~,`"]
  var numbers = ["1,2,3,4,5,6,7,8,9,0"]
  //Add to inputVal array if user confirms
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

    console.log(inputVal)
  } 
  
}
//function randomPassword(){

//}
  
 

//loop returns password without prompts - starter code
/*  for (i = 1; i <=8; i++){
    var char = Math.floor(Math.random()
        *letters.length +1);
        password += letters.charAt(char)
  }
  return password;*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);