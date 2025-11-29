function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = `InkByte Contact: Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    const mailtoLink = `mailto:vishwaharsh10@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    form.reset(); 
}

