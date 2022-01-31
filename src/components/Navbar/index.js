import React from 'react';
import './style.css';


function Navigation(props) {

    return (
        <header className='flex-wrap'>
            <h1>
                James Lindsey
            </h1>
            <nav className='d-flex flex-wrap'>
                <ul className='d-flex justify-content-between mb-0'>
                    <li>
                        <a href='#about' onClick={() => props.setCurrentDisplay('About')}>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' onClick={() => props.setCurrentDisplay('Portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#resume' onClick={() => props.setCurrentDisplay('Resume')}>Resume</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => props.setCurrentDisplay('Contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;