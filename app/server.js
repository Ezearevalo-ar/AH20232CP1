import express from "express";
import ProjectRoute from "../routes/project.routes.js";
import ProjectApi from "../api/routes/api.routes.js";

// Crea una instancia de la aplicación Express
const app = express();

app.use(express.urlencoded({extended: true})); // Para manejar solicitudes con datos codificados en URL
app.use('/', express.static('public')); // Archivos estáticos desde la carpeta 'public'
app.use(express.json()); // Para datos en formato JSON

// Utiliza las rutas de proyecto importadas en la aplicación Express
app.use(ProjectRoute);
app.use('/api', ProjectApi);

// Inicia el servidor Express y lo hace escuchar en el puerto 3333
app.listen(3333);