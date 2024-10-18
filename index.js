const express = require("express");
const app = express();
const port = 3000;

// Ruta básica de prueba
app.get("/", (req, res) => {
  res.send({
    lista: ["hola", "hola", "hola"],
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
