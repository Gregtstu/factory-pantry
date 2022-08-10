import {postData} from '../services/postData.js'
 

document.querySelector('.registration').addEventListener('click' , ()=> {
    let i_name = document.querySelector('.name');
    let i_secondName = document.querySelector('.secondname');
    let i_email = document.querySelector('.email');
    let i_password = document.querySelector('.password');
    let i_role = document.querySelector('.role');
let obj = {
    "name": i_name.value, 
    "secondName": i_secondName.value, 
    "email": i_email.value, 
    "password": i_password.value, 
    "role": i_role.value,
    "creatorInfo": {"email": "null", "role": "Admin"}
}
console.log(obj);

// postData('http://localhost:5000/auth/registration', obj).then(data => console.log(data))
});