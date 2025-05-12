const btnLogin = document.querySelector('.login')
const btnReg = document.querySelector('.reg')


btnLogin.addEventListener('Click', ()=> {
    window.location.href = '../html/login.html';
});

btnReg.addEventListener('Click', ()=> {
    window.location.href = '../html/registration'
})