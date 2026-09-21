export function chooseMove(state) {
    const movements = {};

    for (const row of state.tablero) {
        for (const cell of row) {
        if (cell.startsWith(state.jugador)) {
            movements[cell] = "N";
        }
        }
    }

    return movements;
}