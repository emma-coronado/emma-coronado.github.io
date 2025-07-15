async function processJson() {
    const temp = await fetch ('/content/projects.json');
    const projectInfos = await temp.json();

    var toDisplay = "";

    // for(i in projectInfos.projects) {
    for(let i=0; i<3; i++) {
        let curProj = projectInfos.projects[i];

        let toolPills = "";
        for(n in curProj.tools) {
            toolPills += `<span class="text-xs bg-gray-200 px-2 py-1 rounded-full">${curProj.tools[n]}</span>`;
        }

        toDisplay += `<div class="solid-shadow project-card bg-gray-50 rounded-xl overflow-hidden">
                    <div class="h-56 overflow-hidden">
                        <div class="browser-mockup bg-gradient-to-br from-primary to-purple-600 h-full">
                            <div class="flex items-center justify-center h-full text-white">
                                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-2xl font-display font-extrabold">${curProj.name}</h3>
                            <span class="text-xs font-medium text-primary px-3 py-1 rounded-full ml-3 border border-primary">Front-End</span>
                        </div>
                        <p class="text-gray-600 mb-4">${curProj.description}</p>
                        <div class="flex flex-wrap gap-2 mb-6">${toolPills}</div>
                        <div class="flex justify-between">
                            <a href="#" class="text-primary font-medium flex items-center hover:underline">
                                View Project
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                            <a title="${curProj.name + " GitHub Repository"}" href="${curProj.links[0].url}" class="text-gray-600 hover:text-gray-900">
                                <i class="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
    }

    document.getElementById('project-cards').insertAdjacentHTML("beforeend", toDisplay);
}

processJson();

// sample card

// <div class="solid-shadow project-card bg-gray-50 rounded-xl overflow-hidden">
//     <div class="h-56 overflow-hidden">
//         <div class="browser-mockup bg-gradient-to-br from-primary to-purple-600 h-full">
//             <div class="flex items-center justify-center h-full text-white">
//                 <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
//                 </svg>
//             </div>
//         </div>
//     </div>
//     <div class="p-6">
//         <div class="flex justify-between items-center mb-3">
//             <h3 class="text-2xl font-display font-extrabold">E-commerce UI</h3>
//             <span class="text-xs font-medium text-primary px-3 py-1 rounded-full ml-3 border border-primary">Front-End</span>
//         </div>
//         <p class="text-gray-600 mb-4">
//             A responsive e-commerce interface with product filtering, cart functionality, and checkout process.
//         </p>
//         <div class="flex flex-wrap gap-2 mb-6">
//             <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">React</span>
//             <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">Redux</span>
//             <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">Tailwind CSS</span>
//         </div>
//         <div class="flex justify-between">
//             <a href="#" class="text-primary font-medium flex items-center hover:underline">
//                 View Project
//                 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//             </a>
//             <a href="#" class="text-gray-600 hover:text-gray-900">
//                 <i class="fab fa-github text-xl"></i>
//             </a>
//         </div>
//     </div>
// </div>