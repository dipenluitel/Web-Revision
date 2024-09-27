document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Get values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password strength
    if (!validatePassword(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long, contain uppercase and lowercase letters, and at least one number.';
        valid = false;
    }

    // If valid, submit the form
    if (valid) {
        alert('Form submitted successfully!');
        // Here, you can perform further actions, like sending the data to a server.
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}
