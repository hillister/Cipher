const text = document.getElementById('text');
const key = document.getElementById('key');
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


 


  submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    let textValue = text.value;
    let keyWord = key.value;
    let finalText = textValue.split(" ").join("");

    function keyReplacement(){
        let keyReplace = keyWord.repeat(finalText.length); 
        let textLength = finalText.length
        let result = keyReplace.slice(0, textLength)
    
        return result
    }

    console.log(alphabetPosition(finalText));
    console.log(alphabetPosition(keyReplacement()));

    const string1 = alphabetPosition(finalText)
    const array1 = string1.split(" ").map(Number);

    const string2 = alphabetPosition(keyReplacement())
    const array2 = string2.split(" ").map(Number);

    const mod = 26;
    console.log(array1);
    console.log(array2);

    const newArray = array1.map((num, index) => (num + array2[index]) % mod);
    console.log(newArray);
  });


  //get elements - done

  //change the letters into numbers as per the position in alphabet done

// make the key replace every letter of the text done

// remove punctuation
  
//add numbers of both text and key modulus 26 

