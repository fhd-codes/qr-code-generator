document.addEventListener('DOMContentLoaded', function () {

    const qr_form = document.getElementById('qr_form');
    if (!qr_form) return;

    qr_form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Create FormData object from the form
        const form_data = new FormData(this);

        // Send the form data using AJAX
        fetch('/generate', {
            method: 'POST',
            body: form_data,
        })
        .then(response => response.text()) // Get the response as text
        .then(data => {
            // Insert the response into the #qr_result container.
            document.getElementById('qr_result').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('qr_result').innerHTML = '<h1>Error generating QR code</h1>';
        });
    });
});
