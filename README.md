## Bot de Casas

## Integrantes
- Carvajal Martin
- Torres Maximiliano
- Barrionuevo Santiago
- Moyano Florencia
- Pepi Ingacio

## Qué hace el bot

Recibe el estado del juego (tablero, jugador y dado) por POST /move y devuelve qué dirección mueve cada ficha propia.

## ¿Como decide? (estrategia)

Para cada ficha propia, el bot prueba las 4 direcciones posibles (Norte, Sur, Este, Oeste) y elige:

- *1:* Si alguna dirección lo deja sobre una casa, elige esa (la conquistará de manera inmediata).
- *2:* Si ninguna llega a la casa, elige la dirección que la deje más cerca de la casa más cercana.

La distancia se mide considerando que el tablero es toroidal: da la vuelta por los bordes, así que a veces "ir para abajo", en realidad, es el camino más corto hacia arriba.

## Como correrlo:

npm install
npm run dev

*El bot queda escuchando en http://localhost:3000*

## Como probarlo:

npm test

 **Cuenta con 6 test:**

_Tests 1-5:_ prueban chooseMove. Que elija bien las piezas propias, mueva todas si hay varias, y devuelva vacío si no tiene fichas.
_Test 6:_ prueba el endpoint /move completo — responde 200 con estados válidos y 400 con inválidos.

## Estructura del proyecto

- **src/app.js:** configura Express y las rutas.
- **src/move.js:** recibe la solicitud HTTP y llama a la estrategia.
- **src/state.js:** valida que el estado recibido tenga el formato correcto.
- **src/strategy.js:** la lógica de decisión (la parte más importante).
- **src/server.js:** arranca el servidor.

