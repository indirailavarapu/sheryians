const form = document.getElementById('callbackForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const datetime = document.getElementById('datetime').value;

    // Basic input validation (you can add more robust checks)
    if (!name || !phone || !datetime) {
        alert('Please fill in all fields.');
        return;
    }

    // Send data to server (replace with your actual server-side code)
    fetch('/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phone, datetime })
    })
    .then(response => {
        if (response.ok) {
            alert('Callback request submitted successfully!');
            form.reset(); // Reset form after successful submission
        } else {
            alert('Error submitting callback request.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});