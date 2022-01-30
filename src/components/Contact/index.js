import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Please enter a valid email!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='4' />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;