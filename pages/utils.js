function createPage(title, content) {
    let html = '';
        html += ``
        html += `<!DOCTYPE html>`;
        html += `<html lang="en">`;
        html += `  <head>`;
        html += `    <meta charset="UTF-8" />`;
        html += `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />`;
        html += `    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"/>`;
        html += `    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>`;
        html += `    <link rel="stylesheet" href="res/css/styles.css" />`;
        html += `    <title>${title}</title>`;
        html += `  </head>`;
        html += `  <body>`;
        html += `    <header>`;
        html += `      <nav class="navbar navbar-expand-lg bg-body-tertiary">`;
        html += `        <div class="container-fluid">`;
        html += `          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">`;
        html += `          <span class="navbar-toggler-icon"></span>`;
        html += `          </button>`;
        html += `          <div class="collapse navbar-collapse m-auto text-center" id="navbarNav">`;
        html += `            <ul class="navbar-nav">`;
        html += `              <li class="nav-item">`;
        html += `                <a class="nav-link active" aria-current="page" href="/">Home</a>`;
        html += `              </li>`;
        html += `              <li class="nav-item">`;
        html += `                <a class="nav-link" href="/projects">Projects</a>`;
        html += `              </li>`;
        html += `              <li class="nav-item">`;
        html += `                <a class="nav-link" href="/projects">Users</a>`;
        html += `              </li>`;
        html += `              <li class="nav-item">`;
        html += `                <a class="nav-link" href="/api/projects">API</a>`;
        html += `              </li>`;
        html += `            </ul>`;
        html += `          </div>`;
        html += `        </div>`;
        html += `      </nav>`;
        html += `    </header>`;
        html += `    <main>`;
        html += `      <h1 class="text-center mb-4 mt-4">${title}</h1>`;
        html += `      ${content}`
        html += `    </main>`;
        html += `    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>`;
        html += `  </body>`;
        html += `</html>`;
    
  return html;
}

export{
  createPage
}