import React from 'react';
import Carousel, { CarouselItem } from '../Carousel/Carousel';
import image1 from '../../assets/images/about/James1.png';
import image2 from '../../assets/images/about/James2.png';
import image3 from '../../assets/images/about/James3.png';
import './style.css';
import 'animate.css';

function About() {

    return (
        <div className='about'>
            <h2>About Me</h2>
            <Carousel>
                <CarouselItem><img src={image1} /></CarouselItem>
                <CarouselItem><img src={image2} /></CarouselItem>
                <CarouselItem><img src={image3} /></CarouselItem>
            </Carousel>
            <p className='aboutText'>
                Hey! My name is James. I was born and raised in Nashville, Tennessee, and have always had a strong passion
                for technology. I am a Vanderbilt Certified full stack web developer looking to utilize my skills in a front-end, back-end,
                or full stack web development role. My projects are built utilizing todays top technologies such as React,
                GraphQL, Node, MongoDB, SQL, and many more. I've built many projects ranging from PWA's, SPA's, and multi-page applications
                utilizing databases and user interactivity. I'm always learning and growing my skills! If you would like to reach out,
                check out the contact tab and send me an email!
            </p>
        </div>
    );
}

export default About;