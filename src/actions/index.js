export const MOVE_OBJECTS = "MOVE_BOJECTS";
export const START_GAME = "START_GAME";

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const startGame = () => ({
    type: START_GAME,
});