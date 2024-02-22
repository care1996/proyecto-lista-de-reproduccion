document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Obtiene los valores de usuario y contraseña
        var username = document.getElementById("usernameInput").value;
        var password = document.getElementById("passwordInput").value;

        // Verifica las credenciales
        if ((username === "lei" && password === "123") || (username === "vane" && password === "456")) {
            // Inicio de sesión exitoso
            alert("Inicio de sesión exitoso");
            window.location.href = "./reproductor.html"; // Redirige al main
        } else {
            // Inicio de sesión fallido, muestra mensaje de error
            alert("Usuario o contraseña incorrectos. Intente de nuevo.");
        }
    });
});
