const form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
});


const myInputField = document.getElementById('text');
const myInputSvar = document.getElementById('svar');

myInputField.addEventListener('keyup', (e)=>{
    let navne = myInputField.value;

    switch (navne){
        case "bo":
        case "nicklas":
        case "morten":
        case "simon":
        case "mads":
        case "mikkel":
        case "alexder":
        case "rasmus":
        case "issac":
        case "amina":
        case "cæcilie":
        case "katrine":
        case "kamilla":
        case "patrick":
        case "emil":
            myInputSvar.innerText = "Ja sørme!";
            myInputField.style.background = "linear-gradient(100deg, green, white)";  
        break;
        default:
            myInputSvar.innerText = "Nej for Søren!";
            myInputField.style.background = "linear-gradient(100deg, red, white)";  
        break; 
        }
});
