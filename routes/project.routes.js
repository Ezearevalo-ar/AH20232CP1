import express from "express";
import * as controllers from '../controller/project.controller.js';

const route = express.Router();

// Ruta para obtener todos los proyectos
route.get('/projects', controllers.getProjects);

// Ruta para mostrar el formulario de creación de un nuevo proyecto
route.get('/projects/newProject', controllers.createNewProjectForm);
route.post('/projects/newProject', controllers.createNewProject);

// Ruta para mostrar el formulario de edición de un proyecto existente por su ID
route.get('/projects/edit/:id', controllers.editProjectForm);
route.post('/projects/edit/:id', controllers.editProject);

// Ruta para mostrar el formulario de eliminación de un proyecto existente por su ID
route.get('/projects/delete/:id', controllers.deleteProjectForm);
route.post('/projects/delete/:id', controllers.deleteProject);

// Ruta para obtener un proyecto específico por su ID
route.get('/projects/:id', controllers.getProjectById);

export default route