
function login() {
    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "marcela" && password === "4321") {
        window.location.href = "hijos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}