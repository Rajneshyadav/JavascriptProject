// Stroing Data
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+/";

//Selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

function getRandomData(dataSet) {
  const random = Math.floor(Math.random() * dataSet.length);
  return dataSet[random];
}

 function generatePassword(password = " ") {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
      if (totalChar.value > password.length ) {
            return generatePassword(password)
      }
    passBox.innerText = truncateString(password, totalChar.value)
 }
 
 function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str ;
    }
}
document.getElementById("btn").addEventListener( "click" ,
    function  ( ) {
        generatePassword()
    }
)
generatePassword()
 
