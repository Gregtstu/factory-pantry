import {postData} from '../services/postData.js'


let arr = [];
let arr2 = arr;



document.getElementById('fileUpload').addEventListener('change', function(){// команды alert для отображения состояния input (type-file)
  if( this.value ){
    alert('файл добавлен')
  } else { // Если после выбранного тыкнули еще раз, но дальше cancel
    alert('Файл не выбран')
  }
});


document.querySelector('.file-btn').addEventListener('click' , () => { // слушатель на кнопке скомплектовать
  UploadProcess();
  setTimeout(()=>{
    console.log(arr2);
    postData('http://localhost:5000/product-report', arr2).then(data => data.forEach(item => {
    console.log(item);
    if(item.type == 'full' ){
      item.data.forEach(elm => {
        showData (elm.title, elm.counter);
        complPush(elm.title);
        }); 
      }
      
      else if (item.type == 'incomplete' ){
        item.data.forEach(elm => {
          showData11 (elm.title, elm.insufficiency);
          complPush2(elm.title);
        });
      }else if (item.type == 'goodsDoNotExist' ){
        item.data.forEach(elm => {
          // console.log(elm.title, elm.counter);
          showData22 (elm.title, elm.count);
          complPush3(elm.title);
        });
      }
      
    }));
      
  }, 1000)

  setTimeout(function(){
  document.querySelector(".tabContainer").classList.remove('none');
  }, 2000);
});

function UploadProcess() {
  //Reference the FileUpload element.
  var fileUpload = document.getElementById("fileUpload");

  //Validate whether File is valid Excel file.
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
  if (regex.test(fileUpload.value.toLowerCase())) {
      if (typeof (FileReader) != "undefined") {
          var reader = new FileReader();

          //For Browsers other than IE.
          if (reader.readAsBinaryString) {
              reader.onload = function (e) {
                  GetTableFromExcel(e.target.result);
              };
              reader.readAsBinaryString(fileUpload.files[0]);
          } else {
              //For IE Browser.
              reader.onload = function (e) {
                  var data = "";
                  var bytes = new Uint8Array(e.target.result);
                  for (var i = 0; i < bytes.byteLength; i++) {
                      data += String.fromCharCode(bytes[i]);
                  }
                  GetTableFromExcel(data);
              };
              reader.readAsArrayBuffer(fileUpload.files[0]);
          }
      } 
      // else {
      //     alert("This browser does not support HTML5.");
      // }
  } 
  // else {
  //     alert("Please upload a valid Excel file.");
  // }
};

function GetTableFromExcel(data) {     //функция обработки exsel-таблицы
  //Read the Excel File data in binary
  var workbook = XLSX.read(data, {
      type: 'binary'
  });

  //get the name of First Sheet.
  var Sheet = workbook.SheetNames[0];

  //Read all rows from First Sheet into an JSON array.
  var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);

  //Create a HTML Table element.
  var myTable  = document.createElement("table");
  myTable.border = "1";

  //Add the header row.
  var row = myTable.insertRow(-1);
  for (var i = 0; i < excelRows.length; i++) {
      var id = excelRows[i].Id;
      var titleCount = excelRows[i].Name;
      report (id, titleCount);
      
  }
  var ExcelTable = document.getElementById("ExcelTable");
  ExcelTable.innerHTML = "";
  ExcelTable.appendChild(myTable);

 
 function report (id, titleCount){
  let obj = {
    'title': id,
    'count' : titleCount,
  }
  arr.push(obj);

}
// console.log(arr);
return arr;   
};


function showData (element, num){
  document.querySelector('.tab__panel-1').innerHTML += `<p><span class="full">${element}</span> <input type="number" class="compl__panel-1 min="1" value="${+num}"><button>удалить</button></p> <hr>`;
 
}

function showData11 ( element1, num1){

  document.querySelector('.tab__panel-2').innerHTML += `<p><span class="incomplete">${element1}</span> <input type="number" class="compl__panel-2" min="1" value="${+num1}"> <button>удалить</button></p><hr>
  `;

}
function showData22 ( element2, num2){

  document.querySelector('.tab__panel-3').innerHTML += `<p><span class="goodsDoNotExist">${element2}</span> <input type="number" class="compl__panel-3" min="1" value="${+num2}"> <button>удалить</button></p> <hr>`;

}


