import { getData } from "../services/getData.js";


function showStore(){
    getData('http://localhost:5000/product').then(data => data.forEach(item => {
  if(item.unaccounted == null) {
    item.unaccounted = 0;
}
    document.querySelector('tbody').innerHTML += `
      <tr>
        <td>${item.title}</td>
        <td>${item.productId}</td>
        <td>${item.counter} (${item.unaccounted})</td>
        <td>${item.shelving}(${item.unaccounted})</td>
        <td>${item.shelf}(${item.unaccounted})</td>
      </tr>
  `

}));
    
}

showStore();