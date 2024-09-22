document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // EmailJS template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_ctqavv3', 'template_bk3l07s', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'Your message has been sent successfully! You will be contacted soon.';
            successMessage.style.display = 'block';
            successMessage.classList.add('show');

            // Clear the form
            document.getElementById('contact-form').reset();

            // Hide the message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
                successMessage.style.display = 'none';
            }, 500000);

        }, function(error) {
            console.error('FAILED...', error);
            
            // Show error message
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'There was an error sending your message. Please try again.';
            successMessage.style.color = 'red';
            successMessage.style.display = 'block';
            successMessage.classList.add('show');

            // Hide the message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
                successMessage.style.display = 'none';
            }, 500000);
        });
});

// JavaScript for Smooth Scrolling
document.querySelector('.scroll-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});


