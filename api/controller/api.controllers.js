import * as service from "../../services/project.services.js";

// Controlador para obtener todos los proyectos.
const getProjects = async (req, res) => {
    try {
        const filter = req.query;
        const projects = await service.getProjects(filter);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controlador para obtener un proyecto por su ID.
const getProjectById = async (req, res) => {
    const id = req.params.id;
    try {
        const project = await service.getProjectById(id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ error: "Project not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controlador para crear un nuevo proyecto.
const createNewProject = async (req, res) => {
    const project = {
        name: req.body.name,
        synopsis: req.body.synopsis,
        description: req.body.description,
        release_date: req.body.release_date,
        tech: req.body.tech,
        img_alt: req.body.img_alt,
        repository: req.body.repository,
        site: req.body.repository
    };

    try {
        const newProject = await service.createNewProject(project);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controlador para reemplazar un proyecto existente.
const replaceProject = async (req, res) => {
    const id = req.params.id;
    const project = {
        name: req.body.name,
        synopsis: req.body.synopsis,
        description: req.body.description,
        release_date: req.body.release_date,
        tech: req.body.tech,
        img_alt: req.body.img_alt,
        repository: req.body.repository,
        site: req.body.repository
    };

    try {
        const editedProject = await service.replaceProject(id, project);
        if (editedProject) {
            res.status(200).json(editedProject);
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controlador para actualizar parcialmente un proyecto.
const editProject = async (req, res) => {
    const id = req.params.id;
    const project = {};

    // Agregar propiedades al objeto project solo si se proporcionan en la solicitud.
    if (req.body.name) project.name = req.body.name;
    if (req.body.synopsis) project.synopsis = req.body.synopsis;
    if (req.body.description) project.description = req.body.description;
    if (req.body.release_date) project.release_date = req.body.release_date;
    if (req.body.tech) project.tech = req.body.tech;
    if (req.body.img_alt) project.img_alt = req.body.img_alt;
    if (req.body.repository) project.repository = req.body.repository;
    if (req.body.site) project.site = req.body.site;

    try {
        const editProject = await service.editProject(id, project);
        if (editProject) {
            res.status(200).json();
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controlador para eliminar un proyecto.
const deleteProject = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedProject = await service.deleteProject(id);
        if (deletedProject) {
            res.status(202).json(deletedProject);
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Exporta los controladores para su uso.
export {getProjects, getProjectById, createNewProject, replaceProject, editProject, deleteProject};
