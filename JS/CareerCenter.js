var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Function to generate a random character from a given string
function getRandomChar(charString) {
  return charString.charAt(Math.floor(Math.random() * charString.length));
}

// Function to generate a hard password
function generatePassword() {
  var passwordLength = 12; // Change this to set desired password length
  var password = '';
  
  // Loop to generate password characters
  for (var i = 0; i < passwordLength; i++) {
    var charSet = '';
    
    // Ensure at least one character from each character set
    if (i === 0) {
      charSet = uppercaseChars;
    } else if (i === 1) {
      charSet = lowercaseChars;
    } else if (i === 2) {
      charSet = numericChars;
    } else if (i === 3) {
      charSet = specialChars;
    } else {
      // Randomly select character set after the first four characters
      var rand = Math.floor(Math.random() * 3);
      if (rand === 0) {
        charSet = uppercaseChars;
      } else if (rand === 1) {
        charSet = lowercaseChars;
      } else if (rand === 2) {
        charSet = numericChars;
      }
    }
    
    // Append a random character from the selected character set
    password += getRandomChar(charSet);
  }
  
  return password;
}

// Bind click event to generate password button
$('#generateBtn').on('click', function() {
  var password = generatePassword();
  $('#passwordField').val(password);
});

// Bind click event to copy button
$('#copyBtn').on('click', function() {
  var passwordField = document.getElementById('passwordField');
  passwordField.select();
  document.execCommand('copy');
  $('#copyBtn').append('<img src="img/.png" height="15px">')
});