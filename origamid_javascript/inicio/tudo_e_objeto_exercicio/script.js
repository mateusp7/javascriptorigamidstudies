// Nomeie 3 propriedades das String
var nome = "Mateus";

nome.charAt(0);
nome.slice(0, 1);
nome.length;

// Nomeie 5 propriedades do DOM

var btn = document.querySelector('.btn');
btn.addEventListener

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}