const curPageClass = `active" aria-current="page"`;
const otherPageClass = `text-black"`;

var AboutClass, ResumeClass, ProjectsClass;
AboutClass = ResumeClass = ProjectsClass = otherPageClass;

if (window.location.href.includes('resume.html'))
    ResumeClass = curPageClass;
else if (window.location.href.includes('projects.html'))
    ProjectsClass = curPageClass;
else
    AboutClass = curPageClass;


var navHTML = 
    `<div class="container mt-3 mb-3">
        <h1 class="display-1">Emma Coronado</h1>
    </div>
        
    <div class="container sticky-top bg-light-subtle text-emphasis-light">
        <ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link ${AboutClass} href="index.html">About Me</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link ${ResumeClass} href="resume.html">Resume</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link ${ProjectsClass} href="projects.html">Projects</a>
            </li>
            
            <li class="nav-item">
                <a class="btn btn-link bi-linkedin nav-icon" href="https://www.linkedin.com/in/emma-coronado-465479298/" role="button"></a>
            </li>
            
            <li class="nav-item">
                <a class="btn btn-link bi-github nav-icon" href="https://github.com/emma-coronado" role="button"></a>
            </li>
            
        </ul>
    </div>`;

document.body.insertAdjacentHTML("afterbegin", navHTML);
