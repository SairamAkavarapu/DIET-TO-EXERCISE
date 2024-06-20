// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');

    const form = document.getElementById('bmiForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        if (isNaN(height) || isNaN(weight)) {
            alert('Please enter valid numbers for height and weight.');
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    });
});