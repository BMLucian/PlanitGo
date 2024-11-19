document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'PlanitGo' && password === 'Lucian2024') {
        sessionStorage.setItem('authenticated', true);
        window.location.href = 'introduccion.html'; // Redirige a la introducción
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});
