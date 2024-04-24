document.addEventListener("DOMContentLoaded", function() {
  // Cambiar el contenido del elemento con id "nombre" cuando se carga la página
  document.getElementById("nombre").textContent = "Laboratorio de Javascript";

  // Array con los mensajes a mostrar
  const mensajes = [
      "Uso Javascript externo al HTML",
      "Implemento funciones manejadoras de eventos",
      "Uso manejadores de eventos semánticos",
      "Uso del método del objeto document: getElementById",
      "Obtengo valores de diferentes campos de formularios",
      "Manipulo el contenido de diferentes campos de formulario",
      "Manipulo el estilo del contenido de la página"
  ];

  // Contador para el índice del mensaje actual
  let indiceMensaje = 0;

  // Función para cambiar el contenido del elemento con id "CFP"
  function cambiarMensaje() {
      document.getElementById("CFP").textContent = mensajes[indiceMensaje];
      indiceMensaje = (indiceMensaje + 1) % mensajes.length; // Avanzar al siguiente mensaje circularmente
  }

  // Cambiar el contenido del elemento con id "CFP" cada 10 segundos
  setInterval(cambiarMensaje, 10000);

  // Mostrar el formulario cuando se haga clic en el enlace con ID "formulario"
  document.getElementById("formulario").addEventListener("click", function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      document.getElementById("form").style.display = "block";
  });

  // Activar eventos al hacer clic en el botón enviar dentro del formulario
  document.getElementById("submit").addEventListener("click", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe
      
      var cedula = document.querySelector("input[type='text']").value;
      var dias = [];
      document.querySelectorAll("input[type='checkbox']").forEach(function(checkbox) {
          if (checkbox.checked) {
              dias.push(checkbox.nextElementSibling.textContent);
          }
      });
      var turno = document.querySelector("input[name='turno']:checked").nextElementSibling.textContent;
      var carrera = document.getElementById("carrera").value;

      // Mostrar los datos en el pie de página
      document.getElementById("pie").textContent = "Cédula: " + cedula + ", Días de clase: " + dias.join(", ") + ", Turno: " + turno + ", Carrera: " + carrera;
  });

  // Disminuir el tamaño de la imagen cuando se haga clic en ella
  document.getElementById("fotos").addEventListener("click", function() {
      this.style.width = "50%";
      this.style.height = "50%";
  });

  // Mostrar puntos obtenidos al hacer clic en el botón correspondiente
  document.getElementById("0").addEventListener("click", function() {
      var respuestasCorrectas = 0;
      // Contar puntos por cada respuesta correcta
      if (document.querySelector("input[type='radio'][name='turno'][value='1']").checked) {
          respuestasCorrectas++; // Turno diurno
      }
      if (document.getElementById("carrera").value === "1") {
          respuestasCorrectas++; // Carrera LIGEE
      }
      // Contar los días seleccionados
      var diasSeleccionados = document.querySelectorAll("input[type='checkbox']:checked").length;
      // Sumar los puntos
      respuestasCorrectas += diasSeleccionados;
      // Mostrar los puntos obtenidos
      alert("Puntos obtenidos: " + respuestasCorrectas);
  });

  // Colocar respuestas correctas al hacer clic en el botón correspondiente
  document.getElementById("1").addEventListener("click", function() {
      // Llenar el formulario con las respuestas correctas
      document.querySelector("input[type='text']").value = "x-xxx-xxxx"; // Cédula
      document.querySelectorAll("input[type='checkbox']").forEach(function(checkbox) {
          checkbox.checked = ["Lunes", "Martes", "Jueves"].includes(checkbox.nextElementSibling.textContent);
      });
      document.querySelector("input[type='radio'][name='turno'][value='1']").checked = true; // Turno diurno
      document.getElementById("carrera").value = "1"; // Carrera LIGEE
  });
});