document.addEventListener("DOMContentLoaded", function() {
    const phoneButton = document.getElementById("phone-button");
    const emailButton = document.getElementById("email-button");
    const inputContainer = document.getElementById("input-container");
    const googleButton = document.getElementById("google-button");

    phoneButton.addEventListener("click", function() {
        inputContainer.innerHTML = `
            <label for="mobile-number">Mobile Number</label>
            <input type="text" id="mobile-number" placeholder="Enter your mobile number">
        `;
    });

    emailButton.addEventListener("click", function() {
        inputContainer.innerHTML = `
            <label for="email-address">Email Address</label>
            <input type="email" id="email-address" placeholder="Enter your email address">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password">
        `;
    });

    googleButton.addEventListener("click", function() {
        window.location.href = "https://accounts.google.com/signin";
    });
});



// const signInForm = document.querySelector('.signin form');

// if (signInForm) {
//     signInForm.addEventListener('submit', function(event) {
//         const username = document.querySelector('#username').value.trim();
//         const password = document.querySelector('#password').value.trim();
        
//         if (username === '' || password === '') {
//             alert('Please fill in both username and password.');
//             event.preventDefault();
//         }
//     });
// }