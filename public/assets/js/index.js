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
            const qr_result = document.getElementById('qr_result')
            if (!qr_result) return;

            // Insert the response into the #qr_result container.
            qr_result.innerHTML = data;

            const clear_btn = document.getElementById('clear');

            clear_btn.addEventListener('click', () => {
                qr_result.innerHTML = '';
                qr_form.reset();
            });
        })
        .catch(error => {
            console.error('Error:', error);
            const qr_result = document.getElementById('qr_result')
            if (!qr_result) return;

            qr_result.innerHTML = '<h1>Error generating QR code</h1>';
        });
    });
});
