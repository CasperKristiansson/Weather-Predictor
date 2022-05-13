import React, { useState } from "react";
import '../styling/components/contactUs.css';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className='textContainer'>
                <h1>Thank you!</h1>
                <p>We'll be in touch soon.</p>
            </div>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="margin">
                <input type="text" placeholder="Your name" name="name" required  />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
                <textarea placeholder="Your message" name="message" required />
            </div>
            <div>
                <button type="submit" className='button'> Send a message </button>
            </div>
        </form>
    );
};

export default ContactForm;