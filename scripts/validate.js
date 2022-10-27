class FormValidator {
    constructor() {

    }

}

//вызов ошибки
function updateInputValidation(settings, input) {
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    if(errorSpan.textContent !== "") {
        input.classList.add(settings.inputErrorClass);
        errorSpan.classList.add(settings.errorClass);
    } else {
        input.classList.remove(settings.inputErrorClass);
        errorSpan.classList.remove(settings.errorClass);
    }
}

//Правила для кнопки сабмита
function updateSubmitButton(settings, button, state) {
    if (state) {
        button.removeAttribute('disabled');
        button.classList.add(settings.activeButtonClass);
    } else {
        button.setAttribute('disabled', true);
        button.classList.remove(settings.activeButtonClass);
    }
}
//Навесить обработчики для инпутов
function setFormEventListeners(settings, form) {
    const allInputs = form.querySelectorAll(settings.inputSelector);
    const submitButton = form.querySelector(settings.submitButtonSelector);

    for(let input of allInputs) {
        input.addEventListener('input', () => {
            updateInputValidation(settings, input);
            updateSubmitButton(settings, submitButton, form.checkValidity());
        });
    }

    form.addEventListener('reset', evt => {
        updateSubmitButton(settings, submitButton, false);
    });
}

function enableValidation(settings) {
    const allForms = document.querySelectorAll(settings.formSelector);

    for (let form of allForms) {
        setFormEventListeners(settings, form);
    }
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.menu__submit',
    activeButtonClass: 'form__button_active',
    inputErrorClass: 'form__input_error',
    errorClass: 'error-span_visible'
});
