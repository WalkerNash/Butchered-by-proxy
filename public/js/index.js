console.log('Hello world');

//Megabot JS
var card =  document.querySelector('.card');

var c1 =  document.querySelector('.c1');
var c2 =  document.querySelector('.c2');
var c3 =  document.querySelector('.c3');

var meetTeam =  document.querySelector('.meetTeam');
var aboutMega = document.querySelector('.aboutMega');


function expandCard1() {
    c1.classList.toggle('hidden');
    meetTeam.classList.toggle('hidden');
}

function expandCard2() {
    c2.classList.toggle('hidden');
    aboutMega.classList.toggle('hidden');
}

function expandCard3() {
    c3.classList.toggle('hidden');
    
}
