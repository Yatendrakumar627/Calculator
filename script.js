document.addEventListener('DOMContentLoaded', function () {
     // Event listener for when the DOM content is loaded
    const screen = document.querySelector('.screen');
    let currentInput = '';
    let memory = '';
    let operator = '';

// Event listeners for number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', function () {
            currentInput += button.textContent;
            screen.value = currentInput;
        });
    });

// Event listeners for operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', function () {
        // Handle operator button clicks
            if (currentInput !== '') {
                if (memory !== '') {
                    calculate();
                } else {
                    memory = currentInput;
                }
                operator = button.textContent;
                currentInput = '';
            }
        });
    });

    // Event listener for clear button
    document.querySelector('.clear').addEventListener('click', function () {
    // Handle clear button click
        clear();
    });

     // Event listener for calculate button
    document.querySelector('.calculate').addEventListener('click', function () {
        // Handle calculate button click
        if (currentInput !== '' && memory !== '') {
            calculate();
        }
    });

    // Functions for calculations and screen updates
    function calculate() {
        // Perform calculations based on the selected operator
        let result = '';
        const num1 = parseFloat(memory);
        const num2 = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        screen.value = result;
        memory = result.toString();
        currentInput = '';
    }

    // Clear the input and memory
    function clear() {
        currentInput = '';
        memory = '';
        operator = '';
        screen.value = '';
    }
});
