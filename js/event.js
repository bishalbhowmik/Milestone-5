function red(){
    document.body.style.backgroundColor = 'blue';
}

const first = document.getElementById('yellow');

first.onclick = yellowColor;

function yellowColor(){
    document.body.style.backgroundColor = 'yellow';
}
//handle with anonymous function

const makeGreen = document.getElementById('green');

makeGreen.onclick = function (){
  document.body.style.backgroundColor = 'green';
}

//handle with event listener

const makeCoral = document.getElementById('make-coral');

makeCoral.addEventListener('click',makeC);

function makeC (){
    document.body.style.backgroundColor = 'coral';
}

//handle with event lister in two line

const makeCyan = document.getElementById('make-cyan');

makeCyan.addEventListener('click',function makeCy(){
    document.body.style.backgroundColor = 'cyan';
})