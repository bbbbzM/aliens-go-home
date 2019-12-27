import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    const style = {
        border: '1px solid black',
    }
    return (
        <svg
            id="aliens-go-home-canvas"
            viewBox={viewBox}
            preserveAspectRatio="xMaxYMax"
            onMouseMove={props.trackMouse}
        >
            <Sky />
            <Ground />
            <CannonBase />
            <CannonPipe rotation={props.angle} />
        </svg>
    )
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
}

export default Canvas;