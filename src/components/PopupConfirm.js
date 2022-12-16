import { data } from "autoprefixer";
import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector)
        this._handleSubmit = handleSubmit
        this._submitButton = this._popupSelector.querySelector ('.menu-confirm__button')
    }

    open() {
        super.open()
    }

    setEventListiners(id) {
        super.setEventListiners()
        this._submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            this._handleSubmit(this._card);
        })        
    }

    getCurrentCard(card) {
        this._card = card;
      }
    close() {
        super.close()
    }

}