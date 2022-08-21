import React from 'react';
import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'

function CarouselBlock() {
    return (
        <CCarousel controls>
            <CCarouselItem>
                <CImage className="d-block w-100" src="Website_Image_1.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src="Website_Image_2.jpg" alt="slide 2" />
            </CCarouselItem>
        </CCarousel>
    );
}

export default CarouselBlock;