document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.card');
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');
    const aboutBtn = document.getElementById('aboutBtn');
    const homeBtn = document.getElementById('homeBtn');

   

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('password').value;

        if (usuario === 'admin' && senha === '123456') {
            loginForm.reset();                       
            document.location.href='home.html';
        } else {
            alert('Usuário ou senha inválido!');
        }
    });

   
});