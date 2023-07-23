// Assignment Code
var generateBtn = document.querySelector("#generate");//this is the button on the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//this is the function that generates the password our work
  var passwordText = document.querySelector("#password");//this is the text area on the page where the password will be displayed

  passwordText.value = password;//this is where we display the password on the page in the text area

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//this is the event listener that listens for the click on the button and then calls the writePassword function

//this is the function that generates the password our work
function generatePassword(){
  //define the character sets
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  //prompt for pass criteria, remebmer confirm returns true or false if the user clicks ok or cancel
  const includeLowerCaseChars = confirm("Include lowercase characters?");
  const includeUpperCaseChars = confirm("Include uppercase characters?");
  const includeNumericChars = confirm("Include numeric characters?");
  const includeSpecialChars = confirm("Include special characters?");
  //console.log(includeLowerCaseChars, includeUpperCaseChars, includeNumericChars, includeSpecialChars);

  //validate that at least one character type was selected,here we use the logical and operator to check if all the variables are false
  //and remeber that the ! operator is the logical not operator so if all the variables are false then the if statement will be true
  //and we will display the alert if all the variables are false because we want at least one to be true
  if(
    !includeLowerCaseChars &&//this is the logical not operator so if the variable is false then the if statement will be true
    !includeUpperCaseChars &&
    !includeNumericChars &&
    !includeSpecialChars
  ){
    alert("You must select at least one character type!");
    return '';
  }

  //prompt for pass length
  var passwordLength;//a variable to hold the password length
  while(true){
    passwordLength = parseInt(prompt("How many characters should the password be? (8-128)"),10);
    // if the passwordLength is not a number OR is less than 8 OR is greater than 128 then display an alert
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      alert("Password must be between 8 and 128 characters!");
    }else{
      break;
    }
  }

  //create the password
  var charatersSet = "";
  if(includeLowerCaseChars===true){
    charatersSet += lowerCase;
  }//remember that the += operator is the same as charatersSet = charatersSet + lowerCase;
  //console.log(charatersSet)
  if(includeUpperCaseChars===true){
    charatersSet += upperCase;
  }
  //console.log(charatersSet)
  if(includeNumericChars===true){
    charatersSet += numericChars;
  }
  //console.log(charatersSet)
  if(includeSpecialChars===true){
    charatersSet += specialChars;
  }
  //console.log(charatersSet)

  //finally create the password with the selected characters and lenght
  var password = "";
  for(var i=0; i<passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * charatersSet.length);//this is the random number between 0 and the length of the character set
    password += charatersSet[randomIndex];//this is the character at the random index, remeber that strings are like arrays
    //password = password +charatersSet[randomIndex]; this is the same as above
  }
  return password;

}