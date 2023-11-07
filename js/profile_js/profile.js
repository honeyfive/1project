const pinArr = document.querySelectorAll('.profile-pin-input-number');
const pinInputError = document.querySelector('.profile-pin-input-error');

pinArr[0].focus();

pinArr.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace')) {
            e.preventDefault();
        }
    });

    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            if (index < pinArr.length - 1) {
                pinArr[index + 1].focus();
            }
        } else {
            if (index > 0) {
                pinArr[index - 1].focus();
            }
        }

        const pinValues = Array.from(pinArr).map(input => input.value).join('');
        if (pinValues.length >=1 && pinValues.length < 6) {
            pinInputError.textContent = '프로필 비밀번호는 6자리입니다.';
        } else {
            pinInputError.textContent = '';
            if (pinValues.length === 6) {
                window.location.href = "../../html/main_html/main_home.html";
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0) {
            if (index > 0) {
                pinArr[index - 1].focus();
            }
        }
    });

});