import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImageOpenTitle = this._popupSelector.querySelector ('.image-container__title');
        this.popupImageOpenLink = this._popupSelector.querySelector ('.image-container__open-image');
    }
    open(title, image) {
        this.popupImageOpenLink.src= image;
        this.popupImageOpenTitle.textContent = title;
        this.popupImageOpenLink.alt= title
        super.open();
    }
}