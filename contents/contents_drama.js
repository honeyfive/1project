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

var playBtnOnSelect = document.getElementsByClassName("bgBoxColor-select");
playBtnOnSelect[0].addEventListener('mouseover', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[0].style.zIndex = 2;
});

var playBtnOffSelect = document.getElementsByClassName("bgBoxColor-select");
playBtnOffSelect[0].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[0].style.zIndex = -1;
});


var playBtnOnUpdate = document.getElementsByClassName("bgBoxColor-update");
playBtnOnUpdate[0].addEventListener('mouseover', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[1].style.zIndex = 2;
});

var playBtnOffUpdate = document.getElementsByClassName("bgBoxColor-update");
playBtnOffUpdate[0].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[1].style.zIndex = -1;
});
