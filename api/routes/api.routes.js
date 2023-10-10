import { Router } from "express";
import * as controllers from '../controller/api.controllers.js';

// Crea una nueva instancia de Router para definir rutas.
const route = Router();

// Ruta para obtener todos los proyectos (GET)
route.get('/projects', controllers.getProjects);

// Ruta para obtener un proyecto específico por ID (GET)
route.get('/projects/:id', controllers.getProjectById);

// Ruta para crear un nuevo proyecto (POST)
route.post('/projects', controllers.createNewProject);

// Ruta para reemplazar un proyecto existente por completo (PUT)
route.put('/projects/:id', controllers.replaceProject);

// Ruta para actualizar parcialmente un proyecto (PATCH)
route.patch('/projects/:id', controllers.editProject);

// Ruta para eliminar un proyecto (DELETE)
route.delete("/projects/:id", controllers.deleteProject);

export default route;