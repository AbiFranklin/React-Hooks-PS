import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';


const ImageChange = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnMouseOver primaryImg="https://picsum.photos/id/1052/500/500" secondaryImg="https://picsum.photos/id/1041/500/500" alt=""/>
            <br />
            <ImageToggleOnMouseOver primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnMouseOver primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnMouseOver primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
        </div>
    );
};

export default ImageChange;