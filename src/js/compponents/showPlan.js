import { getData } from "../services/getData.js";

function showPlan(){
    getData('http://localhost:5000/acquisition').then(data => data.forEach(item => {
     
          document.querySelector('tbody').innerHTML += `
            <tr>
              <td>${item.name}</td>
              <td>${item.goods}</td>
              <td>${item.orderNumber} </td>
              <td>${item.quantity}</td>
              <td>${item.normnormHours}</td>
              <td>${item.date}</td>
              <td>${item.customerShop}</td>
              <td>${item.foundationDocument}</td>
            </tr>
        `
      }));
}

showPlan();
