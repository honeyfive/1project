function playOnOff() {
    if (trailer.paused) {
        trailer.play()
    } else {
        trailer.pause()
    }
}

function muteOnOff() {
    const muteOn = document.getElementById("muteOn");
    if (muteOn.muted == true) {
        muteOn.muted == false;
    } else {
        muteOn.muted == true;
    }
}

document.getElementById('trailer').addEventListener('ended', vidEnded, false);
function vidEnded() {
    //영상 끝난 뒤 작업할 내용
}

var playBtnOnSelect = document.getElementsByClassName("contents-recommend-box-items");
playBtnOnSelect[0].addEventListener('mouseover', () => {
    for(const i = 0; i<playBtnOnSelect.length; i++) {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[i].style.zIndex = 2;
    }
        
});

var playBtnOffSelect = document.getElementsByClassName("contents-recommend-box-items");
for(const i = 0; i<playBtnOffSelect.length; i++) {
playBtnOffSelect[i].addEventListener('mouseout', () => {
    document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[0].style.zIndex = -1;
})
};

var playBtnOffWish = document.getElementsByClassName("contents-recommend-box-btn-wish");
playBtnOffWish[0].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-wish')[0].style.backgroundColor = rgba(0, 0, 0, 0.5);
});