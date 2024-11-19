document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'PlanitGo' && password === 'Lucian2024') {
        window.location.href = 'introduccion.html'; // Página inicial tras login exitoso
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});
