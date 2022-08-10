import { getData } from "./getData.js";




function showDeficite(){
    getData('http://localhost:5000/product-report').then(data => data.forEach(element => {
    console.log(element);
    document.querySelector('tbody').innerHTML = `
    <tr>
    <td>${element.id}</td>
    <td>${element.title}</td>
    <td>${element.insufficiency}</td>
    <td>Пеrrrrrrrrrrr</td>
    <td>оплачено/не оплачено</td>
    <td>12.05.2022</td>
    </tr>
    `
    
}))
}
showDeficite();


