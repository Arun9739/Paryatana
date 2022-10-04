
const sendEmail = ()=>{
    const name = document.getElementById('contact_name').value;
    const email = document.getElementById('contact_email').value;
    const subject = document.getElementById('contact_subject').value;
    let body = document.getElementById('contact_message').value;
    body = "Name - "+ name +" | email - "+email+" | Message - "+body ;
    
    console.log(name, email , subject , body);
    window.open('mailto:your@email.address?subject='+subject+'&body='+body);
}

