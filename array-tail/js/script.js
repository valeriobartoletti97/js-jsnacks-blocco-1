let resultEl = document.querySelector('.d-none');
const buttonEl = document.querySelector('.btn-success');
let data = document.getElementById('data');
const printBtn = document.querySelector('.btn-primary');
let userData;
let numbers = [];
buttonEl.addEventListener('click', function(){

   userData = parseInt(data.value);
   console.log(userData);

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
   resultEl.classList.remove('d-none');
})
printBtn.addEventListener('click', function(){
    let printData = parseInt(document.getElementById('print').value);
    console.log(printData);
    const printEl = document.getElementById('print-container');
    let numbersPrinted = [];
    if(printData > userData){
        printEl.className = 'bg-danger';
        printEl.innerHTML = 'Gli elementi disponibili sono soltanto ' + userData + ' !'
    } else{ 
        for (let b = printData; b > 0 ; b--){
            numbersPrinted.push(numbers[numbers.length - b]);
        }
        console.log(numbersPrinted);
        printEl.className = 'bg-success'
        printEl.innerHTML = numbersPrinted
    }
})


/* utility */

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}