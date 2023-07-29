// barra de navegacion
let menuIcon = document.querySelector('#menu-icom');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('activo')
}


// seccion d desplazamiento
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // enlaces de la barra de navegación activa
            navLinks.forEach(links => {
                links.classList.remove('activo')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo')
            });
            // seccion activa para la amimacion con el de desplazar
            sec.classList.add('mostrar-animacion');
        }
        // si desea usar la repetición de animación en el desplazamiento, use this
        else {
            sec.classList.remove('mostrar-animacion');
        }
    });

    // encabezado fijo
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    
    // elimine el ícono de alternar y la barra de navegación cuando haga clic en el enlace de la barra de navegación (desplazamiento)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('activo')

    let footer = document.querySelector('pie-pagina');
    footer
}




    



  