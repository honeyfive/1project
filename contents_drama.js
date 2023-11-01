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

var playBtnOn = document.querySelectorAll(".bgBoxColor-select,.bgBoxColor-update");
playBtnOn[0].addEventListener('mouseover', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[0].style.zIndex = 2;
});

var playBtnOff = document.querySelectorAll(".bgBoxColor-select,.bgBoxColor-update");
playBtnOff[0].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[0].style.zIndex = -1;
});

