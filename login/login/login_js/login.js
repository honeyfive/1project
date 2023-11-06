function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'ko',
        includedLanguages: 'ko,zh-CN,zh-TW,ja,vi,th,tl,km,my,mn,ru,en,fr,ar',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

const email = document.querySelector('.email');
const pw = document.querySelector('.password');
const btn = document.querySelector('.login-button');

function color(){
if((email.value.length>=6 && email.value.length<=12) && pw.value.length>=5){
    btn.style.backgroundColor = "#ff4808";
    btn.disabled = false;
} else {
    btn.style.backgroundColor = "#737373";
    btn.disabled = true;
}
}

email.addEventListener('keyup', color);
pw.addEventListener('keyup', color);