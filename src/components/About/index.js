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
                Hey! My name is James. I was born and raised in Nashville, Tennessee, and have always had a strong love for the beauty of this state.
                I graduated from White House High School in 2014 and spent many years living my lifelong dream of being a musician, playing shows in Nashville and the surrounding areas.
                When the pandemic began, I decided to broaden my skillsets and took the plunge into learning web development. I am now a Vanderbilt-certified full-stack web developer with experience
                in many front-end and back-end technologies.

                I have always had a passion for technology and have enjoyed development immensely.
            </p>
        </div>
    );
}

export default About;