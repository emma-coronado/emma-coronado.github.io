var projNum = 3;
let allProjects = [];
let activeFilters = new Set();

async function loadProjects() {
    const temp = await fetch('/content/projects.json');
    const projectInfos = await temp.json();
    allProjects = projectInfos.projects;
    
    // Generate filter buttons
    generateFilterButtons();
    
    // Display projects
    displayProjects();
}

function generateFilterButtons() {
    const allTools = new Set();
    
    // Collect all unique tools from all projects
    allProjects.forEach(project => {
        project.tools.forEach(tool => {
            allTools.add(tool);
        });
    });
    
    // Sort tools alphabetically
    const sortedTools = Array.from(allTools).sort();
    
    // Generate filter buttons
    let filterButtonsHTML = '';
    sortedTools.forEach(tool => {
        filterButtonsHTML += `
            <button class="filter-btn badge badge-outline badge-lg cursor-pointer hover:badge-primary transition-colors" 
                    data-filter="${tool}">
                ${tool}
            </button>
        `;
    });
    
    document.getElementById('filter-buttons').innerHTML = filterButtonsHTML;
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            toggleFilter(filter, this);
        });
    });
    
    // Add event listener to clear filters button
    document.getElementById('clear-filters').addEventListener('click', clearAllFilters);
}

function toggleFilter(filter, buttonElement) {
    if (activeFilters.has(filter)) {
        // Remove filter
        activeFilters.delete(filter);
        buttonElement.classList.remove('badge-primary');
        buttonElement.classList.add('badge-outline');
    } else {
        // Add filter
        activeFilters.add(filter);
        buttonElement.classList.remove('badge-outline');
        buttonElement.classList.add('badge-primary');
    }
    
    displayProjects();
}

function clearAllFilters() {
    activeFilters.clear();
    
    // Reset all filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.remove('badge-primary');
        button.classList.add('badge-outline');
    });
    
    displayProjects();
}

function getFilteredProjects() {
    if (activeFilters.size === 0) {
        return allProjects;
    }
    
    return allProjects.filter(project => {
        // Check if project has at least one of the active filters (OR logic)
        // Change to .every() for AND logic (project must have ALL selected filters)
        return Array.from(activeFilters).some(filter => 
            project.tools.includes(filter)
        );
    });
}

function displayProjects() {
    const filteredProjects = getFilteredProjects();
    let toDisplay = "";
    
    const projectsToShow = projNum === -1 ? filteredProjects.length : Math.min(projNum, filteredProjects.length);
    
    for(let i = 0; i < projectsToShow; i++) {
        let curProj = filteredProjects[i];
        
        let toolPills = "";
        for(n in curProj.tools) {
            // Highlight active filter tools
            const isActiveFilter = activeFilters.has(curProj.tools[n]);
            const badgeClass = isActiveFilter ? 'badge badge-primary' : 'badge badge-outline badge-neutral';
            toolPills += `<span class="${badgeClass}">${curProj.tools[n]}</span>`;
        }

        toDisplay += `<div class="solid-shadow project-card bg-primary-content rounded-xl overflow-hidden">
                    
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-2xl font-display font-extrabold">${curProj.name}</h3>
                            
                        </div>
                        <p class="mb-4">${curProj.description}</p>
                        <div class="flex flex-wrap gap-2 mb-6">${toolPills}</div>
                        <div class="flex justify-between">
                            <div></div>`;

        if (curProj.links.hasOwnProperty("github")) {
            toDisplay += `<a title="${curProj.name + " GitHub Repository"}" href="${curProj.links.github}" target="_blank" class="text-neutral hover:text-primary">
                            <i class="fab fa-github text-2xl"></i>
                        </a>`
        }
        
        toDisplay += `</div> </div> </div>`;
    }
    
    // Show message if no projects match filters
    if (filteredProjects.length === 0 && activeFilters.size > 0) {
        toDisplay = `<div class="col-span-full text-center py-8">
                        <p class="text-lg text-gray-500">No projects match the selected filters.</p>
                        <button onclick="clearAllFilters()" class="btn btn-primary mt-4">Clear Filters</button>
                    </div>`;
    }

    document.getElementById('project-cards').innerHTML = toDisplay;
}

async function processJson() {
    await loadProjects();
}

processJson();

// Update the "View More/Fewer Projects" button functionality
document.getElementById("moreProjBtn").onclick = function() {
    // set display and project card amt values
    if (projNum == 3) {
        projNum = -1;
        document.getElementById("moreProjBtn").innerText = "View Fewer Projects";
        document.getElementById("moreProjBtn").title = "View Fewer Projects";
    }
    else {
        projNum = 3;
        document.getElementById("moreProjBtn").innerText = "View More Projects";
        document.getElementById("moreProjBtn").title = "View More Projects";
    }

    document.getElementById("projFilterSection").toggleAttribute("hidden");

    // re-render cards with current filters
    displayProjects();

    // scroll back to top of project section if it exists
    if (document.getElementById("projects")) {
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
    }
    clearAllFilters();
};
