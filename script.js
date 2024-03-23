let gettablenum = document.getElementById('getTableNum');
let Num = document.getElementById('num');
let tablenum = document.getElementById('tableNum');

gettablenum.addEventListener('click' , function(){
    Num.innerHTML = tablenum.value;
    tablenum.value = '';
});


