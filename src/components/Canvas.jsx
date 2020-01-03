import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';
import { gameHeight } from '../utils/constants';
import Leaderboard from './Leaderboard';
import { signIn } from 'auth0-web';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

    return (
        <svg
            id="aliens-go-home-canvas"
            viewBox={viewBox}
            onMouseMove={props.trackMouse}
            onClick={props.shoot}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" />
                </filter>
            </defs>
            <Sky />
            <Ground />
            {props.gameState.cannonBalls.map(cannonBall => {
                return <CannonBall key={cannonBall.id} position={cannonBall.position} />
            })}
            <CannonBase />
            <CannonPipe rotation={props.angle} />
            <CurrentScore score={15} />
            <Heart position={{ x: -300, y: 35 }} />
            {props.gameState.started &&
                <g>
                    {props.gameState.flyingObjects.map((flyingObject) => {
                        return (
                            <FlyingObject
                                key={flyingObject.id}
                                position={flyingObject.position}
                            />
                        )
                    })}
                </g>
            }
            {!props.gameState.started &&
                <g>
                    <StartGame onClick={props.startGame} />
                    <Title />
                    <Leaderboard
                        currentPlayer={props.currentPlayer}
                        authenticate={signIn}
                        leaderboard={props.players}
                    />
                </g>
            }
        </svg>
    )
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    currentPlayer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            createdAt: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    })),
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
};

export default Canvas;