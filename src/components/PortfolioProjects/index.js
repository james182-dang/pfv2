import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import projects from './projects.json';
import './style.css';

function PortfolioProjects() {

    return (
        <div className='projects row justify-content-center'>
            {
                projects && projects.length > 0 && projects.map((project) =>
                <div className='project col-lg-5 col-md-11'>
                    <img src={require('../../assets/images/projects/' + project.image + '.png')} alt={project.title} />
                    <div className='project-info'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Technologies used: {project.technologies}</p>
                        <div className='icons'>
                            <i><a href={project.githubLink} target="_blank"><FaGithub /></a></i>
                            <i><a href={project.activeLink} target="_blank"><BsSun /></a></i>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PortfolioProjects;