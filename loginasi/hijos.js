function Asistencia() {
    // Obtener los valores del formulario
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;

    if (nombres === "sergio" && apellidos === "escudero") {
        alert("¡Alumno Encontrado!");
        window.location.href = "porcentaje.html";
    } else {
        alert("Nombre o Apellido incorrecto");
    }
}






