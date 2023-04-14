const MAXQ = 10;
const btn = document.querySelector('#btn');
const pOutput = document.querySelector('#pOutput');

btn.addEventListener('click',() => {
    const cant1 = document.querySelector('#cant1');
    const cant2 = document.querySelector('#cant2');
    const cant3 = document.querySelector('#cant3');
    let total = Number(cant1.value) + Number(cant2.value) + Number(cant3.value);
    console.log(total)
    if (total > MAXQ) {
        pOutput.innerHTML = "Llevas demasiados stickers";
    }
    else{
        pOutput.innerHTML = "Llevas " + total + " stickers";
    }
})