import Popup from "./popup.js";
export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm){
        super(popupSelector)
        this._submitForm = submitForm
        this._formData = document.querySelectorAll ('.form__input')
    }
    _getInputValues (){
        this._formData.forEach (()=>{
            get(first, second)
        })
    }
    setEventListiners(){
        super.setEventListiners()

    }
    close(){
        super.close()
        this._formData.reset()
    }
}