var table = document.querySelector('#table');
for (i=0; i<date.length; i++) {
    var Obj = date[i];
    var tr = document.createElement('tr');
    
    var id =  document.createElement('td');  
    var nameFirst =  document.createElement('td');  
    var nameLast =  document.createElement('td');  
    var email =  document.createElement('td');  
    var gender =  document.createElement('td');  
    var memo =  document.createElement('td'); 
    var imgTD = document.createElement('td');
    var img = document.createElement('img');
    img.src= Obj.img ;

    id.classList.add('column1');
    nameFirst.classList.add('column2');
    nameLast.classList.add('column3');
    email.classList.add('column4');
    gender.classList.add('column5');
    memo.classList.add('column6');
    imgTD.classList.add('column7');

    id.innerHTML = Obj.id;
    nameFirst.innerHTML = Obj.name.first;
    nameLast.innerHTML = Obj.name.last;
    email.innerHTML = Obj.email;
    gender.innerHTML = Obj.gender;
    memo.innerHTML = Obj.memo;

    tr.appendChild(id);
    tr.appendChild(nameFirst);
    tr.appendChild(nameLast);
    tr.appendChild(email);
    tr.appendChild(gender);
    tr.appendChild(memo);
    tr.appendChild(imgTD);
    imgTD.appendChild(img);

    table.appendChild(tr);
}


function tableSearch() {
    var phrase = document.getElementById('searchPhrase');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}   
function vanish(key,key1,key2){
    var column = document.getElementsByClassName(key);
    var IMG1 = document.getElementById(key1);
    var IMG2 = document.getElementById(key2); 
    if(IMG1.style.display === 'none'){
        IMG1.style.display = 'block';
        IMG2.style.display = 'none';
        for (var i = 0; i < column.length; i++){
            column[i].style.visibility = "visible";
        }
    } else{
        IMG1.style.display = 'none';
        IMG2.style.display = 'block';
        for (var i = 0; i < column.length; i++){
        column[i].style.visibility = "hidden";
        }
    }    
}

