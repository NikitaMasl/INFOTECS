
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

    id.textContent = Obj.id;
    nameFirst.textContent = Obj.name.first;
    nameLast.textContent = Obj.name.last;
    email.textContent = Obj.email;
    gender.textContent = Obj.gender;
    memo.textContent = Obj.memo;

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
window.onload = function () {
    document.getElementById("vanish").onclick = function () {
        var column = document.getElementsByClassName('column1');
    };
};
  
