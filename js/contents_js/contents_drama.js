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

let flagMute = 0;
function muteOnOff() {
    const trailerMuteToggle = document.getElementById("trailer");
    const volumeToggle = document.getElementById("volume").src = "../../resource/image/contents_img/free-icon-volume-down-6996057.png";
    if (flagMute == 0) {
        trailerMuteToggle.muted = false;
        document.getElementById("volume").src = "../../resource/image/contents_img/free-icon-volume-7640163.png";
        flagMute = 1;
    } else {
        trailerMuteToggle.muted = true;
        volumeToggle;
        flagMute = 0;
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
    playVidHover[0].style.border = "3px solid #f2f2f2";
});

playVidHover[0].addEventListener('mouseup', () => {
    playVidHover[0].style.color = "#f2f2f2";
    playVidHover[0].style.border = "0px";
});

playVidHover[0].addEventListener('mouseover', () => {
    playVidHover[0].style.opacity = "0.6";
    playVidHover[0].style.transition = "0.5s";
});

playVidHover[0].addEventListener('mouseout', () => {
    playVidHover[0].style.opacity = "0.9";
});

const wishHover = document.getElementsByClassName('contents-video-box-btn-wish');
const wishText = document.getElementsByClassName('hover-wish-text');
let flagWish = 0;
wishHover[0].addEventListener('click', () => {
    const wishToggle = document.getElementById("wish").src = "../../resource/image/contents_img/free-icon-plus-3524388.png";
    if (flagWish == 0) {
        document.getElementById("wish").src = "../../resource/image/contents_img/check.png";
        wishText[0].innerHTML = "내가 찜한 콘텐츠에 추가";
        wishHover[0].style.border = "2px solid white"
        flagWish = 1;
    } else {
        wishToggle;
        wishText[0].innerHTML = "내가 찜한 콘텐츠에서 제거";
        wishHover[0].style.border = "2px solid gray"
        flagWish = 0;
    };
});


wishHover[0].addEventListener('mouseover', () => {
    wishHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    if (flagWish == 0) {
        wishText[0].innerHTML = "내가 찜한 콘텐츠에 추가";
    } else {
        wishText[0].innerHTML = "내가 찜한 콘텐츠에서 제거";
    };
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
const likeText = document.getElementsByClassName('hover-like-text');
let flagLike = 0;
likeHover[0].addEventListener('click', () => {
    const likeToggle = document.getElementById("like").src = "../../resource/image/contents_img/thumbs up outline.png";
    if (flagLike == 0) {
        document.getElementById("like").src = "../../resource/image/contents_img/thumb-up.png";
        likeHover[0].style.border = "2px solid white";
        flagLike = 1;
    } else {
        likeToggle;
        likeHover[0].style.border = "2px solid gray";
        flagLike = 0;
    };
});

likeHover[0].addEventListener('mouseover', () => {
    likeHover[0].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    if (flagLike == 0) {
        likeText[0].innerHTML = "좋아요";
    } else {
        likeText[0].innerHTML = "좋아요 취소";
    };
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

closeHover[0].addEventListener('mouseout', () => {
    closeHover[0].style.border = "0";
});

closeHover[0].addEventListener('mousedown', () => {
    closeHover[0].style.border = "3px solid white";
});

closeHover[0].addEventListener('mouseup', () => {
    closeHover[0].style.border = "0";
});
