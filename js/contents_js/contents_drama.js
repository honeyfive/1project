function playOnOff() {
    if (trailer.paused) {
        trailer.play()
    } else {
        trailer.pause()
    }
}

const playLogo = document.getElementsByClassName('trailer-logo');
playLogo[0].addEventListener('click', () => {
    if (trailer.paused) {
        trailer.play()
    } else {
        trailer.pause()
    }
});

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
for (let i = 0; i < playBtnOnUpdate.length; i++) {
    playBtnOnUpdate[i].addEventListener('mouseover', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[i+1].style.zIndex = 2;
    });
};

var playBtnOnUpdate = document.getElementsByClassName("bgBoxColor-update");
for (let i = 0; i < playBtnOnUpdate.length; i++) {
    playBtnOnUpdate[i].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[i+1].style.zIndex = -1;
    });
};

const playVidHover = document.getElementsByClassName('contents-video-box-btn-play');
playVidHover[0].addEventListener('mousedown', () => {
    playVidHover[0].style.color = "#4f4f4f";
    playVidHover[0].style.border = "3px solid gray";
});

playVidHover[0].addEventListener('mouseup', () => {
    playVidHover[0].style.color = "#121212";
    playVidHover[0].style.border = "0px";
});

const wishHover = document.getElementsByClassName('contents-video-box-btn-wish');
wishHover[0].addEventListener('mouseover', () => {
    wishHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

wishHover[0].addEventListener('mouseout', () => {
    wishHover[0].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});

wishHover[0].addEventListener('mousedown', () => {
    wishHover[0].style.border = "3px solid white";
});

wishHover[0].addEventListener('mouseup', () => {
    wishHover[0].style.border = "0px";
});

const likeHover = document.getElementsByClassName('contents-video-box-btn-like');
likeHover[0].addEventListener('mouseover', () => {
    likeHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

likeHover[0].addEventListener('mouseout', () => {
    likeHover[0].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});

likeHover[0].addEventListener('mousedown', () => {
    likeHover[0].style.border = "3px solid white";
});

likeHover[0].addEventListener('mouseup', () => {
    likeHover[0].style.border = "0px";
});

const volumeHover = document.getElementsByClassName('contents-video-box-btn-mute');
volumeHover[0].addEventListener('mouseover', () => {
    volumeHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

volumeHover[0].addEventListener('mouseout', () => {
    volumeHover[0].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});

volumeHover[0].addEventListener('mousedown', () => {
    volumeHover[0].style.border = "3px solid white";
});

volumeHover[0].addEventListener('mouseup', () => {
    volumeHover[0].style.border = "0px";
});

const closeHover = document.getElementsByClassName('contents-video-box-btn-close');
closeHover[0].addEventListener('mousedown', () => {
    closeHover[0].style.border = "3px solid white";
});

closeHover[0].addEventListener('mouseup', () => {
    closeHover[0].style.border = "0px";
});
