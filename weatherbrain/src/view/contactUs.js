import React, { useState } from "react";
import emailjs from 'emailjs-com';
import '../styling/components/contactUs.css';
import emailpic from '../img/emailpic.png';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    if (emailSent) {
        return (
            <div>
                <div className='textContainer'> 
                    <h1>Thank you!</h1>
                    <img src={emailpic} alt="mail" />
                    <p>We'll be in touch soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div 
        id="contact-form"
        >
            <div className="margin">
                <input type="text" placeholder="Your name" name="name" required 
                value={name} onChange={e => setName(e.target.value)}  />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <textarea placeholder="Your message" name="message" required
                value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <div>
                <button type="submit" className='button' onClick={submit}> Send a message </button>
            </div>
        </div>
    );
};

export default ContactForm;