$(document).ready(function() {
    $('body').css('opacity', '1');
});

const input_id = document.querySelector('.input-id')
const email = document.querySelector('.email-condition');
const id = document.querySelector('.no-input');
const input_password = document.querySelector('.input-password');
const input_password_check = document.querySelector('.input-password-check')
const psw = document.querySelector('.password-condition')
const password = document.querySelector('.no-input-condition');
const password_check = document.querySelector('.no-password-condition');
const not_password = document.querySelector('.not-password');
const agree = document.querySelector('#agree');
const agree1 = document.querySelector('#agree1');
const agree2 = document.querySelector('#agree2');
const agree3 = document.querySelector('#agree3');
const join_btn = document.querySelector('.join-button');

function selectall() {
    if(document.getElementById("agree").checked==true){
        for(let i=0;i<6;i++) document.getElementsByName("agree")[i].checked=true;
    } else if(document.getElementById("agree").checked==false){
        for(let i=0;i<6;i++) document.getElementsByName("agree")[i].checked=false;  
    }
}

function display(){
    if(input_id.value.length == 0){
        email.style.display = "none";
        id.style.display = "block";
        password.style.display = "none"
    }else if (input_id.value.length >= 6 && input_id.value.length <= 12){
        id.style.display = "none";
        password.style.display = "none";
        email.style.display = "block";
    }else {
        email.style.display = "none";
        id.style.display = "none";
        password.style.display = "block"
    }
    if(input_password.value != input_password_check.value){
        psw.style.display = "none";
        not_password.style.display = "block";
    } else {
        psw.style.display = "block";
        not_password.style.display = "none";
    }
    
    const is_checked = agree.checked;
    const is_checked1 = agree1.checked;
    const is_checked2 = agree2.checked;
    const is_checked3 = agree3.checked;

    if((input_id.value.length >= 6 && input_id.value.length <= 12) &&
    (input_password.value == input_password_check.value) && 
    (input_password.value.length > 0) && 
    ((is_checked1==true)&&(is_checked2==true)&&(is_checked3==true))){
        join_btn.disabled = false;
        join_btn.style.backgroundColor = "#ff4808";
    } else {
        join_btn.disabled = true;
        join_btn.style.backgroundColor = "#737373";
    }
}

input_id.addEventListener('keyup', display);
input_password.addEventListener('keyup', display);
input_password_check.addEventListener('keyup', display);