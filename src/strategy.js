// 
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

// Esta función recorre el tablero y devuelve un array con la posición de las casas neutrales
function buscarCasas(tablero) {
    const casas = [];
        for (let f = 0; f < 10; f++) {
            for (let c = 0; c < 10; c++){
                if (tablero[f][c] === "N") casas.push(f, c)
        }
    }
    return casas;
}

// Mide la distancia más corta entre dos puntos (incluso da la vuelta!!)
function distancia(a, b){
    const df = Math.min(Math.abs(a - b), 10 - Math.abs(a - b));
    return df;
}

// Elige, de las 4 direcciones posibles, la que deja a la ficha sobre una casa
// o, si ninguna llega a una casa, la que la deja más cerca de la más próxima.
function elegirDireccion(fila, columna, dado, casas) {
    const direcciones = ["N", "S", "E", "O"];
    let mejorDireccion = direcciones[0];
    let mejorDistancia = Infinity;

    for (const direccion of direcciones) {
    const [f, c] = calcularDestino(fila, columna, direccion, dado);

    // Si cae justo en una casa, es la mejor jugada posible, entonces se elije esa
    const conquistaCasa = casas.some(([cf, cc]) => cf === f && cc === c);
    if (conquistaCasa) return direccion;

    // Si no hay ninguna casa en el tablero, cualquier dirección se
    if (casas.length === 0) continue;

    // Si no conquista, medimos qué tan lejos queda de la casa más cercana.
    const distanciaMinima = Math.min(
        ...casas.map(([cf, cc]) => distancia(f, cf) + distancia(c, cc))
    );

    if (distanciaMinima < mejorDistancia) {
        mejorDistancia = distanciaMinima;
        mejorDireccion = direccion;
    }
    }
    return mejorDireccion;
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