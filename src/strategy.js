function calcularDestino(fila, columna, direccion, dado) {
    if (direccion === "N") {
        return [(fila - dado + 10) % 10, columna];
    }
    if (direccion === "S") {
    return [(fila + dado) % 10, columna];
    }
    if (direccion === "E") {
    return [fila, (columna + dado) % 10];
    }
    if (direccion === "O") {
    return [fila, (columna - dado + 10) % 10];
    }
}
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