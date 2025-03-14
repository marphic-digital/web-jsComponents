const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos + 'px';
    const dropSize = Math.random() * 100;
    spanEl.style.width = dropSize + "px";
    spanEl.style.height = dropSize + 'px';
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
}, 1000)
})


// bodyEl.addEventListener('mousemove', (event) => {
//     const xPosition = event.offsetX;
//     const yPosition = event.offsetY;
//     const spanEl = document.createElement('span');
//     spanEl.style.left = xPosition + "px";
//     spanEl.style.top = yPosition + "px";
//     const rainSize = Math.random() * 100;
//     spanEl.style.width = rainSize + "px";
//     spanEl.style.height = rainSize + "px";
//     bodyEl.appendChild(spanEl);
//     setTimeout(() => {
//         spanEl.remove();
//     }, 3000)
    
// })