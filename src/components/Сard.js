import { data } from "autoprefixer"

export default class Card {
    constructor(data, templateSelector, handleCardClick, like, deleteLike, deleteCard, myId) {
        this.data = data
        this._cardTitle = data.name
        this._cardImage = data.link
        this._templateSelector = templateSelector
        this.handleCardClick = handleCardClick
        this._like = like
        this._deleteLike = deleteLike
        this._myId = myId
        this._handleDeleteCard = deleteCard
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
        this._likeButton = this._element.querySelector('.card__button-like');
        this._buttonDelete = this._element.querySelector('.card__button-delete');
        this._img = this._element.querySelector('.card__image');
        this._likeInfo = this._element.querySelector('.like-info')
        this._setEventListiners();
        return this._element
    }

    setDeleteCard() {
        this._element.remove()
        this._element == null
    }

    _handleLikeCard() {
        if (!this._isLikedByMe()) {
            this._like(this);
        } else {
            this._deleteLike(this)
        }
    }

    _setEventListiners() {
        this._img
            .addEventListener('click', () => {
                this.handleCardClick(this._cardTitle, this._cardImage)
            })
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteCard(this)
        })
        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard();
        })
        this.getInfoLikes()
        this._buttonDeleteOptions()
    }

    _isLikedByMe() {
        return this.data.likes.find(like => like._id == this._myId) !== undefined;
    }

    getInfoLikes() {
        this._likeInfo.textContent = this.data.likes.length
        
        const isButtonLiked = this._likeButton.classList.contains('card__button-like_active');
        if(isButtonLiked !== this._isLikedByMe()) {
            if(isButtonLiked) {
                this._likeButton.classList.remove('card__button-like_active')
            } else {
                this._likeButton.classList.add('card__button-like_active')
            }
        }
    
    }
    _buttonDeleteOptions() {
        if (this.data.owner._id != this._myId) {
            this._buttonDelete.remove()
            this._buttonDelete = null;
        }
    }
}
