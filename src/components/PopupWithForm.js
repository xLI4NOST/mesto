import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm){
        super(popupSelector)
        this._submitForm = submitForm
        this._form = this._popupSelector.querySelector ('.form')
        this._formData = this._popupSelector.querySelectorAll ('.form__input')
    }
    _getInputValues (){
        const values = {}
        this._formData.forEach((x) => {
            values[x.name] = x.value;
        });
        return values;
    }
    setEventListiners(){
        super.setEventListiners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(evt, this._getInputValues());
        });
    }
    open(values) {
        this._formData.forEach((x) => {
            x.value = values[x.name];
        });
        super.open();
    }
    close(){
        super.close();
        this._form.reset();
    }
}