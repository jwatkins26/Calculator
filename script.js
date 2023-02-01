const keys = document.querySelector('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('display .output');

let input = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == 'clear') {
            input = '';
            displayInput.textContent = "";
            displayOutput.textContent = "";
        } else if (value == 'backspace') {
            input = input(0, -1);
            displayInput.textContent = input;
        } else if (value == '=') {
            let result = eval(input);

            displayOutput.textContent = result;
        } else if (value == 'para') {
            
        }
    })

    
}