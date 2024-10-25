const sendEmail = () => {
    const name = document.getElementById('contact_name').value.trim();
    const email = document.getElementById('contact_email').value.trim();
    const subject = document.getElementById('contact_subject').value.trim();
    let message = document.getElementById('contact_message').value.trim();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if all fields are filled
    if (!name || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const body = `Name: ${name} | Email: ${email} | Message: ${message}`;
    
    console.log({ name, email, subject, body });
    window.open(`mailto:your@email.address?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
};
