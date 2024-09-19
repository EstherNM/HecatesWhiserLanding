// ... (Previous JavaScript) ... 

document.getElementById('signup-button').addEventListener('click', function() {
    // Smoothly scroll to the signup section
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // ... Gather data from the signup form
    // ... Send data to the backend API for user registration
});