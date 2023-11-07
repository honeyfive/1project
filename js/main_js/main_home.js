
$(document).ready(function() {
    $('body').css('opacity', '1');
});

const sections = document.querySelectorAll('.movie-main2, .movie-main3, .movie-main4, .movie-main5, .movie-main6');

sections.forEach(section => {
    const slides = section.querySelector('.slides');
    const slide = section.querySelectorAll('.slides li');
    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 250;
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



const video = document.querySelector('.video');
const toggleButton = document.querySelector('.toggle-button');
const toggleButton2 = document.querySelector('.toggle-button2');

toggleButton.addEventListener('click', function() {
    if (video.paused) {
        video.play(); // 비디오 재생
        toggleButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // 버튼 아이콘 변경 (일시정지 아이콘으로)
    } else {
        video.pause(); // 비디오 일시정지
        toggleButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // 버튼 아이콘 변경 (재생 아이콘으로)
    }
});

video.addEventListener('ended', function() {
    toggleButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // 비디오 종료 시 재생 버튼 아이콘으로 변경
});

// 초기 상태 설정
toggleButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // 초기 상태에서는 재생 버튼 아이콘을 표시


toggleButton2.addEventListener('click', function() {
    if (video.muted) { // 음소
        video.muted = false;
        toggleButton2.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // 버튼 아이콘 변경 (꺼짐 아이콘으로)
    } else {
        video.muted = true; // 음소X
        toggleButton2.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // 버튼 아이콘 변경 (켜짐 아이콘으로)
    }
});

video.addEventListener('ended', function() {
    toggleButton2.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // 비디오 종료 시 켜짐 아이콘으로 변경
});

// 초기 상태 설정
toggleButton2.innerHsTML = '<i class="fa-solid fa-volume-high"></i>'; // 초기 상태에서는 켜짐 아이콘을 표시




document.getElementById('btnScrollTo').addEventListener('click', () => {
    // 페이지 맨 위로 스크롤
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