let tabContainer=document.querySelector(".tabContainer");
let tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");

tabButtons.forEach(item => {
  item.addEventListener( 'click' , ()=> {
    if(item == document.querySelector('.btn__close')){
      document.querySelector('.tab__panel-1').classList.add('none');
      document.querySelector('.tab__panel-2').classList.add('none');
      document.querySelector('.tab__panel-3').classList.remove('none');
    
    }
    else if (item == document.querySelector('.tab1')){
      document.querySelector('.tab__panel-1').classList.remove('none');
      document.querySelector('.tab__panel-2').classList.add('none');
      document.querySelector('.tab__panel-3').classList.add('none');
     
     
     }
     else if (item == document.querySelector('.tab2')){
       document.querySelector('.tab__panel-2').classList.remove('none');
      document.querySelector('.tab__panel-1').classList.add('none');
      document.querySelector('.tab__panel-3').classList.add('none');
      
    }
    
  });
});


document.querySelector('.close').addEventListener('click', ()=> {
  document.querySelector(".tabContainer").classList.add('none')
  
});



const arrCompl1 = [];
function complPush(elem){
  let obj1 = {}

  document.querySelector('.complite__panel-1').addEventListener('click', ()=> {
    document.querySelectorAll('.full').forEach(element => {
      obj1.title  = element.textContent;
    });
    document.querySelectorAll('.compl__panel-1').forEach(item => {
      obj1.count = item.value;
      arrCompl1.push(obj1);
      // console.log(arrCopl1);
    })
    console.log(arrCompl1);
  });
}

const arrCompl2 = [];
function complPush2(elem){
  let obj2 = {}
  
  document.querySelector('.complite__panel-2').addEventListener('click', ()=> {
    document.querySelectorAll('.incomplete').forEach(element => {
      obj2.ttitle  = element.textContent;
      
    });
    document.querySelectorAll('.compl__panel-2').forEach(item => {
      obj2.count = item.value;
      arrCompl2.push(obj2);
      // console.log(arrCopl1);
    })
    console.log(arrCompl2);
    
  });
}
const arrCompl3 = [];
function complPush3(elem){
  let obj3 = {}
  document.querySelector('.complite__panel-3').addEventListener('click', ()=> {
    document.querySelectorAll('.compl__panel-3').forEach(item => {
      obj3.count = item.value
      // console.log(arrCopl1);
    })
    console.log(arrCompl3);
    document.querySelectorAll('.goodsDoNotExist').forEach(element => {
      obj3.ttitle  = element.textContent;
      // console.log(element.textContent);
      arrCompl3.push(obj3);
    });
    reportBtn.disabled = false;
  });
}

const reportBtn = document.querySelector('.report');
reportBtn.disabled = true;
if (arrCompl3.length != 0 & arrCompl2.length != 0 & arrCompl1.length != 0){
reportBtn.disabled = false;
}


//   reportBtn.disabled = true;
// }else{
//   reportBtn.disabled = false;
  
// }

// if (arrCompl3.length == 0 && arrCompl2 == 0 && arrCompl1 == 0){}
// if (reportBtn.disabled = )

// addButton.disabled = !input.value.length;

// input.addEventListener('input', () => {
//     addButton.disabled = !input.value.length;
// });

function report(){
  reportBtn.addEventListener('click', ()=> {
    let objReport = {
      incomplete : arrCompl1,
      full : arrCompl2,
      goodsDoNotExist : arrCompl3,
    }

    // postData('http://localhost:5000/product-report/add/IncompleteFullInDB', objReport).then(date => console.log(date));
    console.log(objReport);
    reportBtn.textContent = 'отчет отправлен';
    reportBtn.disabled = true;
   
  });
}
report();




// {incomplete: ProductDto[], full: ProductDto[], goodsDoNotExist: ProductDto[]}
// http://localhost:5000/product-report/add/IncompleteFullInDB