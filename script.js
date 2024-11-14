const text = document.getElementById('text');
const key = document.getElementById('keyInput');
const submitBtn = document.getElementById('submit');



function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) {
        result += (code - 65) + " ";
      } 
    }
  
    return result.slice(0, result.length - 1);
}

function changeNumberToLetter(numbers) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    let letter = String.fromCharCode(numbers[i] + 65)
      result += letter;
  }

  return result;
}

  submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    let textValue = text.value;
    let keyWord = key.value;
    let finalText = textValue.split(" ").join("");

    function keyReplacement(){
        let keyReplace = keyWord.repeat(Math.ceil(finalText.length / keyWord.length)); 
        let textLength = finalText.length
        let result = keyReplace.slice(0, textLength)
    
        return result
    }

    const string1 = alphabetPosition(finalText)
    const array1 = string1.split(" ").map(Number);

    const string2 = alphabetPosition(keyReplacement())
    const array2 = string2.split(" ").map(Number);

    const mod = 26;

    const newArray = array1.map((num, index) => (num + array2[index]) % mod);

    console.log(changeNumberToLetter(newArray));
    let encryptedMessage = document.getElementById("encrypted-text");
    encryptedMessage.textContent = changeNumberToLetter(newArray)
  });



