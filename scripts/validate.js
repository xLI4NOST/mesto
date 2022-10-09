//Валидация
const formCards = document.forms.formCards;
const formProfile = document.forms.formProfile

//вызов ошибки
function setInValid(input) {
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    input.style.borderBottom= '1px solid red'
}
//Правила для кнопки сабмита
function setSubmitButton(button, state) {
    if (state) {
        button.removeAttribute('disabled')
        button.classList.add('form__button_active')
        
    } else {
        button.setAttribute('disabled', true)
        button.classList.remove('form__button_active')
    }
}

function handleValidateInput(evt) {
    const currentForm = evt.currentTarget;
    const submitButton = currentForm.querySelector('.menu__button');
    setInValid(evt.target);
    if (currentForm.checkValidity()) {
        setSubmitButton(submitButton, true)
        
    } else {
        setSubmitButton(submitButton, false)
    }
}

//Проверка форм после сабмита
function sendForm(evt) {
    evt.preventDefault();
    const currentForm = evt.target;
    if (currentForm.checkValidity()) {
        closePopup(popupEditProfile)
        closePopup(popupCards)
        currentForm.reset();
    } else {
    }
}
//Слушатели
formCards.addEventListener('submit', sendForm);
formCards.addEventListener('input', handleValidateInput);

formProfile.addEventListener('submit', sendForm);
formProfile.addEventListener('input', handleValidateInput);