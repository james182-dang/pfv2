import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';
import 'animate.css';

function Contact() {


    return (
        <div className='contact'>
            <div className='contactContent'>
                <h1>Want to get in contact?</h1>

                <h5>Feel free to send me an email at jamesaaronlindsey182@gmail.com</h5>
            </div>
        </div>
    );
}

export default Contact;