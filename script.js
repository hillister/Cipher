const text = document.getElementById('text');
const key = document.getElementById('key');
const submitBtn = document.getElementById('submit');

function keyReplacement(text){

}

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) {
        result += (code - 65) + " ";
      } 
    }
  
    return result
  }


 


  submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    console.log(key.value)
    console.log(text.value)

    console.log(alphabetPosition(key.value));
  });


  //get elements - done

  //change the letters into numbers as per the position in alphabet done

// make the key replace every letter of the text
  
//add numbers of both text and key modulus 26

