let resultEl = document.querySelector('.d-none');
const buttonEl = document.querySelector('.btn');
let data = document.getElementById('data');

buttonEl.addEventListener('click', function(){
   const userData = parseInt(data.value);
   console.log(userData);

   for (let i = 0; i < userData; i++){
    let numbers = [];
    numbers.push(getRndInteger(1, 100));
    console.log(numbers)
   }
})


/* utility */

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}