import { createPage } from "../pages/utils.js";

 //TODO arreglar las rutas que no funcionan ✅
 //TODO usar bootstrap para el codigo ✅
 //TODO cambiar el bucle for por un foreach ✅
 //TODO arreglar el bug de las tecnologias ✅
 //TODO deshabilitar input de la vista de borrar✅
 //TODO refactorizar el codigo ✅
 //TODO arreglar la identación ✅
 //TODO acomodar el sitio para que sea responsive ✅
 //TODO cambiar el idioma a ingles ✅
function createProjectPage(project) {
    let html = "";
        html += `<main class="container">`;
        html += `   <div class="row">`;
        html += `       <form action="/projects/" method="GET">`;
        html += `           <select class="form-select form-select-lg mb-3 w-50 d-block m-auto" aria-label="select a language option" name="tech">`;
        html += `               <option value="" selected>select a language option</option>`;
        html += `               <option value="HTML">HTML</option>`;
        html += `               <option value="CSS">CSS</option>`;
        html += `               <option value="JavaScript">JavaScript</option>`;
        html += `               <option value="PHP">PHP</option>`;
        html += `               <option value="Vue">Vue</option>`;
        html += `               <option value="React">React</option>`;
        html += `               <option value="bootstrap">Bootstrap</option>`;
        html += `               <option value="MySQL">MySQL</option>`;
        html += `               <option value="MongoDB">MongoDB</option>`;
        html += `           </select>`;
        html += `           <button class="btn btn-primary d-block m-auto mb-4 w-25" type="submit">Filtrar</button>`
        html += `       </form>`;

        html += `       <form action="/projects/" method="GET">`;
        html += `           <select class="form-select form-select-lg mb-3 w-50 d-block m-auto" aria-label="select a language option" name="release_date">`;
        html += `               <option value="" selected> select a language option </option>`;
        html += `               <option value="2022">2022</option>`;
        html += `               <option value="2023">2023</option>`;
        html += `               <option value="2024">2024</option>`;
        html += `           </select>`;
        html += `           <button class="btn btn-primary d-block m-auto mb-4 w-25" type="submit">Filtrar</button>`
        html += `       </form>`;
    
    // Itera a través de cada proyecto que hay en la base de datos y genera una card de cada proyecto que haya
    project.forEach((project) => {
        html += `       <div class="col-md-4 card-min-height">`;
        html += `           <div class="card mb-4 card-min-height">`;
        html += `               <img src="${project.img}" class="card-img-top" alt="${project.img_alt}">`;
        html += `               <div class="card-body card-min-height-body">`;
        html += `                   <h5 class="card-title">${project.name}</h5>`;
        html += `                   <p class="card-text">${project.synopsis}</p>`;
        html += `                <p class="card-text">Technologies: `
        html += `                <ol class="breadcrumb">`;

        if(project.tech){ // Si el valor es positio entra, si no imprime el mensaje
            // Itera a través de las tecnologías del proyecto deseado y con bootstrap muestro de un formato mas amigable visualmente que tecnologias usa
            project.tech.forEach((technology) => {
                html += `<li class="breadcrumb-item active">${technology}</li>`;
            });
        }else{
                html += `<li>No se especifico ningun lenguaje o framework</li>`;
        }

        html += `                </ol></p>`;
        html += `               </div>`;
        html += `               <div class="card-body m-auto">`;
        html += `                   <a href="/projects/${project._id}" class="btn btn-primary">Ver detalles del proyecto</a>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `       </div>`;
    });

        html += `   </div>`;
        html += `</main>`;

    return createPage("Projects", html);
}

function createPageDetail(project) {
    let html = "";

    if (project) {
        html += `<div class="container m-auto mt-4 mb-4" style="max-width: 1000px;">`;
        html += `   <ul class="nav nav-pills nav-fill mb-5 mt-5">`;
        html += `       <li class="nav-item">`;
        html += `           <a class="btn btn-success mb-2" href="/projects/newProject/">Create New Project</a>`;
        html += `           <a class="btn btn-outline-info mb-2" href="/projects/edit/${project._id}">Edit This Project</a>`;
        html += `           <a class="btn btn-outline-danger mb-2" href="/projects/delete/${project._id}">Delete This Project</a>`;
        html += `       </li>`;
        html += `   </ul>`;
        html += `</div>`;
        html += `<div class="card mb-3 m-auto" style="max-width: 800px;">`;
        html += `    <div class="row g-0">`;
        html += `        <div class="col-md-4">`;
        html += `            <img src="${project.img}" class="img-fluid rounded-start" alt="${project.img_alt}" lazy="loading">`;
        html += `        </div>`;
        html += `        <div class="col-md-8">`;
        html += `            <div class="card-body">`;
        html += `                <h5 class="card-title">${project.name}</h5>`;
        html += `                <p class="card-text">${project.description}</p>`;
        html += `                <p class="card-text">Release date: ${project.release_date}</p>`;
        html += `                <p class="card-text">Technologies: `
        html += `                <ol class="breadcrumb">`;

        if(project.tech){ // Si el valor es positio entra, si no imprime el mensaje
            // Itera a través de las tecnologías del proyecto deseado y con bootstrap muestro de un formato mas amigable visualmente que tecnologias usa
            project.tech.forEach((technology) => {//TODO Arreglar bug en caso de que el usuario no especifique ningun framework o lenguaje
                html += `<li class="breadcrumb-item">${technology}</li>`;
            });
        }else{
                html += `<li>No se especifico ningun lenguaje o framework</li>`;
        }

        html += `                </ol></p>`;
        html += `                <p class="card-text">`;
        html += `                    <small class="text-body-secondary">`;
        html += `                        <a href="${project.site}" class="btn btn-info" target="_blank"> <i class="bi bi-globe2"></i> WebSite</a>`;
        html += `                        <a href="${project.repository}" class="btn btn-dark" target="_blank"><i class="bi bi-github"></i> Repository</a>`;
        html += `                    </small>`;
        html += `                </p>`;
        html += `            </div>`;
        html += `        </div>`;
        html += `    </div>`;
        html += `</div>`;
        html = createPage(project.name, html);
    } else {
        html = createPage(`Error`, "Project not found");
    }

    return html;
}

function createNewProjectForm() {
    let html = "";
        html += `<div class="container mt-5">`;
        html += `   <form form action="/projects/newProject" method="POST">`;
        html += `       <div class="mb-3">`;
        html += `           <label for="name" class="form-label">Nombre</label>`;
        html += `           <input type="text" class="form-control" id="name" name="name" placeholder="Type here proyect name" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="synopsis" class="form-label">Sinopsis</label>`;
        html += `           <textarea class="form-control" id="synopsis" name="synopsis" rows="4"></textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="description" class="form-label">Descripción</label>`;
        html += `           <textarea class="form-control" id="description" name="description" rows="4"></textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="release_date" class="form-label">Fecha de Lanzamiento</label>`;
        html += `           <input type="number" class="form-control" id="release_date" name="release_date" value="2023" min="2022" max="2100" />`;
        html += `       </div>`;
        html += `       <div class="row mb-3">`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Lenguajes</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="HTML" name="tech[]" value="HTML" />`;
        html += `                   <label class="form-check-label" for="HTML">HTML</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="CSS" name="tech[]" value="CSS" />`;
        html += `                   <label class="form-check-label" for="CSS">CSS</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="JavaScript" name="tech[]" value="JavaScript" />`;
        html += `                   <label class="form-check-label" for="JavaScript">JavaScript</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="PHP" name="tech[]" value="PHP" />`;
        html += `                   <label class="form-check-label" for="PHP">PHP</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Frameworks</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="Vue" name="tech[]" value="Vue" />`;
        html += `                   <label class="form-check-label" for="Vue">Vue.js</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="React" name="tech[]" value="React" />`;
        html += `                   <label class="form-check-label" for="React">React</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="bootstrap" name="tech[]" value="bootstrap" />`;
        html += `                   <label class="form-check-label" for="bootstrap">Bootstrap</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Database</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MongoDB" name="tech[]" value="MongoDB" />`;
        html += `                   <label class="form-check-label" for="MongoDB">MongoDB</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MySQL" name="tech[]" value="MySQL" />`;
        html += `                   <label class="form-check-label" for="MySQL">MySQL</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img" class="form-label">Imagen (URL)</label>`;
        html += `           <input type="text" class="form-control" id="img" name="img" placeholder="https://i.imgur.com/YOURLINK" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img_alt" class="form-label">Texto Alternativo de la Imagen</label>`;
        html += `           <input type="text" class="form-control" id="img_alt" name="img_alt" placeholder="Alt de imagen" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="repository" class="form-label">Repositorio (URL)</label>`;
        html += `           <input type="text" class="form-control" id="repository" name="repository"placeholder="https://github.com/Ezearevalodev/REPOSITORIO" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="site" class="form-label">Sitio Web (URL)</label>`;
        html += `           <input type="text" class="form-control" id="site" name="site" placeholder="https://LINK DEL SITIO/" />`;
        html += `       </div>`;
        html += `       <button type="submit" class="btn btn-success d-block m-auto w-50 mb-5">Crear nuevo projecto</button>`;
        html += `   </form>`;
        html += `</div>`;
    return createPage("Crear Nuevo Proyecto", html);
}
//TODO TRAER INFORMACIÓN
//TODO SOLUCIONAR SOLO RECIBE ID NO DATOS
//TODO HACER UNA VALIDACIÓN DE LOS CAMPOS
//TODO TRAER LOS DATOS DEL CHECKBOX
function editProjectForm(project) {
    let html = "";
        html += `<div class="container mt-5">`;
        html += `   <form form action="/projects/edit/${project._id}" method="POST">`;
        html += `       <div class="mb-3">`;
        html += `           <label for="name" class="form-label">Nombre</label>`;
        html += `           <input type="text" class="form-control" id="name" name="name" placeholder="Type here proyect name" value="${project.name}" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="synopsis" class="form-label">Sinopsis</label>`;
        html += `           <textarea class="form-control" id="synopsis" name="synopsis" rows="4">${project.synopsis}</textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="description" class="form-label">Descripción</label>`;
        html += `           <textarea class="form-control" id="description" name="description" rows="4">${project.description}</textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="release_date" class="form-label">Fecha de Lanzamiento</label>`;
        html += `           <input type="number" class="form-control" id="release_date" name="release_date" value="${project.release_date}" min="2022" max="2100" />`;
        html += `       </div>`;
        html += `       <div class="row mb-3">`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Lenguajes</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="HTML" name="tech[]" value="HTML" ${project.tech.includes("HTML") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="HTML">HTML</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="CSS" name="tech[]" value="CSS" ${project.tech.includes("CSS") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="CSS">CSS</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="JavaScript" name="tech[]" value="JavaScript" ${project.tech.includes("JavaScript") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="JavaScript">JavaScript</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="PHP" name="tech[]" value="PHP" ${project.tech.includes("PHP") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="PHP">PHP</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Frameworks</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="Vue" name="tech[]" value="Vue" ${project.tech.includes("Vue") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="Vue">Vue.js</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="React" name="tech[]" value="React" ${project.tech.includes("React") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="React">React</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="bootstrap" name="tech[]" value="bootstrap" ${project.tech.includes("bootstrap") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="bootstrap">Bootstrap</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Database</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MongoDB" name="tech[]" value="MongoDB" ${project.tech.includes("MongoDB") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="MongoDB">MongoDB</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MySQL" name="tech[]" value="MySQL" ${project.tech.includes("MySQL") ? 'checked' : ''}/>`;
        html += `                   <label class="form-check-label" for="MySQL">MySQL</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img" class="form-label">Imagen (URL)</label>`;
        html += `           <input type="text" class="form-control" id="img" name="img" placeholder="https://i.imgur.com/YOURLINK" value="${project.img}" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img_alt" class="form-label">Texto Alternativo de la Imagen</label>`;
        html += `           <input type="text" class="form-control" id="img_alt" name="img_alt" placeholder="Alt de imagen" value="${project.img_alt}" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="repository" class="form-label">Repositorio (URL)</label>`;
        html += `           <input type="text" class="form-control" id="repository" name="repository" placeholder="https://github.com/Ezearevalodev/REPOSITORIO" value="${project.repository}" />`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="site" class="form-label">Sitio Web (URL)</label>`;
        html += `           <input type="text" class="form-control" id="site" name="site" placeholder="https://LINK DEL SITIO/" value="${project.site}" />`;
        html += `       </div>`;
        html += `       <button type="submit" class="btn btn-info d-block m-auto w-50 mb-5">Guardar</button>`;
        html += `   </form>`;
        html += `</div>`;
    
    return createPage("Editar Proyecto", html);
}
//TODO TRAER INFORMACIÓN
//TODO SOLUCIONAR SOLO RECIBE ID NO DATOS
//TODO DESHABILITAR LOS CAMPOS
//TODO HACER UNA VALIDACIÓN DE LOS CAMPOS
//TODO TRAER LOS DATOS DEL CHECKBOX (REVISAR UN OPERADOR TERNARIO)
function deleteProjectForm(project) {
    let html = "";
        html += `<div class="container mt-5">`;
        html += `   <form form action="/projects/delete/${project._id}" method="POST">`;
        html += `       <div class="mb-3">`;
        html += `           <label for="name" class="form-label">Nombre</label>`;
        html += `           <input type="text" class="form-control" id="name" name="name" placeholder="Type here proyect name"value="${project.name}" disabled/>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="synopsis" class="form-label">Sinopsis</label>`;
        html += `           <textarea class="form-control" id="synopsis" name="synopsis" rows="4" disabled>${project.synopsis}</textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="description" class="form-label">Descripción</label>`;
        html += `           <textarea class="form-control" id="description" name="description" rows="4" disabled>${project.description}</textarea>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="release_date" class="form-label">Fecha de Lanzamiento</label>`;
        html += `           <input type="number" class="form-control" id="release_date" name="release_date" value="${project.release_date}" min="2022" max="2100" disabled/>`;
        html += `       </div>`;
        html += `       <div class="row mb-3">`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Lenguajes</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="HTML" name="tech[]" value="HTML" ${project.tech.includes("HTML") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="HTML">HTML</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="CSS" name="tech[]" value="CSS" ${project.tech.includes("CSS") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="CSS">CSS</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="JavaScript" name="tech[]" value="JavaScript" ${project.tech.includes("JavaScript") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="JavaScript">JavaScript</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="PHP" name="tech[]" value="PHP" ${project.tech.includes("PHP") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="PHP">PHP</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Frameworks</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="Vue" name="tech[]" value="Vue" ${project.tech.includes("Vue") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="Vue">Vue.js</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="React" name="tech[]" value="React" ${project.tech.includes("React") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="React">React</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="bootstrap" name="tech[]" value="bootstrap" ${project.tech.includes("bootstrap") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="bootstrap">Bootstrap</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `           <div class="col-4">`;
        html += `               <label class="form-label">Database</label>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MongoDB" name="tech[]" value="MongoDB" ${project.tech.includes("MongoDB") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="MongoDB">MongoDB</label>`;
        html += `               </div>`;
        html += `               <div class="form-check">`;
        html += `                   <input class="form-check-input" type="checkbox" id="MySQL" name="tech[]" value="MySQL" ${project.tech.includes("MySQL") ? 'checked' : ''} disabled/>`;
        html += `                   <label class="form-check-label" for="MySQL">MySQL</label>`;
        html += `               </div>`;
        html += `           </div>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img" class="form-label">Imagen (URL)</label>`;
        html += `           <input type="text" class="form-control" id="img" name="img" placeholder="https://i.imgur.com/YOURLINK"value="${project.img}" disabled/>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="img_alt" class="form-label">Texto Alternativo de la Imagen</label>`;
        html += `           <input type="text" class="form-control" id="img_alt" name="img_alt" placeholder="Alt de imagen"value="${project.img_alt}" disabled/>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="repository" class="form-label">Repositorio (URL)</label>`;
        html += `           <input type="text" class="form-control" id="repository" name="repository"placeholder="https://github.com/Ezearevalodev/REPOSITORIO" value="${project.repository}" disabled/>`;
        html += `       </div>`;
        html += `       <div class="mb-3">`;
        html += `           <label for="site" class="form-label">Sitio Web (URL)</label>`;
        html += `           <input type="text" class="form-control" id="site" name="site" placeholder="https://LINK DEL SITIO/" value="${project.site}" disabled/>`;
        html += `       </div>`;
        html += `       <button type="submit" class="btn btn-danger d-block m-auto w-50 mb-5">Eliminar this project</button>`;
        html += `   </form>`;
        html += `</div>`;

    return createPage("Eliminar proyecto", html);
}

export {createProjectPage, createPageDetail, createNewProjectForm, editProjectForm, deleteProjectForm};