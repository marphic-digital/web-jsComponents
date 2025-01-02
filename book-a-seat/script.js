'use strict';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;

function updateSelectedCount(){
    const selectedSeatsCount = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsLength = selectedSeatsCount.length;
    
    count.innerText = selectedSeatsLength;
    total.innerText = selectedSeatsLength * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    updateSelectedCount();
})

container.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }
    updateSelectedCount();
})