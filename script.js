const text = document.getElementById('text');
const key = document.getElementById('key');
const submitBtn = document.getElementById('submit');

function keyReplacement(){
    let originalText = text.value;
    let keyWord = key.value
    let removedSpacesText = originalText.split(" ").join("");
    console.log(removedSpacesText)
    let keyReplace = keyWord.repeat(removedSpacesText.length); 
    console.log(keyReplace)
    let textLength = removedSpacesText.length
    let result = keyReplace.slice(0, textLength)

    return result
}

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) {
        result += (code - 65) + " ";
      } 
    }
  
    return result
  }


 


  submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    console.log(keyReplacement())
    console.log(alphabetPosition(key.value));
  });


  //get elements - done

  //change the letters into numbers as per the position in alphabet done

// make the key replace every letter of the text 
  
//add numbers of both text and key modulus 26 

