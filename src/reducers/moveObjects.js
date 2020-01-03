import { calculateAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import moveBalls from './moveCannonBalls';

function moveObjects(state, action) {
    if (!state.gameState.started) return state;
    const mousePosition = action.mousePosition || { x: 0, y: 0 }
    const newState = createFlyingObjects(state);
    const now = (new Date()).getTime();
    const flyingObjects = newState.gameState.flyingObjects.filter((flyingObject) => {
        return ((now - flyingObject.createdAt) < 4000);
    });
    const { x, y } = mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    const cannonBalls = moveBalls(state.gameState.cannonBalls);
    return {
        ...newState,
        gameState: {
            ...newState.gameState,
            flyingObjects,
            cannonBalls,
        },
        angle,
    };
}

export default moveObjects;