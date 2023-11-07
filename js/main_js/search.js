
$(document).ready(function() {
    $('body').css('opacity', '1');
});

const input_search = document.querySelector('.search-input');
const btn_reset = document.querySelector('.btn-reset');

btn_reset.style.visibility = 'hidden';

input_search.addEventListener('keydown', (e)=> {
    btn_reset.style.visibility = 'visible';
});

btn_reset.addEventListener('click', ()=> {
    btn_reset.style.visibility = 'hidden';
});

document.getElementById('btnScrollTo').addEventListener('click', () => {
    // 페이지 맨 위로 스크롤
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


