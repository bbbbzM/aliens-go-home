import React from 'react';

const Rank = (props) => {
    const { x, y } = props.position;

    const rectId = "rect" + props.player.rank;
    const clipId = "clip" + props.player.rank;

    const pictureStyle = {
        height: 60,
        width: 60,
    };

    const textStyle = {
        fontFamily: '"Joti One",cursive',
        fontSize: 35,
        fill: '#e3e3e3',
        cursor: 'default',
    }

    const pictureProperties = {
        style: pictureStyle,
        x: x - 140,
        y: y - 40,
        href: props.player.picture,
        clipPath: `url(#${clipId})`
    }

    const frameProperties = {
        width: 55,
        height: 55,
        rx: 30,
        x: pictureProperties.x,
        y: pictureProperties.y,
    };

    return (
        <g>
            <defs>
                <rect id={rectId} {...frameProperties} />
                <clipPath id={clipId}>
                    <use href={`#${rectId}`} />
                </clipPath>
            </defs>
            <use href={`#${rectId}`} strokeWidth="2" stroke="black" />
            <text filter="url(#shadow)" style={textStyle} x={x - 200} y={y}>
                {props.player.rank}
            </text>
            <image {...pictureProperties} />
            <text filter="url(#shadow)" style={textStyle} x={x - 60} y={y}>
                {props.player.name}
            </text>
            <text filter="url(#shadow)" style={textStyle} x={x + 350} y={y}>
                {props.player.maxScore}
            </text>
        </g>
    );
}

export default Rank;