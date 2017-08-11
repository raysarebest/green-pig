var charArray = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm','n','o','p','q','r','s','t','u', 'v','w','x','y','z'];
function getRandomLetter() {
    var charCode = Math.floor(Math.random() * charArray.length);
    return charArray[charCode];
}


var outputDiv = document.querySelector('.output');
var cname = "";
var html = "";

for(i = 0; i < 10; i++) {
    for(j = 0; j < 5; j++) {
        cname += getRandomLetter();
    }
    html += `${cname}<br/>`;
    cname = "";
}

outputDiv.innerHTML = html;



