/*document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('response-message').innerText = 'Thank you for your message!';
            form.reset(); // Reset the form
        } else {
            document.getElementById('response-message').innerText = 'There was a problem sending your message.';
        }
    }).catch(error => {
        document.getElementById('response-message').innerText = 'There was a problem sending your message.';
        console.error('Error:', error);
    });
});//*/
