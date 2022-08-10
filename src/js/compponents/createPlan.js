import { postData } from "../services/postData.js";

function creatPlan(){
    let i_name = document.querySelector('.name');
    let i_izdelie = document.querySelector('.izdelie');
    let i_zakaz = document.querySelector('.zakaz');
    let i_count = document.querySelector('.count');
    let i_norms = document.querySelector('.norms');
    let i_srok = document.querySelector('.srok');
    let i_ceh = document.querySelector('.ceh');
    let i_document = document.querySelector('.document');
    let obj = {
            name : i_name.value,
            goods : i_izdelie.value,
            orderNumber : i_zakaz.value,
            quantity : i_count.value,
            normnormHours : i_norms.value,
            date : i_srok.value,
            customerShop : i_ceh.value,
            foundationDocument : i_document.value,
        }

    return obj;
 }

 const formBtn = document.querySelector('.button-plan');

 formBtn.addEventListener('click' , () => {
     console.log('click');
        postData('http://localhost:5000/acquisition', creatPlan()).then(date => console.log(date));
    });

export {creatPlan};