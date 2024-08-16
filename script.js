document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else {
        switch (fromUnit) {
            case 'Celsius':
                if (toUnit === 'Fahrenheit') {
                    result = (temperature * 9/5) + 32;
                } else if (toUnit === 'Kelvin') {
                    result = temperature + 273.15;
                }
                break;
            case 'Fahrenheit':
                if (toUnit === 'Celsius') {
                    result = (temperature - 32) * 5/9;
                } else if (toUnit === 'Kelvin') {
                    result = ((temperature - 32) * 5/9) + 273.15;
                }
                break;
            case 'Kelvin':
                if (toUnit === 'Celsius') {
                    result = temperature - 273.15;
                } else if (toUnit === 'Fahrenheit') {
                    result = ((temperature - 273.15) * 9/5) + 32;
                }
                break;
        }
    }

    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
});