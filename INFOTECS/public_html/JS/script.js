var table = document.querySelector('#table');
alert(date[1].id);
    for (i=0; i<date.length; i++) {
        var Obj = date[i];
        var tr = document.createElement('tr');
        
        var id =  document.createElement('td');  
        var nameFirst =  document.createElement('td');  
        var nameLast =  document.createElement('td');  
        var email =  document.createElement('td');  
        var gender =  document.createElement('td');  
        var memo =  document.createElement('td'); 
        
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
        
        table.appendChild(tr);
    }
