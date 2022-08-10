function checkRouts(){
    if(localStorage.getItem('token')){
        clearInterval(intervalId);
    }else{
        window.location = 'index.html';
    }

}
let intervalId = setInterval(()=> {
    checkRouts();

}, 100);





