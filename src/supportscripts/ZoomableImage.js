import React, { useState } from 'react';
import './ZoomableImage.css';

const ZoomableImage = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    const handleOverlayClick = () => {
        setIsZoomed(false);
    };

    return (
        <div className={`containerImage ${isZoomed ? 'zoomed' : ''}`}>
            <img
                src={src}
                alt={alt}
                // className="zoomable-image"
                onClick={handleImageClick}
            />
            {isZoomed && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className='showImages'>
                        <div>
                            <img
                                src={src}
                                alt={alt}
                                className="zoomable-image"
                                onClick={handleImageClick}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZoomableImage;
