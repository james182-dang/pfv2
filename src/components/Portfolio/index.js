import React from 'react';
import PortfolioProjects from '../PortfolioProjects';
import './style.css';
import 'animate.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div>
                <h1>Portfolio</h1>
                <p>Take a look at some projects I've done. Github icon opens the repo, Sunshine icon opens the deployed app.</p>
                <PortfolioProjects />
            </div>
        </section>
    );
}

export default Portfolio;