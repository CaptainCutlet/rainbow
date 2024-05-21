import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
    return (
        <div className="image-grid">
            <div className="image-item">
                <img src="/assets/img1.png" alt="Image 1" />
            </div>
            <div className="image-item">
                <img src="/assets/img2.png" alt="Image 2" />
            </div>
            <div className="image-item">
                <img src="/assets/img3.png" alt="Image 3" />
            </div>
            <div className="image-item">
                <img src="/assets/img4.png" alt="Image 4" />
            </div>
        </div>
    );
}

export default ImageGrid;
