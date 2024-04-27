
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', ()=> {
    let value=window.scrollY;

    text.style.marginTop= value*2.5+'px';
    leaf.style.top= value * (-1.5) + 'px';
    leaf.style.right= value * 1.5 + 'px';
    hill5.style.left= value * 1.5 + 'px';
    hill4.style.left= value * (-1.5) + 'px';
    hill1.style.top= value * 1+ 'px';
    
});

/*
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Selecting elements from the DOM
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill5 = document.getElementById('hill5');
    let hill4 = document.getElementById('hill4');
    let hill1 = document.getElementById('hill1');

    // Manipulating selected elements
    if (text) text.style.marginTop = value * 2.5 + 'px';
    if (leaf) {
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
    }
    if (hill5) hill5.style.left = value * 1.5 + 'px';
    if (hill4) hill4.style.left = value * -1.5 + 'px';
    if (hill1) hill1.style.top = value * 1 + 'px';
});
*/