const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.menu__submit',
    activeButtonClass: 'form__button_active',
    inputErrorClass: 'form__input_error',
    errorClass: 'error-span_visible'
}
class FormValidator {
    constructor(settings, form)
    {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._activeButtonClass = settings.activeButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = form;
      }
    
//вызов ошибки
_updateInputValidation(settings, input) {
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
_updateSubmitButton(settings, button, state) {
    if (state) {
        button.removeAttribute('disabled');
        button.classList.add(settings.activeButtonClass);
    } else {
        button.setAttribute('disabled', true);
        button.classList.remove(settings.activeButtonClass);
    }
}

//Навесить обработчики для инпутов
_setFormEventListeners(settings, form) {
    const allInputs = form.querySelectorAll(settings.inputSelector);
    const submitButton = form.querySelector(settings.submitButtonSelector);

    for(let input of allInputs) {
        input.addEventListener('input', () => {
            this._updateSubmitButton(settings, submitButton, form.checkValidity());
            this._updateInputValidation(settings, input);
        });
    }

    form.addEventListener('reset', evt => {
       this._updateSubmitButton(settings, submitButton, false);
    });
}

enableValidation(settings, input) {
    const allForms = document.querySelectorAll(settings.formSelector);

    for (let form of allForms) {
        this._setFormEventListeners(settings, form);
    }
}
}


