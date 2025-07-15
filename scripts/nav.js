var navHTML = 
    `<nav class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-display font-bold gradient-text">Emma Coronado</a>
            
            <div class="hidden md:flex space-x-8">
                <a href="#about" class="nav-link font-medium active pt-1">About</a>
                <a href="#projects" class="nav-link font-medium pt-1">Projects</a>
                <a href="#skills" class="nav-link font-medium pt-1">Skills</a>
                <a href="#contact" class="nav-link font-medium pt-1">Contact</a>
                <a href="" class="leading-none solid-shadow px-4 py-2 bg-primary text-white font-normal rounded hover:bg-opacity-90 transition-all ">
                    Full Resume
                </a>
            </div>
            
            <button id="mobile-menu-button" class="md:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white pb-4 px-6">
            <a href="#about" class="block py-2 font-medium">About</a>
            <a href="#projects" class="block py-2 font-medium">Projects</a>
            <a href="#skills" class="block py-2 font-medium">Education</a>
            <a href="#contact" class="block py-2 font-medium">Contact</a>
            
        </div>
    </nav>`;

document.body.insertAdjacentHTML("afterbegin", navHTML);