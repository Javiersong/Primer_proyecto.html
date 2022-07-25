document.querySelector('.menu-btn').addEventListener('click', () => {
     document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.nuevos-fichajes', { delay: 500});
ScrollReveal().reveal('.cartas-banner-uno', { delay: 500});
ScrollReveal().reveal('.cartas-banner-dos', { delay: 500});