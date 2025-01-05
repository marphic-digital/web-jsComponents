'use strict';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;
updateUi();
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}

function updateSelectedCount(){
    const selectedSeatsCount = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeatsCount].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))
    const selectedSeatsLength = selectedSeatsCount.length;
    
    count.innerText = selectedSeatsLength;
    total.innerText = selectedSeatsLength * ticketPrice;
}

function updateUi(){
    const selectedSeats = localStorage.getItem('selectedSeats');
    
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1)
            seat.classList.add('selected')
        });
    }

    const selectedMovieIndex = localStorage.getItem(movieIndex);
    if(movieIndex !== null){
        movieSelect.selectedIndex = movieIndex;
    }
}
movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})

container.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }
    updateSelectedCount();
})

updateSelectedCount();