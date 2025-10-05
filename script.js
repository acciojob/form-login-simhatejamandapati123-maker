function getFormvalue(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get values from input fields and trim whitespace
    const firstName = document.querySelector('[name="fname"]').value.trim();
    const lastName = document.querySelector('[name="lname"]').value.trim();

    // Combine and show full name in alert
    alert(`${firstName} ${lastName}`);
}