import express from "express";
import { move } from "./move.js";

// Creamos la aplicación sin abrir un puerto; así también se puede usar en pruebas.
export const app = express();

// Interpreta los cuerpos JSON. Va antes de las rutas para que req.body exista.
app.use(express.json());
app.post("/move", move);

// Express reconoce un manejador de errores por sus 4 parámetros.
const errorHandler = (err, req, res, next) => {
  // JSON mal escrito: falla antes de llegar a move.
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "El body contiene JSON inválido." });
  }

  const status = err.status || 500;
  return res
    .status(status)
    .json({ error: status === 500 ? "Error interno del bot." : "Solicitud inválida." });
};

// Se registra al final para atrapar los errores de todo lo anterior.
app.use(errorHandler);
