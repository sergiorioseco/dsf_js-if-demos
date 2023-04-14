const PASSWORD1 = "911";
const PASSWORD2 = "714";
const btn = document.querySelector('#btn');
const pOutput = document.querySelector('#pOutput');


btn.addEventListener('click',() => {
    const digit1 = document.querySelector('#digit1');
    const digit2 = document.querySelector('#digit2');
    const digit3 = document.querySelector('#digit3');
    let password = digit1.value + digit2.value + digit3.value;
    console.log(password);
    if (password == PASSWORD1) {
        console.log("password1")
        pOutput.innerHTML = "password 1 correcto";
    }
    else if (password == PASSWORD2) {
        console.log("password2")
        pOutput.innerHTML = "password 2 correcto";
    }
    else {
        console.log("incorrect password")
        pOutput.innerHTML = "password incorrecto";
    }
})