
   export default class FormValidator {
    constructor(settings, form)
    {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._activeButtonClass = settings.activeButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = form;
        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
      }
    
//вызов ошибки
_updateInputValidation(input) {
    const errorSpan = document.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    if(!input.checkValidity) {
        input.classList.add(this._inputErrorClass);
        errorSpan.classList.add(this._errorClass);
    }
}

//спарятать ошибку 
_closeError (input){
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
   if (input.checkValidity){
        input.classList.remove(this._inputErrorClass);
        errorSpan.classList.remove(this._errorClass);
    }
}

//Правила для кнопки сабмита
_updateSubmitButton() {
    if (this._form.checkValidity()) {
        this._submitButton.removeAttribute('disabled');
        this._submitButton.classList.add(this._activeButtonClass);
    } else {
        this.disableSubmitButton()
    }
}

disableSubmitButton (){
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.remove(this._activeButtonClass);
}

//Навесить обработчики для инпутов
_setFormEventListeners() {
    for(let input of this._inputList) {
        input.addEventListener('input', () => {
            this._updateSubmitButton();
            this._updateInputValidation(input);
            this._closeError(input)
        });
    }
}

enableValidation() {
        this._setFormEventListeners();
}
}