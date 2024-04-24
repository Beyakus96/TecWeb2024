var CONT=["Instituci&oacute;n de referencia regional de educaci&oacute;n superior, basada en valores, formadora de profesionales emprendedores, &iacute;ntegros, con conciencia social y pensamientos cr&iacute;ticos; generadoras de conocimiento innovador a trav&eacute;s de la docencia, la investigaci&oacute;n pertinente, la extensi&oacute;n, la producci&oacute;n y servicios, a fin de crear iniciativas para el desarrollo nacional, que contribuyan a erradicar la pobreza y mejorar la calidad de la vida de la poblaci&oacute;n paname&#241;a.",
           "Ser una instituci&oacute;n reconocida y acreditada a nivel nacional e internacional, caracterizada por la excelencia en la formaci&oacute;n de profesionales, integrada con la docencia, la investigaci&oacute;n pertinente, el desarrollo tecnol&oacute;gico, la producci&oacute;n y la extensi&oacute;n, para contribuir al desarrollo nacional",
           "Excelencia y Calidad, Integridad; Responsabilidad, Justicia, Respeto, Tolerancia, Pluralismo, Equidad, Innovaci&oacute;n."];
var IMAG=["Lab01","Lab02","Lab03","Lab04","Lab05","Lab06","Lab07"];

function mostrarTexto(id) {
    var texto = CONT[id];
    document.getElementById("muestra").innerHTML = "<p>" + texto + "</p>";

    // Cambiar el color del botón
    var botones = document.querySelectorAll("input[type='button']");
    botones.forEach((boton) => {
        boton.style.color = "#246088";
    });
    document.getElementById(id).style.color = "red";
}

var IMAG = ["Lab01", "Lab02", "Lab03", "Lab04", "Lab05", "Lab06", "Lab07"];
var imagenIndex = 0; 

function cambiarImagenAutomaticamente() {
    imagenIndex = (imagenIndex + 1) % IMAG.length; 
    var nuevaImagen = IMAG[imagenIndex];
    document.getElementById("imagen").src = "../img/" + nuevaImagen + ".jpg";
}

setInterval(cambiarImagenAutomaticamente, 15000);

function mostrarReloj() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var hora_actual = hora + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").innerText = hora_actual;
}

function cambiarColorPie() {
    var pie = document.getElementById("abajo");
    var color = pie.style.backgroundColor;
    switch(color) {
        case "":
        case "black":
            pie.style.backgroundColor = "black";
            break;
        case "red":
            pie.style.backgroundColor = "green";
            break;
        case "green":
            pie.style.backgroundColor = "blue";
            break;
    }
}
// Cambia el Color de Pie de pagina cada 3 segundos
setInterval(cambiarColorPie, 3000);
 
