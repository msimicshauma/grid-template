const btnOpen = document.querySelector('.fa-align-left');
const btnClose = document.querySelector('.fa-times');
const mobileNav = document.querySelector('.mobile-nav');
const mainContent = document.querySelector('.main-wrapper');

btnOpen.addEventListener('click', () => {
    mainContent.style.display = 'none';
    mobileNav.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
    mainContent.style.display = 'grid';
    mobileNav.style.display = 'none';
});