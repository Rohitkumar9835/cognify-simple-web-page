document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const colorBtn = document.getElementById('colorBtn'); // Added color button

    // Task 2: Calculate sum of two numbers
    calculateBtn.addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const result = num1 + num2;
        alert('The sum is: ' + result);
    });

    // Task: Change button color
    colorBtn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
        colorBtn.style.backgroundColor = randomColor; // Apply random color to the button
    });
});