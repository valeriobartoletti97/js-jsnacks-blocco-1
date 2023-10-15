let resultEl = document.querySelector('.d-none');
const buttonEl = document.querySelector('.btn');
let data = document.getElementById('data');

buttonEl.addEventListener('click', function(){
   const userData = parseInt(data.value);
   console.log(userData);
   let numbers = [];

   for (let i = 0; i < userData; i++){
    numbers.push(getRndInteger(1, 100));
   };
   console.log(numbers);
   let last5 = [];
   if(numbers.length >= 5 ){
    for (let c = 5; c > 0; c--){
     last5.push(numbers[numbers.length - c]);
    }
    } else {
        last5.push(numbers)
   }
   console.log(last5);
})


/* utility */

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}