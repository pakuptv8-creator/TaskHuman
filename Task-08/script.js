const xInput = document.getElementById('x-offset');
const yInput = document.getElementById('y-offset');
const spreadInput = document.getElementById('spread');
const blurInput = document.getElementById('blur');
const colorInput = document.getElementById('color');
const previewBox = document.getElementById('preview-box');
const shadowCode = document.getElementById('shadow-code');
const copyBtn = document.getElementById('copy-btn');

const xVal = document.getElementById('x-val');
const yVal = document.getElementById('y-val');
const spreadVal = document.getElementById('spread-val');
const blurVal = document.getElementById('blur-val');

function updateShadow() {
    const x = xInput.value;
    const y = yInput.value;
    const spread = spreadInput.value;
    const blur = blurInput.value;
    const color = colorInput.value;

    const shadowStr = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    previewBox.style.boxShadow = shadowStr;
    shadowCode.textContent = `box-shadow: ${shadowStr};`;

    xVal.textContent = x + 'px';
    yVal.textContent = y + 'px';
    spreadVal.textContent = spread + 'px';
    blurVal.textContent = blur + 'px';

    // Update range input colors
    const inputs = document.querySelectorAll('input[type="range"]');
    inputs.forEach(input => {
        input.style.accentColor = color;
    });
}

[xInput, yInput, spreadInput, blurInput, colorInput].forEach(input => {
    input.addEventListener('input', updateShadow);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shadowCode.textContent).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = originalText, 2000);
    });
});

updateShadow();
