// Devuelve true si el valor recibido tiene la forma de un estado válido.
export function isState(value) {
  // typeof null también da "object", por eso se excluye aparte.
  if (typeof value !== "object" || value === null) return false;

  return (
    // El jugador debe ser exactamente "A" o "B".
    (value.jugador === "A" || value.jugador === "B") &&
    // El dado debe ser un entero de 1 a 3 (rechaza "3" como texto y decimales).
    typeof value.dado === "number" &&
    Number.isInteger(value.dado) &&
    value.dado >= 1 && value.dado <= 3 &&
    // Diez filas, y cada fila con diez casillas.
    Array.isArray(value.tablero) &&
    value.tablero.length === 10 &&
    value.tablero.every(row =>
      Array.isArray(row) && row.length === 10 &&
      // Cada casilla: vacía, "N" (casa neutral) o pieza como A1, B12.
      row.every(cell => typeof cell === "string" &&
        (cell === "" || cell === "N" || /^[AB][1-9]\d*$/.test(cell)))
    )
  );
}
