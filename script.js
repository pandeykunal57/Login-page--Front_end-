
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginBox = document.querySelector('.login-box');
  
    if (email === "" || password === "") {
      errorMessage.textContent = "Please fill out both fields.";
      triggerShakeAnimation(loginBox);
    } else if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      triggerShakeAnimation(loginBox);
    } else {
      errorMessage.textContent = ""; 
      alert('Login successful!');
      
    }
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  }




  document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-btn');

    function updateButtonState() {
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.style.backgroundColor = '#4CAF50'; 
            loginButton.style.cursor= 'pointer';
        } else {
            loginButton.style.backgroundColor = '#707070'; 
            loginButton.style.cursor= 'not-allowed';
        }
    }

    

    emailInput.addEventListener('input', updateButtonState);
    passwordInput.addEventListener('input', updateButtonState);
});

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailPlaceholder = document.querySelector('label[for="email"]');
    const passwordPlaceholder = document.querySelector('label[for="password"]');

    function updatePlaceholderState() {
        emailPlaceholder.style.opacity = emailInput.value.trim() ? '0' : '1';
        passwordPlaceholder.style.opacity = passwordInput.value.trim() ? '0' : '1';
    }

    emailInput.addEventListener('input', updatePlaceholderState);
    passwordInput.addEventListener('input', updatePlaceholderState);
});
