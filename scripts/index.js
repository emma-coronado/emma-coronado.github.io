// Update current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Modal functionality
const modal = document.getElementById('resumeModal');
const openBtn = document.getElementById('openResumeBtn');
const openBtn2 = document.getElementById('openResumeBtn2');
const closeBtn = document.getElementById('closeResumeBtn');
const downloadBtn = document.getElementById('downloadResumeBtn');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        modal.classList.remove('invisible');
        modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
});

openBtn2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        modal.classList.remove('invisible');
        modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
});

const closeModal = () => {
    modal.classList.remove('active');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.classList.add('invisible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
};

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});