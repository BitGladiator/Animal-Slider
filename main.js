// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let sliderDom = document.querySelector('.slider');
let sliderListDom = sliderDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.slider .thumbnail');
let timeDom = document.querySelector('.slider .time');

let timeRunning = 3000;
let timeAutoNext = 5000;




// Move the first thumbnail to the end (loop effect)
let thumbnailItems = thumbnailBorderDom.querySelectorAll('.item');
if (thumbnailItems.length > 0) {
    thumbnailBorderDom.appendChild(thumbnailItems[0]);
}

// Button click event listeners
nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

// Auto-next slider
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

let runTimeOut;

function showSlider(type) {
    let sliderItems = document.querySelectorAll('.slider .list .item');
    let thumbnailItems = document.querySelectorAll('.slider .thumbnail .item');

    // Debugging: Check if slider items exist
    console.log("Slider Items Count:", sliderItems.length);

    if (sliderItems.length === 0) {
        console.error("No slider items found!");
        return;
    }

    if (type === 'next') {
        sliderListDom.appendChild(sliderItems[0]);
        thumbnailBorderDom.appendChild(thumbnailItems[0]);
        sliderDom.classList.add('next');
    } else {
        sliderListDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
        sliderDom.classList.add('prev');
    }

    // Remove classes after animation duration
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        sliderDom.classList.remove('next', 'prev');
    }, timeRunning);

    // Restart auto-slide timer
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
