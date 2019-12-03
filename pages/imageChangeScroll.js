import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';


const ImageChangeScroll = () => {
    return (
        <div>
            <h1>Abi</h1>
            <ImageToggleOnScroll primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnScroll primaryImg="https://picsum.photos/id/1052/500/500" secondaryImg="https://picsum.photos/id/1041/500/500" alt=""/>
            <br />
            <ImageToggleOnScroll primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnScroll  primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
            <br />
            <ImageToggleOnScroll primaryImg="https://picsum.photos/id/1048/500/500" secondaryImg="https://picsum.photos/id/103/500/500" alt=""/>
        </div>
    );
};

export default ImageChangeScroll;