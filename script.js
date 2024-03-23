let gettablenum = document.getElementById('getTableNum');
let Num = document.getElementById('num');
let tablenum = document.getElementById('tableNum');
let getfood = document.getElementById('getFood');
let Error = document.getElementById('error');
let order = document.getElementById('order');
let count = 0;


gettablenum.addEventListener('click' , function(){
   if(tablenum.value == ''){
      Error.innerHTML = 'Please Enter Table Number!';
   } else{
      Num.innerHTML = tablenum.value;
      tablenum.value = '';
      Error.innerHTML = '';
   }
   
});



getfood.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish = document.getElementById('dish');
    let Amount = document.getElementById('amount');
    count++;
    Amount.innerHTML = ' x ' + count;
    Amount.classList.add('amount');
    Dish.classList.add('dish');
    Error.innerHTML = '';
    Dish.innerHTML = 'Buttermilk Chicken';
    
   }
});














