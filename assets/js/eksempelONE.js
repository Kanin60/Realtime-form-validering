/*EKSEMPEL 1*/
const inputElement = document.getElementById('input-field');
// let isInputValid = false;
    
    inputElement.addEventListener('input', function() {
      const inputValue = inputElement.value.trim();
      const regex = /^[a-zA-ZæÆøØåÅ -]+$/;
      
      if (inputValue === '' || !regex.test(inputValue)) {
        inputElement.classList.remove('valid-input');
        inputElement.classList.add('invalid-input');
        // isInputValid = false;
        return;
      }
      
      inputElement.classList.remove('invalid-input');
      inputElement.classList.add('valid-input');
      // isInputValid = true;
    });