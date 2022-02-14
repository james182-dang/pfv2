import React from 'react';
import PortfolioProjects from '../PortfolioProjects';
import './style.css';
import 'animate.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div>
                <h1>Portfolio</h1>
                <PortfolioProjects />
            </div>
        </section>
    );
}

export default Portfolio;