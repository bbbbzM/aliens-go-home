import { MOVE_OBJECTS, START_GAME, LEADERBOARD_LOADER, LOGGED_IN } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    currentPlayer: null,
    players: null,
}

const initialState = {
    angle: 45,
    gameState: initialGameState,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        case LEADERBOARD_LOADER:
            return {
                ...state,
                players: action.players,
            };
        case LOGGED_IN:
            return {
                ...state,
                currentPlayer: action.player,
            }
        default:
            return state;
    }
}

export default reducer;