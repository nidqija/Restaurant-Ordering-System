let gettablenum = document.getElementById('getTableNum');
let Num = document.getElementById('num');
let tablenum = document.getElementById('tableNum');
let getfood = document.getElementById('getFood');
let getfood2 = document.getElementById('getFood2');
let getfood3 = document.getElementById('getFood3');
let getfood4 = document.getElementById('getFood4');
let getfood5 = document.getElementById('getFood5');
let getfood6 = document.getElementById('getFood6');
let Error = document.getElementById('error');
let order = document.getElementById('order');
let totalprice = document.getElementById('totalPrice');
let rm = document.getElementById('RM');
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let increment = 0;
let increment2 = 0;
let increment3 = 0;
let increment4 = 0;
let increment5 = 0;
let increment6 = 0;



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
    totalprice.innerHTML = increment + increment2 + increment3 + increment4 + increment5 + increment6;
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
    totalprice.innerHTML =  increment + increment2 + increment3 + increment4 + increment5 + increment6;
   }
});




getfood3.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish3 = document.getElementById('dish3');
    let Amount3 = document.getElementById('amount3');
    let Price3 = document.getElementById('price3');
    
    count3++;
    increment3+= 9.50;
    Amount3.innerHTML = ' x ' + count3;
    Amount3.classList.add('amount');
    Dish3.classList.add('dish');
    Price3.classList.add('price');
    Error.innerHTML = '';
    Dish3.innerHTML = 'Dippy Dippy Churros';
    Price3.innerHTML = 'RM' + increment3;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML =  increment + increment2 + increment3 + increment4 + increment5 + increment6;
   }
});



getfood4.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish4 = document.getElementById('dish4');
    let Amount4 = document.getElementById('amount4');
    let Price4 = document.getElementById('price4');
    
    count4++;
    increment4+= 10;
    Amount4.innerHTML = ' x ' + count4;
    Amount4.classList.add('amount');
    Dish4.classList.add('dish');
    Price4.classList.add('price');
    Error.innerHTML = '';
    Dish4.innerHTML = 'Caramel Macchiato';
    Price4.innerHTML = 'RM' + increment4;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML =  increment + increment2 + increment3 + increment4 + increment5 + increment6;
   }
});


getfood5.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish5 = document.getElementById('dish5');
    let Amount5 = document.getElementById('amount5');
    let Price5 = document.getElementById('price5');
    
    count5++;
    increment5+= 8;
    Amount5.innerHTML = ' x ' + count5;
    Amount5.classList.add('amount');
    Dish5.classList.add('dish');
    Price5.classList.add('price');
    Error.innerHTML = '';
    Dish5.innerHTML = 'Cendol';
    Price5.innerHTML = 'RM' + increment5;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML =  increment + increment2 + increment3 + increment4 + increment5 + increment6;
   }
});




getfood6.addEventListener('click' , function(){
   if (Num.innerHTML == '' ){
      Error.innerHTML = 'You must fill your table no. first!';
   } else{
    let Dish6 = document.getElementById('dish6');
    let Amount6 = document.getElementById('amount6');
    let Price6 = document.getElementById('price6');
    
    count6++;
    increment6+= 3;
    Amount6.innerHTML = ' x ' + count6;
    Amount6.classList.add('amount');
    Dish6.classList.add('dish');
    Price6.classList.add('price');
    Error.innerHTML = '';
    Dish6.innerHTML = 'Apple Juice';
    Price6.innerHTML = 'RM' + increment6;
    rm.innerHTML = 'RM ';
    totalprice.innerHTML =  increment + increment2 + increment3 + increment4 + increment5 + increment6;
   }
});

















































