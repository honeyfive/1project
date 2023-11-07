$(document).ready(function() {
    $('body').css('opacity', '1');
});

function googleTranslateElementInit() {
new google.translate.TranslateElement({
    pageLanguage: 'ko',
    includedLanguages: 'ko,zh-CN,zh-TW,ja,vi,th,tl,km,my,mn,ru,en,fr,ar',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
}, 'google_translate_element');
}
function OnOff(type){
    if(type=="v"){
        document.getElementsByClassName('sms')[0].style.display = "none"; 
        document.getElementsByClassName('eamil')[0].style.display = "block";
    }else if(type == "a"){
        document.getElementsByClassName('eamil')[0].style.display = "none";
        document.getElementsByClassName('sms')[0].style.display = "block";
    }
}