export default class Ux {
    constructor (popupSelector){
        this._popupSelector = popupSelector
    }
    loading (isLoading){
     if(isloading){
        this._submitButton = this._popupSelector.document.querySelector ('.menu__submit')
        this._submitButton.textContent + ('...')
     } else{

     }
    }
}