let gettablenum = document.getElementById('getTableNum');
let Num = document.getElementById('num');
let tablenum = document.getElementById('tableNum');
let getfood = document.getElementById('getFood');
let getfood2 = document.getElementById('getFood2');
let Error = document.getElementById('error');
let order = document.getElementById('order');
let totalprice = document.getElementById('totalPrice');
let rm = document.getElementById('RM');
let count = 0;
let count2 = 0;
let increment = 0;
let increment2 = 0;



gettablenum.addEventListener('click' , function(){
   if(tablenum.value == ''){
      Error.innerHTML = 'Please enter table number!';
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
    let Price = document.getElementById('price');
    
    count++;
    increment+= 11;
    Amount.innerHTML = ' x ' + count;
    Amount.classList.add('amount');
    Dish.classList.add('dish');
    Price.classList.add('price');
    Error.innerHTML = '';
    Dish.innerHTML = 'Buttermilk Chicken';
    Price.innerHTML = 'RM' + increment;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML = increment + increment2;
   }
});


getfood2.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish2 = document.getElementById('dish2');
    let Amount2 = document.getElementById('amount2');
    let Price2 = document.getElementById('price2');
    
    count2++;
    increment2+= 12.40;
    Amount2.innerHTML = ' x ' + count2;
    Amount2.classList.add('amount');
    Dish2.classList.add('dish');
    Price2.classList.add('price');
    Error.innerHTML = '';
    Dish2.innerHTML = 'Chicken Lasagna';
    Price2.innerHTML = 'RM' + increment2;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML =  increment + increment2;
   }
});





























