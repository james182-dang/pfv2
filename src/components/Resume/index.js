import React from 'react';
import { Card } from 'react-bootstrap';
import skillset from './skillset';
import './style.css';
import 'animate.css';

function Resume() {
    return (
        <div className='resume'>
            <div className='skillset row'>
                <Card className='skillset-card col-12'>
                    <Card.Body className='skillset-card-body'>
                        {
                            skillset && skillset.length > 0 && skillset.map((skillset) =>
                                <Card.Text className="skillset-card-text">
                                    {skillset.name}
                                    <br />
                                    <i>{skillset.icon}</i>
                                </Card.Text>)
                        }
                    </Card.Body>
                </Card>
            </div>
            <div className='resumeContent'>

                <h1>Interested in seeing my skills?</h1>


                <a href="https://drive.google.com/file/d/1bjkXKdaDy8IXk4Ye7obgH8bWt6Ppd1ni/view?usp=sharing" target="_blank">Take a look at my resume.</a>

            </div>
        </div>
    );
}

export default Resume;