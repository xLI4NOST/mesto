import Api from "./Api"

export default class Card {
    constructor(data, templateSelector, handleCardClick, like, deleteLike, popupConfirm, myId) {
        this._data = data
        this._cardTitle = data.name
        this._cardImage = data.link
        this._templateSelector = templateSelector
        this.handleCardClick = handleCardClick
        this._popupConfirm = popupConfirm
        this._myId = myId
        this._like = like
        this._deleteLike = deleteLike
    }
    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true)
        return cardTemplate
    }

    generateCard() {
        this._element = this._getTemplate()
        this._element.querySelector('.card__title').textContent = this._cardTitle
        this._element.querySelector('.card__image').alt = this._cardTitle
        this._element.querySelector('.card__image').src = this._cardImage
        this._buttonLike = this._element.querySelector('.card__button-like');
        this._buttonDelete = this._element.querySelector('.card__button-delete');
        this._img = this._element.querySelector('.card__image');
        this._likeInfo = this._element.querySelector('.like-info')
        this._setEventListiners();
        return this._element
    }

    _handleDeleteCard() {
        return this._data._id
    }
    _handleLikeCard() {
        if (!this._data.likes.find(like => like._id == this._myId)) {
            this._buttonLike.classList.add('card__button-like_active');
            this._like(this._data._id)
        } else {
            this._buttonLike.classList.remove('card__button-like_active');
            this._deleteLike(this._data._id)
        }
    }

    _setEventListiners() {
        this._img
            .addEventListener('click', () => {
                this.handleCardClick(this._cardTitle, this._cardImage)
            })
        this._buttonDelete.addEventListener('click', () => {
            this._popupConfirm.open();
            this._popupConfirm.setEventListiners(this._data._id)
        })
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeCard()
        })

        this._getInfoLikes()
        this._buttonDeleteOptions()
    }
    _getInfoLikes() {
        this._likeInfo.textContent = this._data.likes.length
        if (!this._data.likes.find(like => like._id = this._myId)) {
            this._buttonLike.classList.remove('card__button-like_active');
        } else {
            this._buttonLike.classList.add('card__button-like_active');
        }
    }
    _buttonDeleteOptions() {
        if (this._data.owner._id != this._myId) {
            this._buttonDelete.remove()
            this._buttonDelete = null;
        }
    }
}
