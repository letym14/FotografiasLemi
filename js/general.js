
// Comprueba si se ha aceptado la cookie
function checkCookie() {
    if (localStorage.getItem("cookieAccepted") == null) {
        // Si no se ha aceptado, muestra el popup
        showPopup();
    }
}

// Muestra el popup
function showPopup() {
    var popup = document.getElementById("cajaCookies");
    popup.style.display = "block";
}


// Comprueba si se ha aceptado la cookie al cargar la página
checkCookie();

// cuando se clicka en el botón de aceptar cookies, se oculta el popup y se guarda la aceptación de la cookie
document.getElementById("botonAceptarCookies").addEventListener("click", function() {
    var popup = document.getElementById("cajaCookies");
    popup.style.display = "none";
    localStorage.setItem("cookieAccepted", "true");
});

document.querySelectorAll(".enlaceSocial").forEach((element) => {
    element.addEventListener("mouseenter", ()=>{
        element.style.transform = "translateY(-5px)";
        element.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
        element.style.borderRadius = "20px";
    })
});

document.querySelectorAll(".enlaceSocial").forEach((element) => {
    element.addEventListener("mouseout", ()=>{
        element.style.transform = "translateY(0px)";
        element.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        element.style.borderRadius = "10px";
    })
});

document.querySelector(".spanFinal").addEventListener("mouseenter", ()=>{
    document.querySelector(".spanFinal").innerHTML = "¡Gracias por visitar a la página web!";
});

document.querySelector(".spanFinal").addEventListener("mouseout", ()=>{
    document.querySelector(".spanFinal").innerHTML = "DAW-2023";
})




function loadDoc() {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../js/ficheroXML.xml", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
}

function myFunction(xml) {
    let i = 0;
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("Valoracion");

    for(i = 0; i < x.length; i++){
        document.getElementById(`opinion${i+1}Imagen`).src = x[i].getElementsByTagName("Imagen")[0].childNodes[0].nodeValue;
        document.getElementById(`opinion${i+1}Titulo`).innerHTML = x[i].getElementsByTagName("Titulo")[0].childNodes[0].nodeValue;
        document.getElementById(`opinion${i+1}Texto`).innerHTML = x[i].getElementsByTagName("Review")[0].childNodes[0].nodeValue;
    }
}

loadDoc();

