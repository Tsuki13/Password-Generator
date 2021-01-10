// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
}


//function for user's criteria  

function generatePassword(){
  var length = prompt("Chose password length between 8-128 characters");
  console.log(length)
  if (length < 8 || length > 128) {
    alert("length needs to be between 8 & 128 characters!");
    return;
  }
   var lowercase = confirm("Do you want to use lowercase letters?");
  console.log(lowercase)
  var uppercase = confirm("Do you want to use uppercase letters?");
  console.log(uppercase)
  var numeric = confirm("Do you want to use numbers?");
  console.log(numeric)
  var specialchar = confirm("Do you want to use special characters?");
  console.log(specialchar)
  var password = ' ';
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +'abcdefghijklmnopqrstuvwxyz';

//loop returns password without prompts
  for (i = 1; i <=8; i++){
    var char = Math.floor(Math.random()
        *letters.length +1);
        password += letters.charAt(char)
  }
  return password;
}
var characters = ["!,@,#,$,%,^,&,*,_,-,+,?,~,`"]
var numbers = ["1,2,3,4,5,6,7,8,9,0"]



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);