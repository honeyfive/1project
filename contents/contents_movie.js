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
for (let i = 0; i < playBtnOnSelect.length; i++) {
    playBtnOnSelect[i].addEventListener('mouseover', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[i].style.zIndex = 2;
    });
};


var playBtnOffSelect = document.getElementsByClassName("contents-recommend-box-items");
for (let i = 0; i < playBtnOffSelect.length; i++) {
    playBtnOnSelect[i].addEventListener('mouseout', () => {
        document.getElementsByClassName('contents-recommend-box-btn-hoverPlay')[i].style.zIndex = -1;
    });
};


// var playBtnOffWish = document.getElementsByClassName("contents-recommend-box-btn-wish");
// for (let i = 0; i < playBtnOffWish.length; i++) {
//     playBtnOffWish[i].addEventListener('', () => {
//         document.getElementsByClassName('contents-recommend-box-btn-wish')[i].style.backgroundColor = rgba(0, 0, 0, 0.5);
//     });
// };

const playLogo = document.getElementsByClassName('trailer-logo');
playLogo[0].addEventListener('click', () => {
    if (trailer.paused) {
        trailer.play()
    } else {
        trailer.pause()
    }
});

const playVidHover = document.getElementsByClassName('contents-video-box-btn-play');
playVidHover[0].addEventListener('mousedown', () => {
    playVidHover[0].style.border = "3px solid #f2f2f2";
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
    wishHover[0].style.border = "2px solid white"
});

wishHover[0].addEventListener('mouseup', () => {
    wishHover[0].style.border = "2px solid gray"
});

const likeHover = document.getElementsByClassName('contents-video-box-btn-like');
likeHover[0].addEventListener('mouseover', () => {
    likeHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

likeHover[0].addEventListener('mouseout', () => {
    likeHover[0].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});

likeHover[0].addEventListener('mousedown', () => {
    likeHover[0].style.border = "2px solid white";
});

likeHover[0].addEventListener('mouseup', () => {
    likeHover[0].style.border = "2px solid gray";
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
    volumeHover[0].style.border = "2px solid gray";
});

const closeHover = document.getElementsByClassName('contents-video-box-btn-close');
closeHover[0].addEventListener('mousedown', () => {
    closeHover[0].style.border = "3px solid white";
});

closeHover[0].addEventListener('mouseup', () => {
    closeHover[0].style.border = "0px";
});