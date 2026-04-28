const inputCM = document.getElementById('input-cm');
const inputMM = document.getElementById('input-mm');
const btnReset = document.getElementById('btn-reset');

// CM → MM
inputCM.addEventListener('input', () => {
    const value = parseFloat(inputCM.value);
    if (inputCM.value === '' || isNaN(value)) {
        inputMM.value = '';
    } else {
        inputMM.value = (value * 10).toFixed(4).replace(/\.?0+$/, '');
    }
});

// MM → CM
inputMM.addEventListener('input', () => {
    const value = parseFloat(inputMM.value);
    if (inputMM.value === '' || isNaN(value)) {
        inputCM.value = '';
    } else {
        inputCM.value = (value / 10).toFixed(4).replace(/\.?0+$/, '');
    }
});

// Reset
btnReset.addEventListener('click', () => {
    inputCM.value = '';
    inputMM.value = '';
    inputCM.focus();
});