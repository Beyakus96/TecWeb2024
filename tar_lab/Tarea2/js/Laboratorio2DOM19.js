// Añadir elementos a los arrays
var Requisitos = [];
var Perfil = [];
var Plan = [];
var Datos =[];

Requisitos.push("Requisito1", "Requisito2");
Perfil.push("Perfil1", "Perfil2");

window.onload = function() {
    var nombre = document.getElementById('Nombre').value;
    var sexo = document.querySelector('input[name="Radio"]:checked').value;
    var materia1 = document.getElementById('materia1').checked ? 'INF 216' : '';
    var materia2 = document.getElementById('materia2').checked ? 'INF 314' : '';
    var carreraSelect = document.getElementById('opciones');
    var carrera = carreraSelect.options[carreraSelect.selectedIndex].text;
    
    alert(nombre + '\nSexo: ' + sexo + '\nCarrera: ' + carrera + '\nMaterias: ' + materia1 + ', ' + materia2);
    
    var requisitos = document.getElementById("Requisitos");
    var perfilEgreso = document.getElementById("PerfilEgreso");
    var planEstudios = document.getElementById("PlanEstudios");
    var misDatos = document.getElementById("MisDatos");

    requisitos.addEventListener("mouseover", function() {
        requisitos.style.color = "white";
        requisitos.style.backgroundColor = "blue";
    });
    requisitos.addEventListener("mouseout", function() {
        requisitos.style.color = "";
        requisitos.style.backgroundColor = "";
    });

    requisitos.addEventListener("click", function() {
        var contenido = document.getElementById("contenido");
        contenido.innerHTML = "";
        
        var titulo = document.createElement('h1');
        titulo.textContent = "REQUISITOS DE INGRESO";
        titulo.style.color = "red";
        contenido.appendChild(titulo);

        var parrafo = document.createElement('p');
        parrafo.textContent = "Podrán ingresar a la Carrera de Licenciatura en Ingeniería en Informática los Bachilleres en:";
        contenido.appendChild(parrafo);

        var lista = document.createElement('ul');
        var item1 = document.createElement('li');
        item1.textContent = "Ciencias";
        lista.appendChild(item1);
        var item2 = document.createElement('li');
        item2.textContent = "Ciencias con instrumentación en Informática";
        lista.appendChild(item2);
        var item3 = document.createElement('li');
        item3.textContent = "Industrial (Electrónica, Electricidad, Electromecánica)";
        lista.appendChild(item3);
        contenido.appendChild(lista);
    });

    perfilEgreso.addEventListener("mouseover", function() {
        perfilEgreso.style.color = "white";
        perfilEgreso.style.backgroundColor = "blue";
    });
    perfilEgreso.addEventListener("mouseout", function() {
        perfilEgreso.style.color = "";
        perfilEgreso.style.backgroundColor = "";
    });

    perfilEgreso.addEventListener("click", function() {
        var contenido = document.getElementById("contenido");
        contenido.innerHTML = "";
        
        var titulo = document.createElement('h1');
        titulo.textContent = "PERFIL DEL LICENCIADO";
        titulo.style.color = "gold";
        contenido.appendChild(titulo);

        var parrafo = document.createElement('p');
        parrafo.textContent = "El licenciado en Ingeniería en Informática egresado de esta carrera debe ser un profesional de la ingeniería poseedor de conocimientos multidisciplinarios, científicos y tecnológicos necesarios para aplicar la informática en diversos ambientes tales como:";
        contenido.appendChild(parrafo);

        var lista = document.createElement('ul');
        var item1 = document.createElement('li');
        item1.textContent = "Teleinformática";
        lista.appendChild(item1);
        var item2 = document.createElement('li');
        item2.textContent = "Industria";
        lista.appendChild(item2);
        var item3 = document.createElement('li');
        item3.textContent = "Comercio";
        lista.appendChild(item3);
        var item4 = document.createElement('li');
        item4.textContent = "Educación";
        lista.appendChild(item4);
        var item5 = document.createElement('li');
        item5.textContent = "Doméstico";
        lista.appendChild(item5);
        contenido.appendChild(lista);
    });

    // Evento clic para mostrar las imágenes al hacer clic en "Plan de Estudio"
    planEstudios.addEventListener("click", function() {
        clicks3(); // Llama a la función clicks3() al hacer clic en "Plan de Estudio"
    });

    // Agregar clases de estilo al botón "Plan de Estudios"
    planEstudios.classList.add('boton-seccion');

    planEstudios.addEventListener("mouseover", function() {
        planEstudios.style.color = "white";
        planEstudios.style.backgroundColor = "blue";
    });
    planEstudios.addEventListener("mouseout", function() {
        planEstudios.style.color = "";
        planEstudios.style.backgroundColor = "";
    });

    misDatos.addEventListener("mouseover", function() {
        misDatos.style.color = "white";
        misDatos.style.backgroundColor = "blue";
    });
    misDatos.addEventListener("mouseout", function() {
        misDatos.style.color = "";
        misDatos.style.backgroundColor = "";
    });
    
    misDatos.addEventListener("click", datos); // Agregamos el evento clic para la función "datos"
};

