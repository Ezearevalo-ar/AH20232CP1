import { MongoClient, ObjectId } from 'mongodb';

// Conexión a la base de datos MongoDB
const client = new MongoClient('mongodb+srv://alumnos:alumnos@dwt4ah.kh7oihe.mongodb.net/')//PUERTO 27017
const db = client.db("AH20232CP1")

// Función asincrónica para obtener todos los proyectos desde la base de datos
async function getProjects(filter) {
    const filterMongo = {};

    if (filter.release_date) {
        filterMongo.release_date = { $eq: filter.release_date }
    }

    if (filter.tech) {
        // Filtro por tecnologías
        filterMongo.tech = { $in: filter.tech.split(",") }; // Suponiendo que 'filter.tech' es una cadena separada por comas
    }
    
    return db.collection("projects").find(filterMongo).toArray();
}

// Función asincrónica para obtener un proyecto específico por su ID desde la base de datos
async function getProjectById(id){
    return db.collection("projects").findOne({_id: new ObjectId(id)});
}

// Función asincrónica para crear un nuevo proyecto en la base de datos
async function createNewProject(project){
    // Inserta el nuevo proyecto en la colección "projects" y espera la respuesta
    const newproject = await db.collection("projects").insertOne(project);

    // Asigna el ID del proyecto insertado al objeto "project"
    newproject._id = newproject.insertedId;
    return newproject;
}

async function replaceProject(id, project){
    const oldproject = await db.collection("projects").replaceOne({_id: new ObjectId(id)}, project);
    return replaceProject
}

// Función asincrónica para editar un proyecto en la base de datos por su ID.
async function editProject(id, project) {
    // Actualiza un documento en la colección "projects" con el ID proporcionado y establece los valores del proyecto.
    const editedProject = await db.collection("projects").updateOne({_id: new ObjectId(id)}, {$set: project});
    // Retorna el resultado de la operación de edición.
    return editedProject;
}

// Función asincrónica para eliminar un proyecto de la base de datos por su ID.
async function deleteProject(id) {
    // Elimina un documento de la colección "projects" con el ID proporcionado.
    const deleteProject = await db.collection("projects").deleteOne({_id: new ObjectId(id)});
    // Retorna el resultado de la operación de eliminación.
    return deleteProject;
}




export {getProjects, getProjectById, createNewProject, replaceProject, editProject, deleteProject}