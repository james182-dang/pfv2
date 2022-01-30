import React from 'react';
import { FaGithub } from 'react-icons/fa';

function PortfolioProjects() {

    return (
        <div className='projects row justify-content-center'>
            {
                projects && projects.length > 0 && projects.map((project) =>
                <div className='project col-lg-5 col-md-11'>
                    <img src={require('../../assets/images/applications' + project.image + '.png')} alt={project.title} />
                    <div className='project-info'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='icons'>
                            <i><a href={project.githubLink}><FaGithub /></a></i>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PortfolioProjects;