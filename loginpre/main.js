function login() {
    // Obtener los valores del formulario
    var username = document.querySelector("input[type='text']").value;
    var password = document.querySelector("input[type='password']").value;

    if (username === "roberto" && password === "1234") {
                 window.location.href = "curso.html";
            } else {
                 alert("Usuario o contraseña incorrectos");
             }
}