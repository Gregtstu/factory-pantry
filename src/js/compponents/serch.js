import { getData } from "../services/getData.js";
function tableSearch() {
    document.getElementById('search-text').addEventListener('keydown', () => {
        getData('http://localhost:5000/product/id').then(data => console.log(data));
    
    });
    
}

tableSearch();
