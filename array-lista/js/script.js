let fridgeFruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomeo', 'limone', 'fragola'];
fridgeFruits.push('apple');
console.log(fridgeFruits);
let resultEl = document.querySelector('.d-none');
let present = false;

for (let i = 0; i <= fridgeFruits.length; i++){
   if (fridgeFruits[i] === 'cocomero'){
    present = true
   }
};
resultEl.classList.remove('d-none')
if (present){
    resultEl.innerHTML ='Trovato! Devo solo preparare il cocktail.';
    resultEl.className= 'bg-success';
} else {
    resultEl.className = 'bg-danger';
    resultEl.innerHTML = 'Oh no, devo uscire a comprare il cocomero! '
}

