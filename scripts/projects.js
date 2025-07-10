async function processJson() {
    const temp = await fetch ('https://emmacoronado.com/projects.json');
    const projectInfos = await temp.json();

    var toDisplay = "";

    for(i in projectInfos.projects) {
        let curProj = projectInfos.projects[i];
        toDisplay += `</div></div>`;
    }

    document.getElementById('body').insertAdjacentHTML("beforeend", toDisplay);
}

processJson();
