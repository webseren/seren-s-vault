document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelectorAll('.slider img');

    setInterval(() => {
        slides[index].style.display = 'none';
        index = (index + 1) % slides.length; // Corrigi a fórmula
        slides[index].style.display = 'block';
    }, 5000); // Troca de imagem a cada 3 segundos
});

