export default class Popup {
    constructor (popupSelector){
        this._popupSelector = popupSelector
        this._closeIcon = document.querySelectorAll ('.menu__close-icon')
    }
    open(){
        this._popupSelector.classList.remove('animation-close');
        this._popupSelector.classList.add('popup_active');
        this.setEventListiners()
    }
    close(){
        setTimeout(() => this._popupSelector.classList.remove('popup_active'), 500);
        this._popupSelector.classList.add('animation-close');
    }

    _handleEscClose(e){
            if (e.keyCode === 27) {
                this.close()
            }
    }

    setEventListiners(){
        document.addEventListener ('keydown', (e)=>{
            this._handleEscClose(e)
        })
        this._popupSelector.addEventListener('click', (evt)=>{
            if (evt.currentTarget === evt.target) {
                this.close()
            }
        })

    }
}