import React, { useState, useEffect } from 'react';
import './style.css';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }


        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 2000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });


    return (
        <div 
          className='carousel'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
            <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
        </div>
    );
};

export default Carousel;