const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

generateBtn.addEventListener('click', () => {
  const length = document.getElementById('length').value;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasLower = document.getElementById('lowercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  const password = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
  passwordField.value = password;
});

copyBtn.addEventListener('click', () => {
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});

function generatePassword(length, upper, lower, number, symbol) {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  let charSet = '';
  if (upper) charSet += upperChars;
  if (lower) charSet += lowerChars;
  if (number) charSet += numberChars;
  if (symbol) charSet += symbolChars;

  if (charSet.length === 0) return 'Select at least 1 option';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randIndex];
  }
  return password;
}
