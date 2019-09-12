var table = document.querySelector('#table');

for (i=0; i<date.length; i++) {
    var Obj = date[i];
    var tr = document.createElement('tr');
    tr.id = "tr_" + i;
    
    var id =  document.createElement('td');  
    var nameFirst =  document.createElement('td');  
    var nameLast =  document.createElement('td');  
    var email =  document.createElement('td');  
    var gender =  document.createElement('td');  
    var memo =  document.createElement('td'); 
    var imgTD = document.createElement('td');
    var img = document.createElement('img');
    img.src= Obj.img ;
    var remarktd = document.createElement('td');
    var remark = document.createElement('input');
    remark.type = 'button';
    remark.id = 'btn_' + i;
    remark.value = 'Редактировать';
    remark.setAttribute('onclick', 'remarkTD(' + i + ')');

    var str = date[i].memo.toString();
    var arr = str.split(' ');

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
    memo.innerHTML = arr;

        
    tr.appendChild(id);
    tr.appendChild(nameFirst);
    tr.appendChild(nameLast);
    tr.appendChild(email);
    tr.appendChild(gender);
    tr.appendChild(memo);
    tr.appendChild(imgTD);
    imgTD.appendChild(img);

    remarktd.appendChild(remark);
    tr.appendChild(remarktd);

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
    var input = document.querySelector('#searchPhrase'),
    td = table.querySelectorAll('tr:nth-child(n+2) td');
    input.addEventListener('input', function() {
    var val = this.value,
            reg = new RegExp("("+val+")", "gi");
    [].forEach.call( document.querySelectorAll('span.hot'), function(el) {
        el.parentNode.replaceChild(document.createTextNode(el.textContent),el);
    });
     val && [].forEach.call(td, function(el) {
         el.innerHTML = el.textContent.replace(reg, "<span class='hot'>$1</span>");
        });
    });
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
var tr, ID, FN, LN, em, Ge, Me;
function remarkTD(btn_id){
    var DIVform = document.createElement('div');
    DIVform.id = 'DIVform';
        var inptID = document.createElement('input');
    inptID.type = 'text';
    inptID.id = 'inptID';
    inptID.placeholder = 'Идентификатор';
        var inptnameFirst = document.createElement('input');
    inptnameFirst.type = 'text';
    inptnameFirst.id = 'inptnameFirst';
    inptnameFirst.placeholder = 'Имя';
        var inptnameLast = document.createElement('input');
    inptnameLast.type = 'text';
    inptnameLast.id = 'inptnameLast';
    inptnameLast.placeholder = 'Фамилия';
        var inptemail = document.createElement('input');
    inptemail.type = 'text';
    inptemail.id = 'inptemail';
    inptemail.placeholder = 'email';
        var inptgender = document.createElement('input');
    inptgender.type = 'text';
    inptgender.id = 'inptgender';
    inptgender.placeholder = 'Пол';
        var inptMemo = document.createElement('input');
    inptMemo.type = 'text';
    inptMemo.id = 'inptMemo';
    inptMemo.placeholder = 'Ключевые фразы';
        var closeForm = document.createElement('input');
    closeForm.id = 'closeForm';
    closeForm.value = 'Закрыть';
    closeForm.type = 'button';
    closeForm.setAttribute('onclick', 'closeForm()');
        var acceptForm = document.createElement('input');
    acceptForm.id = 'acceptForm';
    acceptForm.value = 'Принять';
    acceptForm.type = 'button';
    acceptForm.setAttribute('onclick', 'acceptForm()');
    
        DIVform.appendChild(inptID);
        DIVform.appendChild(inptnameFirst);
        DIVform.appendChild(inptnameLast);
        DIVform.appendChild(inptemail);
        DIVform.appendChild(inptgender);
        DIVform.appendChild(inptMemo);
        DIVform.appendChild(acceptForm);
        DIVform.appendChild(closeForm);
        
    document.body.appendChild(DIVform);
    
    tr = 'tr_' + btn_id;
    ID = document.getElementById(tr).querySelector('.column1');
    FN = document.getElementById(tr).querySelector('.column2');
    LN = document.getElementById(tr).querySelector('.column3');
    em = document.getElementById(tr).querySelector('.column4');
    Ge = document.getElementById(tr).querySelector('.column5');
    Me = document.getElementById(tr).querySelector('.column6');
}   
    function acceptForm(){
        var inptID = document.getElementById('inptID');
        var inptnameFirst = document.getElementById('inptnameFirst');
        var inptnameLast = document.getElementById('inptnameLast');
        var inptemail = document.getElementById('inptemail');
        var inptgender = document.getElementById('inptgender');
        var inptMemo = document.getElementById('inptMemo');
    
        var inptIDvalue = inptID.value;
        var inptnameFirstvalue = inptnameFirst.value;
        var inptnameLastvalue = inptnameLast.value;
        var inptemailvalue = inptemail.value;
        var inptgendervalue = inptgender.value;
        var inptMemovalue = inptMemo.value;
    if (inptIDvalue === ''){
inptID.style.borderColor = 'red';
}else{
    ID.innerHTML = inptIDvalue;
    inptID.style.borderColor = 'none';
}

    if (inptnameFirstvalue === ''){
inptnameFirst.style.borderColor = 'red';
}else{
    FN.innerHTML = inptnameFirstvalue;
    inptnameFirst.style.borderColor = 'none';
}

    if (inptnameLastvalue === ''){
inptnameLast.style.borderColor = 'red';
}else{
    LN.innerHTML = inptnameLastvalue;
    inptnameLast.style.borderColor = 'none';
}

    var validation = inptemailvalue.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (!validation){
inptemail.style.borderColor = 'red';
}else{
    em.innerHTML = inptemailvalue;
    inptemail.style.borderColor = 'none';
}

    if ((inptgendervalue==='Male')||(inptgendervalue==='Female')){
    Ge.innerHTML = inptgendervalue;
    inptgender.style.borderColor = 'none';
}else{
    inptgender.style.borderColor = 'red';

}

if (inptMemovalue === ''){
inptMemo.style.borderColor = 'red';
}else{
    Me.innerHTML = inptMemovalue;
    inptMemo.style.borderColor = 'none';
}
}
    
function closeForm(){
    var DIVform1 = document.getElementById('DIVform'); 
    DIVform1.parentNode.removeChild(DIVform1);
}
