document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Credenciales correctas
    const validUsername = "PlanitGo";
    const validPassword = "Lucian2024";

    if (username === validUsername && password === validPassword) {
        // Redirige al contenido principal
        window.location.href = "index.html";
    } else {
        // Muestra mensaje de error
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
});

