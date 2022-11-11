export default class Popup {
    constructor (popupSelector){
        this._popupSelector = popupSelector
        this._closeIcon = document.querySelectorAll ('.menu__close-icon')
    }
    open(){
        this._popupSelector.classList.remove('animation-close');
        this._popupSelector.classList.add('popup_active');
    }
    close(){
        setTimeout(() => this._popupSelector.classList.remove('popup_active'), 500);
        this._popupSelector.classList.add('animation-close');
    }

    _handleEscClose(){

    }

    setEventListiners(){
        this._closeIcon.addEventListener('click', ()=>{
            this.close()
        })
    }
}