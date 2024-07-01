const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
    const form = event.target;
    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;

    const email = emailInput.trim();
    const password = passwordInput.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
    return; 
    }

    const formData = {
        email,
        password,
    };

    console.log('Form data:', formData);
    loginForm.reset();
});
