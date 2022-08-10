import {postData} from "./services/postData.js"

document.querySelector('.open-popup').addEventListener('click' , ()=> {
    console.log('click');
    funcPopup();
})
function funcPopup(){
  
    let popupBg = document.querySelector('.popup__bg'); 
    let popup = document.querySelector('.popup'); 
    let openPopupButton = document.querySelectorAll('.open-popup'); 
    let closePopupButton = document.querySelector('.close-popup');
    
  
    
    
    openPopupButton.forEach((button) => { 
        button.addEventListener('click', (e) => { 
            e.preventDefault(); 
            popupBg.classList.add('active'); 
            popup.classList.add('active'); 
        })
    });
    
    closePopupButton.addEventListener('click',() => { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    });
    
    
    document.addEventListener('click', (e) => { 
        if(e.target === popupBg) { 
            popupBg.classList.remove('active'); 
            popup.classList.remove('active'); 
        }
    });
}

document.querySelector('.submit__btn').addEventListener('click' , ()=> {
    let i_title = document.querySelector('.title');
    let i_productId = document.querySelector('.productId');
    let i_counter = document.querySelector('.counter');
    let i_shelving = document.querySelector('.shelving');
    let i_shelf = document.querySelector('.shelf');
    let obj = {
            "title": i_title.value,
            "productId":+i_productId.value,
            "counter": +i_counter.value,
            "shelving": +i_shelving.value,
            "shelf": +i_shelf.value
        }
    
        postData('http://localhost:5000/product' ,  obj).then(data => console.log(data))
});