import {postData} from '../services/postData.js'


let i_login = document.querySelector('.login11');
let i_password = document.querySelector('.password');

document.querySelector('.submit').addEventListener('click' , ()=> {

let obj = {
    "email": i_login.value, 
    "password": i_password.value, 
}

postData('http://localhost:5000/auth/login', obj).then(data => setUserInfo(data))

function setUserInfo(data){
   
    if (data.token){
      localStorage.setItem('token', data.token);
      window.location = 'komplektovanie.html';  
    } else{
        alert('не правильно введен пароль или логин'); 
    }
}
});





