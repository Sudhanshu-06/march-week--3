
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (emailInput.value.length >= 3 && emailInput.value.includes('@') && emailInput.value.includes('.')) {
        emailError.textContent = 'All good to go!';
        emailError.className = 'success';
    } else {
        emailError.textContent = 'Email should have at least 3 characters, "@" and "."';
        emailError.className = 'error';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    if (passwordInput.value.length >= 8) {
        passwordError.textContent = 'All good to go!';
        passwordError.className = 'success';
    } else {
        passwordError.textContent = 'Password should have at least 8 characters';
        passwordError.className = 'error';
    }
}

function submitForm() {
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (emailError.textContent === 'All good to go!' && passwordError.textContent === 'All good to go!') {
        const confirmation = confirm('Are you sure you want to submit the form?');

        if (confirmation) {
            alert('Successful signup!');
        }
    } else {
        alert('Please fix the errors before submitting.');
    }
}