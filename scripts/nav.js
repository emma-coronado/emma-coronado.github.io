var navHTML = 
    `<nav class="fixed w-full bg-secondary-content/90 backdrop-blur-sm z-50 shadow-sm">
        <div class="container mx-auto px-6 py-1 flex justify-between items-center">
            <a href="#" class="text-2xl font-display font-bold gradient-text py-2">Emma Coronado</a>
            
            <div class="hidden lg:flex space-x-8">
                <a href="#about" class="nav-link font-medium active py-4">About</a>
                <a href="#projects" class="nav-link font-medium py-4">Projects</a>
                <a href="#education" class="nav-link font-medium py-4">Education</a>
                <a href="#contact" class="nav-link font-medium py-4">Contact</a>
                <button id="openResumeBtn" class="leading-none solid-shadow px-4 py-2 my-2 bg-primary text-white font-normal rounded hover:bg-opacity-90 transition-all ">
                    Full Resume
                    <i class="bi bi-box-arrow-up-right pl-1"></i>
                </a>
            </div>
            
            <button id="mobile-menu-button" aria-label="Open Navigation Menu" class="lg:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="lg:hidden hidden bg-white pb-5 px-6">
            <a href="#about" class="block py-2 font-medium">About</a>
            <a href="#projects" class="block py-2 font-medium">Projects</a>
            <a href="#education" class="block py-2 font-medium">Education</a>
            <a href="#contact" class="block py-2 font-medium">Contact</a>
            <button id="openResumeBtn" class="leading-none solid-shadow px-4 py-2 bg-primary text-white font-normal rounded hover:bg-opacity-90 transition-all">
                Full Resume
                <i class="bi bi-box-arrow-up-right pl-1"></i>
            </a>
        </div>
    </nav>`;

document.body.insertAdjacentHTML("afterbegin", navHTML);


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});