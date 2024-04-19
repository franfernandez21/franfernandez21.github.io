// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu a');

// Iterar sobre cada enlace y agregar un controlador de eventos clic
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener el atributo href del enlace
        const targetId = link.getAttribute('href').substring(1);

        // Obtener la sección correspondiente por su ID
        const targetSection = document.getElementById(targetId);

        // Calcular la altura del menú
        const menuHeight = document.querySelector('.static').offsetHeight;

        // Obtener la posición superior de la sección
        const targetSectionTop = targetSection.offsetTop;

        // Calcular el desplazamiento adicional para asegurar que el título sea visible
        const additionalOffset = 10; // Puedes ajustar esto según tus necesidades

        // Desplazar la página a la posición de la sección, ajustando el desplazamiento para dejar espacio para el menú
        window.scrollTo({
            top: targetSectionTop - menuHeight - additionalOffset,
            behavior: 'smooth'
        });
    });

});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

