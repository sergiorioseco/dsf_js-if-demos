const img = document.querySelector('#img');
let isClicked = false;

img.addEventListener('click',()=> {
    console.log("img click");
    isClicked = !isClicked;
    console.log("is clicked = ",isClicked)
    if (isClicked == true) {
        img.style.border = "solid red 2px";
    }
    else {
        img.style.border = "none";
    }
})


