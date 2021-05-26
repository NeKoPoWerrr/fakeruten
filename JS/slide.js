var count = 0;
const mainSlide = document.querySelector('.change-picture');
const mainImages = document.querySelectorAll('#mainPicture');
const mainSlideList = document.querySelector('.main-ad-block-first-list');
const mainList = document.querySelectorAll('.main-ad-block-first-list-item');
mainPictureCount = mainImages.length;
timer = 1000;

const showCurrent = () => {
    var mainPictureIndex = Math.abs(count % mainPictureCount);
    mainImages.forEach((node) => {
        node.classList.toggle("hide", true);
        node.classList.remove("show");
    });
    mainList.forEach((node) => {
        node.classList.toggle("hidelist", true);
        node.classList.remove("view");
    });
    mainImages[mainPictureIndex].classList.add("show");
    mainImages[mainPictureIndex].classList.toggle("hide", false);
    mainList[mainPictureIndex].classList.add("view");
    mainList[mainPictureIndex].classList.toggle("hidelist", false);
    // var beforeMainPictureIndex = Math.abs((count + mainPictureCount - 1) % mainPictureCount);
    // var afterMainPictureIndex = Math.abs((count + 1) % mainPictureCount);
    // mainImages[mainPictureIndex].classList.replace("hide","show");
    // mainImages[beforeMainPictureIndex].classList.replace("show","hide");
    // mainList[mainPictureIndex].classList.replace("hidelist","view");
    // mainList[beforeMainPictureIndex].classList.replace("view","hidelist");
    // mainList[afterMainPictureIndex].classList.replace("view","hidelist");
};

const showNext = () => {
    count++;
    showCurrent();
}

interval = window.setInterval(showNext,timer);

mainSlide.addEventListener('mouseover', () => {
    interval = clearInterval(interval);
});

mainSlide.addEventListener('mouseout', () => {
    interval = window.setInterval(showNext, timer);
});

// mainSlideList.addEventListener('mouseover', () => {
//     console.log(`addEventListener('mouseover'`, count);
//     interval = clearInterval(interval);
// });

// mainSlideList.addEventListener('mouseout', () => {
//     interval = window.setInterval(showNext, timer);
// });

// mainSlideList.addEventListener('mouseover', (e) => {
//    console.log(e);
// });

mainList.forEach((node, index) => {
    node.addEventListener('mouseover', () => {
        clearInterval(interval);
        count = index;
        showCurrent();
    });
    node.addEventListener('mouseout', () => {
        interval = window.setInterval(showNext, timer);
    });
})



mainImages[0].classList.replace("hide","show");
mainList[0].classList.replace("hidelist","view");