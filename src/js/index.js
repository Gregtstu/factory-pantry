const btnLogin = document.querySelector('.btn__login');
const btnInfo = document.querySelector('.btn__info');
const btnHow = document.querySelector('.btn__how');




btnLogin.addEventListener('click', () => {
    document.querySelector('.login').classList.add('toggle2');
    document.querySelector('.how').classList.remove('toggle2');
    document.querySelector('.info').classList.remove('toggle2');

});

btnInfo.addEventListener('click', () => {
    document.querySelector('.info').classList.add('toggle2');
    document.querySelector('.login').classList.remove('toggle2');
    document.querySelector('.how').classList.remove('toggle2');

});


btnHow.addEventListener('click', () => {
    document.querySelector('.how').classList.add('toggle2');
    document.querySelector('.login').classList.remove('toggle2');
    document.querySelector('.info').classList.remove('toggle2');
});







