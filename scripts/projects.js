async function processJson() {
    const temp = await fetch ('https://emma-coronado.github.io/projects.json');
    const projectInfos = await temp.json();

    var toDisplay = "";

    for(i in projectInfos.projects) {
        let curProj = projectInfos.projects[i];
        toDisplay += `<div class="card my-1"><div class="card-body">`;

        toDisplay = toDisplay + `<h5>` + curProj.name + `</h5>`;
        toDisplay = toDisplay + `<small>` + curProj.tools + `</small><br>`;
        toDisplay += curProj.description;
        

        toDisplay += `</div></div>`;
    }

    document.getElementById('body').insertAdjacentHTML("beforeend", toDisplay);
}

processJson();
