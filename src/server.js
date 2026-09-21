import { app } from "./app.js";

// PORT permite configurar el puerto; por defecto usamos 3000.
const port = process.env.PORT || 3000;

// Abre el puerto y deja el proceso esperando solicitudes HTTP.
app.listen(port, () => {
  console.log(`Bot de casas escuchando en http://localhost:${port}`);
});
