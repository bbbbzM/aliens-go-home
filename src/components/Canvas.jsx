import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    const style = {
        border: '1px solid black',
    }
    return (
        <svg id="aliens-go-home-canvas" style={style} viewBox={viewBox} preserveAspectRatio="xMaxYMax">
            <Sky />
            <Ground />
            <CannonBase />
            <CannonPipe rotation={45} />
        </svg>
    )
}

export default Canvas;