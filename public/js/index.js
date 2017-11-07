console.log('Hello world');

//Megabot JS
var card =  document.querySelector('.card');
var c1 =  document.querySelector('.c1');
var c2 =  document.querySelector('.c2');
var c3 =  document.querySelector('.c3');

var meetTeam =  document.querySelector('.meetTeam');
var aboutMega = document.querySelector('.aboutMega');
var megaEvent = document.querySelector('.megaEvent');
var plane = document.querySelector('.plane');

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
    megaEvent.classList.toggle('hidden');
}

// function planeFly(){
  plane.animate([
  // keyframes
  { transform: 'translateX(0px)'},
  { transform: 'translate(100px,-100px)'},
  { transform: 'rotate(180deg)'},
  { transform: 'translate(-260px)'},
  { transform: 'translateY(260px)'},
  { transform: 'rotate(-180deg)'},
  { transform: 'translateY(600px)'}
], {
  // timing options
  duration: 12000,
  iterations: Infinity
});
