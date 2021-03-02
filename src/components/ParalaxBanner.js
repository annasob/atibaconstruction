import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export function TopBanner(){
    return(
        <ParallaxBanner
            layers={[
                {
                    image: '../assets/img/staircase.jpg',
                    amount: 0.1,
                },
                {
                    image: '../assets/img/patio.jpg',
                    amount: 0.2,
                },
            ]}
            style={{
                height: '500px',
            }}
        >
        </ParallaxBanner>

    )

}
