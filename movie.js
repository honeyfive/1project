
const sections = document.querySelectorAll('.movie-main2, .movie-main3, .movie-main4, .movie-main5, .movie-main6');

sections.forEach(section => {
    const slides = section.querySelector('.slides');
    const slide = section.querySelectorAll('.slides li');
    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 230;
    let slideMargin = 30;
    let prevBtn = section.querySelector('.btn-prev');
    let nextBtn = section.querySelector('.btn-next');

    makeClone();
    updateWidth();
    setInitialPos();

    setTimeout(function() {
        slides.classList.add('animated');
    }, 100);

    nextBtn.addEventListener('click', function(){
        moveSlide(currentIdx + 1);
    });

    prevBtn.addEventListener('click', function(){
        moveSlide(currentIdx - 1);
    });

    function makeClone() {
        for (let i = 0; i < slideCount; i++) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        }
        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
    }

    function updateWidth() {
        let currentSlides = section.querySelectorAll('.slides li');
        let newSlideCount = currentSlides.length;

        let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPos() {
        let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
    }

    function moveSlide(num) {
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';

        currentIdx = num;

        if(currentIdx == slideCount || currentIdx == -slideCount) {
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            }, 500);

            setTimeout(function(){
                slides.classList.add('animated');
            }, 600);
        }
    }
});


// const caretContent = document.querySelector('.caret-content');
// const caret = document.querySelector('.caret');

// function openCloseProfile() {
//     if (caretContent.style.display === 'block') {
//         caretContent.style.display = 'none';
//         caret.classList.add('caret-animate');
//     } else {
//         caretContent.style.display = 'block';
//         caret.classList.add('caret-animate');
//     }
// }







