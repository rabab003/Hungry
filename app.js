
const button = document.getElementById('movingButton');
document.addEventListener('DOMContentLoaded', () => {

    button.addEventListener('mouseover', () => {
        // Screen dimensions
        const screenWidth = 445;
        const screenHeight = 342;

        // Button dimensions
        const buttonRect = button.getBoundingClientRect();

        // Calculate the maximum possible position for the button
        const maxX = screenWidth - buttonRect.width;
        const maxY = screenHeight - buttonRect.height;

        // Generate random positions within the allowed range
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Set the new position of the button
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
});


let Yest = document.getElementById("buttonYes")
let come = document.getElementById("frrr")
let ecus = document.getElementById("frr")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

come.classList.add("hidden")

Yest.addEventListener('click', () => {
       ecus.classList.add('hidden')
       img1.classList.add('hidden')
       img2.classList.add('show')
       Yest.classList.add('hidden')
       button.classList.add('hidden')
       come.classList.toggle('show')


});