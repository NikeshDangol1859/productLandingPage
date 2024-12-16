// document.addEventListener("DOMContentLoaded", () => {
//   const shopButton = document.querySelector(".shop");
  
//   setTimeout(() => {
//     shopButton.classList.add("shop");
//   }, 500); 
// });

const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');
const sliderTrack = document.querySelector('.slider-track');

function updateTrack() {
    const min = parseInt(sliderLeft.min);
    const max = parseInt(sliderLeft.max);
    const leftValue = parseInt(sliderLeft.value);
    const rightValue = parseInt(sliderRight.value);

    if (leftValue > rightValue - 1) {
        sliderLeft.value = rightValue - 1;
    }
    if (rightValue < leftValue + 1) {
        sliderRight.value = leftValue + 1;
    }

    const leftPercent = ((leftValue - min) / (max - min)) * 100;
    const rightPercent = ((rightValue - min) / (max - min)) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #ddd ${leftPercent}%, #007bff ${leftPercent}%, #007bff ${rightPercent}%, #ddd ${rightPercent}%)`;
}

sliderLeft.addEventListener('input', updateTrack);
sliderRight.addEventListener('input', updateTrack);

// Initialize the track colors
updateTrack();
