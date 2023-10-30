// // 이미지 URL 배열을 만듭니다.
// const imageUrls = [
//     'url()',
//     'url(이미지2의 URL)',
//     'url(이미지3의 URL)',
//     // 나머지 이미지 URL을 계속 추가합니다.
// ];

// // 슬라이드 <li> 요소를 선택합니다.
// const slideItems = document.querySelectorAll('.slides li');

// // 각 슬라이드에 배경 이미지를 설정합니다.
// slideItems.forEach((item, index) => {
//     item.style.backgroundImage = imageUrls[index];
// });






// const slides = document.querySelector('.slides');
// const slide = document.querySelectorAll('.slides li');
// let currentIdx = 0;
// let slideCount = slide.length;
// let slideWidth = 230;
// let slideMargin = 30;
// let prevBtn = document.querySelector('.btn-prev');
// let nextBtn = document.querySelector('.btn-next');

// makeClone();
// updateWidth();
// setInitialPos();

// setTimeout(function() { //왼쪽으로 이동하는게 보이면 안되니까 다 배치한 다음에 약간의 시간을 두고 작동을 해야한다
//     slides.classList.add('animated');
// },100); //0.1초 뒤에

// slides.classList.add('animated'); // slides 요소에 animated 클래스 추가

// function makeClone() {
//     for (let i = 0; i < slideCount; i++) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.appendChild(cloneSlide);
//     }
//     for (let i = slideCount - 1; i >= 0; i--) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.prepend(cloneSlide);
//     }
// }

// function updateWidth() {
//     let currentSlides = document.querySelectorAll('.slides li');
//     let newSlideCount = currentSlides.length;

//     let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//     slides.style.width = newWidth;
// }

// // 기본은 가운데부터!
// function setInitialPos() { 
//     let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;

//     //slides {transform:translateX(-1000px);}
//     slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
// }

// //이전 다음버튼
// nextBtn.addEventListener('click', function(){
//     moveSlide(currentIdx + 1);
// });

// prevBtn.addEventListener('click', function(){
//     moveSlide(currentIdx - 1);
// });

// function moveSlide(num) {
//     slides.style.left = -num * (slideWidth + slideMargin) + 'px';

//     currentIdx = num;
//     console.log(currentIdx, slideCount);

//     if(currentIdx == slideCount || currentIdx == -slideCount) { // 30 -30 이후에는 빈칸으로 나오기 때문에 사용자몰래 left값을 0으로 바꾼다

//         setTimeout(function(){
//             //이 작업은 0.5초가 지난 다음에 해야한다
//             slides.classList.remove('animated'); //샤라락 다시 돌아가는 효과 제거!
//             slides.style.left = '0px';
//             currentIdx = 0; //처음부터 다시시작하게끔
//         }, 500);

//         //위에가 끝나고 animated 넣어준다
//         setTimeout(function(){
//             slides.classList.add('animated');
//         }, 600);
//     }


// }

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







