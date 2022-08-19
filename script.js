// Assignment Code
var generateBtn = document.querySelector("#generate");

lowerAl = ("abcdefghijklmnopqrstuvwxyz");
upperAl = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
nums = ("0123456789");
symbols = ("!@#$%^&*()");

var options;


// Add event listener to generate button
generateBtn.addEventListener("click", function()  {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});

// popup that confirm requierments for password
function generatePassword() {
  var lengthCheck = parseInt(prompt("How long would you like this password? "));
  if (!lengthCheck) {
    alert("This needs a value");
  } else if (lengthCheck < 8 || lengthCheck > 128 ) {
    lengthCheck = alert("You must choose between 8 and 128");
  } else {
  upperCheck = confirm("Would you like uppercase letters? ");

  lowerCheck = confirm("Would you like lowercase letters? ");

  numberCheck = confirm("Would you like numbers?");

  symbolecheck = confirm("Would you like symboles? ");
  };

  if (!upperCheck && !lowerCheck && !symbolecheck && !numberCheck) {
    options = alert("Such a password dosnt exist. ")
  } // all true
    
  else if (upperCheck && lowerCheck && symbolecheck && numberCheck) {
      options = lowerAl.concat(upperAl, nums, symbols)
  } // 3 true
    
  else if (upperCheck && lowerCheck && symbolecheck) {
      options = lowerAl.concat(upperAl, symbols)
  } 
  else if (upperCheck && lowerCheck && numberCheck) {
    options = lowerAl.concat(upperAl, nums)
  }  
  else if (lowerCheck && numberCheck && symbolecheck) {
    options = lowerAl.concat(nums, symbols)
  } 
  else if (upperCheck && numberCheck && symbolecheck) {
    options = nums.concat(upperAl, symbols)
  } // 2 true 
    
  else if (upperCheck && lowerCheck) {
    options = lowerAl.concat(upperAl)
  } 
  else if (numberCheck && lowerCheck) {
    options = lowerAl.concat(nums)
  } 
  else if (symbols && lowerCheck) {
    options = lowerAl.concat(symbols)
  } 
  else if (upperCheck && numberCheck) {
    options = nums.concat(upperAl)
  } 
  else if (upperCheck && symbols) {
    options = symbols.concat(upperAl)
  } 
  else if (symbolecheck && numberCheck) {
    options = nums.concat(symbols)
  } // one true
    
  else if (lowerCheck) {
    options = lowerAl 
  } 
  else if (upperCheck) {
    options = upperAl 
  } 
  else if (symbolecheck) {
    options = symbols 
  } 
  else if (numberCheck) {
    options = nums 
  }

var password = [];

for (var i = 0; i < lengthCheck; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
}
  var pass = password.join("");
  userInPut(pass);
  return pass;

  function userInPut(pass) {
    document.getElementById("password").textContent = pass;
  }
};