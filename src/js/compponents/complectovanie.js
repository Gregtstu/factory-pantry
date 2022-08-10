import { putData } from "../services/putData.js";

function complektovanie (data){
    putData('http://localhost:5000/product', data).then(data => console.log(data));
}

export {complektovanie};