function clicks3() {
    document.getElementById("abajo").style.display = "block";
    var contenido3 = document.getElementById("contenido");
    var imgElement = document.createElement('img');
    contenido3.innerHTML = "";
   
    var imageUrl1 = "../img/I_A.gif";
    var imageUrl2 = "../img/II_A.gif";
    var imageUrl3 = "../img/III_A.gif";

    var elew = document.createElement('button');
    elew.textContent = "I";
    elew.addEventListener('click', function() {
        imgElement.src = imageUrl1;
    });
    contenido3.appendChild(elew);

    var ebu1 = document.createElement('button');
    ebu1.textContent = "II";
    ebu1.addEventListener('click', function() {
        imgElement.src = imageUrl2;
    });
    contenido3.appendChild(ebu1);

    var ebu2 = document.createElement('button');
    ebu2.textContent = "III";
    ebu2.addEventListener('click', function() {
        imgElement.src = imageUrl3;
    });
    contenido3.appendChild(ebu2);

    var salt = document.createElement('br'); 
    contenido3.appendChild(salt);
    contenido3.appendChild(imgElement);
}

// Función "datos" para mostrar información del estudiante al hacer clic en "Mis Datos"
function datos() {
    var cont = document.getElementById("contenido");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    var nom = document.getElementById("Nombre").value;
    var sex = validar();
    var carv = carrera();
    // Crear elemento para el nombre
    var nu = document.createElement('i');
    var no1 = "Nombre del estudiante";
    nu.textContent = no1 + ": " + nom;
    cont.appendChild(nu);
    cont.appendChild(document.createElement('br'));
    // Crear elemento para el sexo
    var ne = document.createElement('i');
    var no2 = "Sexo del estudiante";
    ne.textContent = no2 + ": " + sex;
    cont.appendChild(ne);
    cont.appendChild(document.createElement('br'));
    // Crear elemento para la carrera
    var car = document.createElement('i');
    var no3 = "Carrera del estudiante";
    car.textContent = no3 + ": " + carv;
    cont.appendChild(car);
}

// Función para validar el sexo seleccionado
function validar() {
    var elem = document.getElementsByName("Radio");
    var sexoo = 0;
    for (var i = 0; i < elem.length; i++) {
        if (elem[i].checked == true) {
            sexoo = elem[i].value;
        }
    }
    return sexoo;
}

// Función para obtener la carrera seleccionada
function carrera() {
    var e10 = document.getElementById("opciones");
    var car = null;
    for (var i = 0; i < e10.options.length; i++) {
        if (e10.options[i].selected) {
            car = e10.options[i].text;
        }
    }
    return car;
}

misDatos.addEventListener("click", function() {
    // Ocultar el formulario al hacer clic en "Mis Datos"
    var formulario = document.getElementById("formulario");
    formulario.style.display = "none";
});