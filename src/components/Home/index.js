import React from 'react';
import 'animate.css';
import './style.css';
import image1 from '../../assets/images/home/James3.png';

function Home() {

    return (
        <div className='home'>
            <div className='jumbotron'>
                <div className='jumbotronContent'>
                    <h1>Hello!</h1>

                    <h2>👋 I'm James Lindsey</h2>

                    <h3>I'm a full stack web developer based in Nashville, Tennessee.</h3>

                    <p>I create full stack applications using todays
                        top technologies. If I'm not coding, you'd likely find me
                        creating music, obsessing over The Legend of Zelda,
                        or taking care of my corgi.
                    </p>
                </div>
                <div className='jumbotronImg'>
                    <img src={image1} />
                </div>
            </div>
        </div>
    );
}

export default Home;