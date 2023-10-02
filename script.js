let text = document.getElementById('text');
let backImag = document.getElementById('back-img');
let bamboo = document.getElementById('bamboo');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginTop = value + 2.5 + "px";
    tree1.style.left = value * 1.5 + "px";
    // tree1.style.left = value * -1.5 + "px";
    tree2.style.top = value * 3.5 + "px";
    // tree2.style.top = value * 2.5 + "px";
    bamboo.style.left = value * -2.5 + "px";
    bamboo.style.left = value * -2.5 + "px";
    
     
} )

 