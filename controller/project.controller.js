import * as service from '../services/project.services.js';
import * as view from '../views/project.views.js';
import { createPage } from '../pages/utils.js';

//TODO probar mañana el redirect para la creación de nuevos proyectos  https://stackoverflow.com/questions/4062260/nodejs-redirect-url

const getProjects = (req, res) => {
    const filter = req.query
    // Llama a la función "getProjects" del servicio para obtener la lista de proyectos
    service.getProjects(filter).then((Projects) => {
        // Envía la lista de proyectos a la vista y responde con la página generada
        res.send(view.createProjectPage(Projects));
    });
};

//TODO SOLUCIONAR ERROR PARAMETRO  input must be a 24 character hex string, 12 byte Uint8Array
const getProjectById = (req, res) => {
    const id = req.params.id;
    console.log(`(17) getProjectById: ${id}`)

    // Llama a la función "getProjectById" del servicio para obtener un proyecto específico por su ID
    service.getProjectById(id).then((project) => {
        if (project) {
            // Si se encuentra el proyecto, muestra los detalles utilizando la vista
            res.send(view.createPageDetail(project));
        } else {
            // Si no se encuentra el proyecto, muestra un mensaje de error
            res.send(createPage(`Error`, `<p>Project not found ❌</p>`));
        }
    });
};

// Controlador para mostrar el formulario de creación de un nuevo proyecto
const createNewProjectForm = (req, res) => {
    res.send(view.createNewProjectForm()); //Se encuentrá en la [carpeta views]
}

// Controlador para crear un nuevo proyecto a partir de la solicitud HTTP
const createNewProject = (req, res) => {
    const project = {
        name: req.body.name,
        synopsis: req.body.synopsis,
        description: req.body.description,
        release_date: req.body.release_date,
        tech: req.body.tech,
        img: "https://i.imgur.com/giVXnwt.png", //Imagen predefinida https://i.imgur.com/giVXnwt.png
        img_alt: req.body.img_alt,
        repository: req.body.repository,
        site: req.body.repository
    }

    // Llama a la función "createNewProject" del servicio para crear el proyecto
    service.createNewProject(project).then(newProject => {
        // Si se crea el proyecto exitosamente, responde con una página de éxito que muestra los detalles del nuevo proyecto
        res.redirect(`/projects/${newProject._id}`); //TODO buscar forma de redirigir a los usuarios a la vista detalle del proyecto recién creado
    })
    .catch((error) => {
        // Si ocurre un error, responde con una página de error
        res.send(createPage(`Error`, `<p>Something went wrong, check the console ❌</p>`))
    });
}

// Controlador para mostrar el formulario de edición de un proyecto existente
const editProjectForm = (req, res) => {
    // Obtiene el ID del proyecto de los parámetros de la solicitud
    const id = req.params.id;
    console.log(`(63) EditProjectForm: ${id}`);
    
    // Llama a la función "getProjectById" del servicio para obtener los detalles del proyecto
    service.getProjectById(id)
    .then(project => {
        if (project) {
            // Si se encuentra el proyecto, muestra el formulario de edición utilizando la vista
            res.send(view.editProjectForm(project));
        } else{
            // Si no se encuentra el proyecto, muestra un mensaje de error
            res.send(createPage(`Error`, `<p>Something went wrong, check the console ❌</p>`));
        }
    })
}

// Controlador para procesar la edición de un proyecto existente
const editProject = (req, res) => {
    // Obtiene el ID del proyecto de los parámetros de la solicitud
    const id = req.params.id;
    console.log(`(86) editProject: ${id}`)
    
    // Crea un objeto "project" con los datos del formulario enviado en la solicitud
    const project = {
        name: req.body.name,
        synopsis: req.body.synopsis,
        description: req.body.description,
        release_date: req.body.release_date,
        tech: req.body.tech,
        img: "https://i.imgur.com/giVXnwt.png", // Imagen predefinida https://i.imgur.com/giVXnwt.png
        img_alt: req.body.img_alt,
        repository: req.body.repository,
        site: req.body.repository
    }

    // Llama a la función "editProject" del servicio para editar el proyecto por ID
    service.editProject(id, project)
           .then((editedProject) => {
            if (editedProject) {
                // Si se edita el proyecto exitosamente, redirige al usuario a la página de detalles del proyecto
                res.redirect(`/projects/${id}`);
            }else{
                // Si no se puede editar el proyecto, muestra un mensaje de error
                res.send(createPage(`Error`, `<p>Something went wrong, check the console ❌</p>`));
            }
    })
}


// Controlador para mostrar el formulario de eliminación de un proyecto existente
const deleteProjectForm = (req, res) => {
    // Obtiene el ID del proyecto de los parámetros de la solicitud
    const id = req.params.id;
    console.log(`(103) deleteProjectForm: ${id}`)
    // Llama a la función "getProjectById" del servicio para obtener los detalles del proyecto
    service.getProjectById(id)
    .then(project => {
        if (project) {
            // Si se encuentra el proyecto, muestra el formulario de eliminación utilizando la vista
            res.send(view.deleteProjectForm(project));
        } else{
            // Si no se encuentra el proyecto, muestra un mensaje de error
            res.send(createPage(`Error`, `<p>Something went wrong, check the console ❌</p>`));
        }
    })
}

// Controlador para eliminar un proyecto existente
const deleteProject = (req, res) => {
    // Obtiene el ID del proyecto de los parámetros de la solicitud
    const id = req.params.id;
    console.log(`(131) deleteProject: ${id}`)

    // Llama a la función "deleteProject" del servicio para eliminar el proyecto por ID
    service.deleteProject(id)
    .then((deleteProject) => {
        if (deleteProject) {
            // Si se elimina el proyecto exitosamente, redirige al usuario a la lista de proyectos
            res.redirect(`/projects`);
        } else{
            // Si no se puede eliminar el proyecto, muestra un mensaje de error
            res.send(createPage(`Error`, `<p>Something went wrong, check the console ❌</p>`));
        }
    })
}


export {getProjects, getProjectById, createNewProjectForm, createNewProject,editProjectForm, editProject, deleteProjectForm, deleteProject}