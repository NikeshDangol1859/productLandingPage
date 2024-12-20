
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


// hamburger(menu icon)

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const closeButton = document.getElementById("closeButton");
    const categoryMenu = document.getElementById("categoryMenu");
  
    hamburger.addEventListener("click", () => {
      categoryMenu.style.display = "flex";
      closeButton.style.display = "block";
      hamburger.style.display = "none";
    });
  
    closeButton.addEventListener("click", () => {
      categoryMenu.style.display = "none";
      closeButton.style.display = "none";
      hamburger.style.display = "flex";
    });
  });
  
  // scroll ups
  // document.addEventListener("DOMContentLoaded", () => {
  //   const scrollUpButton = document.getElementById("scrollUpButton");
  //   const footer = document.querySelector("footer");
  
  
  //   window.addEventListener("scroll", () => {
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;
  //     const windowHeight = window.innerHeight;
  //     const footerTop = footer.getBoundingClientRect().top + scrollY;
  
  //     if (scrollY > 20 && scrollY + windowHeight < footerTop) {
  //       scrollUpButton.classList.add("show");
  //     } else {
  //       scrollUpButton.classList.remove("show");
  //     }
  //   });
  
  //   scrollUpButton.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // });
  

  