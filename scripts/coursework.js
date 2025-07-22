async function processJson() {
    const temp = await fetch ('content/coursework.json');
    const coursework = await temp.json();

    var toDisplay = "";

    for(i in coursework.courses) {
        let curClass = coursework.courses[i];
        toDisplay += `<div class="flex items-center">
                                <svg class="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>${curClass.name}</span>
                            </div>`;
    }

    document.getElementById('course-list').insertAdjacentHTML("beforeend", toDisplay);
}

processJson();
