$(document).ready(function () {
   // Ocultar las imágenes
    $(".perfilSocio img").css("opacity", "0");
    $(".descripcionSocio").css("opacity", "0");

    //asignar escala a la imagen pequeña y rotada inicialmene
    $(".perfilSocio img").css("transform", `scale(0.5)`);
    $(".perfilSocio img").css("transform", `rotate(90deg)`);

    // Función que se ejecuta cada vez que el usuario desplaza la página 
    $(window).scroll(() => {
        // Obtener la posición del scroll
        const scrollTop = $(window).scrollTop();
        // Obtener la altura de la ventana
        const windowHeight = $(window).height();
 
        // Mostrar las imágenes que estén completamente visible de la página.
        $(".perfilSocio img").each((i, img) => {
            // Obtener la posición del elemento
            const offsetTop = $(img).offset().top;
            // Si el elemento está completamente visible, mostrarlo
            if (offsetTop < scrollTop + windowHeight) {
                $(img).css("transform", "scale(1)");
                $(img).css("transition", "2.2s");
                $(img).css("opacity", "1");
            }

            $(img).hover(function () {
                $(this).css("transform", `scale(1.1)`);
                $(this).css("transition", "1s");

            }, function () {
                $(this).css("transform", `scale(1)`);
                $(this).css("transition", "0.4s");
            }
            );
        });

        $(".descripcionSocio").each((i, div) => {
            // Obtener la posición del elemento
            const offsetTop = $(div).offset().top;
            // Si el elemento está completamente visible, mostrarlo
            if (offsetTop < scrollTop + windowHeight) {
                $(div).css("opacity", "1");
                $(div).css("transition", "1.5s");
            }
        });
    });
  
});



function cargaTexto() {
    fetch("../js/ficheroJSON.json").then(ajaxOK);
}

function ajaxOK(response) {
    response.json().then(muestraTexto);
}

function muestraTexto(json) {
    
    for(let i = 0 ; i < json.socios.length ; i++){
        document.getElementById(`socio${i+1}Nombre`).innerHTML = json.socios[i].nombre;
        document.getElementById(`socio${i+1}Texto`).innerHTML = json.socios[i].descripcion;
        document.getElementById(`socio${i+1}Imagen`).src = json.socios[i].foto;
    }
}

cargaTexto();


