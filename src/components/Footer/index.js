import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';

function Footer() {
    return (
        <footer className='footer d-flex justify-content-center'>
            <i><a href='https://github.com/james182-dang' target="_blank"><FaGithub /></a></i>
            <i><a href='https://www.linkedin.com/in/james-lindsey-7ab945218/' target="_blank"><FaLinkedin /></a></i>
        </footer>
    );
}

export default Footer;