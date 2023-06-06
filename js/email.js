const sendEmail = () => {
  const name = document.getElementById('contact_name').value;
  const email = document.getElementById('contact_email').value;
  const subject = document.getElementById('contact_subject').value;
  let body = document.getElementById('contact_message').value;
  body = "Name - " + name + " | Email - " + email + " | Message - " + body;

  console.log(name, email, subject, body);

  const mailtoLink = "mailto:your@email.address"
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);

  window.open(mailtoLink);
};
