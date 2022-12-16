export default class Popup {
    constructor (popupSelector){
        this._popupSelector = popupSelector
        this._closeIcon = popupSelector.querySelector ('.close-icon')
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    open(){
        this._popupSelector.classList.remove('animation-close');
        this._popupSelector.classList.add('popup_active');
        document.addEventListener ('keydown', this._handleEscClose);
    }
    close(){
        setTimeout(() => this._popupSelector.classList.remove('popup_active'), 500);
        this._popupSelector.classList.add('animation-close');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
            if (evt.key === "Escape") {
                this.close()
            }
    }

    setEventListiners(){
        this._popupSelector.addEventListener('click', (evt)=>{
            if (evt.currentTarget === evt.target) {
                this.close()
            }
        })
        this._closeIcon.addEventListener ('click', ()=>{
            this.close()
        })
    }
}