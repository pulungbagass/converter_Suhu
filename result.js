// Ambil elemen HTML
const temperatureInput = document.getElementById("temperatureInput");
const unitInput = document.getElementById("unitInput");
const decimalInput = document.getElementById("decimalInput");
const resultCelsius = document.querySelector(".Celcius span");
const resultFahrenheit = document.querySelector(".Fahrenheit span");
const resultReamur = document.querySelector(".Reamur span");
const resultKelvin = document.querySelector(".Kelvin span");

// Fungsi konversi suhu
function convertTemperature(value, fromUnit, decimalPlaces) {
    let celsius;

    // Konversi ke Celsius sebagai basis
    switch (fromUnit) {
        case "celsius":
            celsius = value;
            break;
        case "fahrenheit":
            celsius = (value - 32) * (5 / 9);
            break;
        case "reamur":
            celsius = value * (5 / 4);
            break;
        case "kelvin":
            celsius = value - 273.15;
            break;
        default:
            throw new Error("Invalid unit");
    }

    // Konversi dari Celsius ke unit lain
    const fahrenheit = (celsius * (9 / 5) + 32).toFixed(decimalPlaces);
    const reamur = (celsius * (4 / 5)).toFixed(decimalPlaces);
    const kelvin = (celsius + 273.15).toFixed(decimalPlaces);
    const roundedCelsius = celsius.toFixed(decimalPlaces);

    return { celsius: roundedCelsius, fahrenheit, reamur, kelvin };
}

// Fungsi untuk memperbarui hasil
function updateResults() {
    const value = parseFloat(temperatureInput.value) || 0; // Ambil nilai suhu
    const unit = unitInput.value; // Unit aktif
    const decimalPlaces = parseInt(decimalInput.value) || 2; // Jumlah angka desimal

    try {
        // Kalkulasi hasil konversi
        const results = convertTemperature(value, unit, decimalPlaces);

        // Update hasil ke masing-masing div
        resultCelsius.textContent = `Celsius: ${results.celsius}`;
        resultFahrenheit.textContent = `Fahrenheit: ${results.fahrenheit}`;
        resultReamur.textContent = `Reamur: ${results.reamur}`;
        resultKelvin.textContent = `Kelvin: ${results.kelvin}`;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Tambahkan event listener untuk masing-masing input
temperatureInput.addEventListener("input", updateResults);
unitInput.addEventListener("change", updateResults);
decimalInput.addEventListener("input", updateResults);
