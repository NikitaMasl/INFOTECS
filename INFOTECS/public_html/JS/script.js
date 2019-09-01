var requestURL = 'https://github.com/NikitaMasl/INFOTECS/blob/master/INFOTECS/public_html/JS/date.json';
var request = new XMLHttpRequest();
function load(){
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();  
    request.onload = function () {
        var info = request.response;
        alert(info[0].id);
    };
}





