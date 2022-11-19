
export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._cardTitle = data.name
        this._cardImage = data.link
        this._templateSelector = templateSelector
        this.handleCardClick = handleCardClick
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
        this._buttonDelete = this._element.querySelector ('.card__button-delete');
        this._img = this._element.querySelector ('.card__image')
        this._setEventListiners();
        return this._element
    }

    _handleDeleteCard (){
        this._element.remove()
        this._element = null
    }
    _handleLikeCard (){
        this._buttonLike.classList.toggle('card__button-like_active'); 
    }
 
    _setEventListiners() {
        this._img
        .addEventListener('click', () => {
            this.handleCardClick(this._cardTitle, this._cardImage)
        })
        this._buttonDelete
        .addEventListener ('click', (event)=>{
            this._handleDeleteCard(event)
        })
        this._buttonLike.addEventListener('click', (evt) => { 
            this._handleLikeCard(evt); 
       }); 
        
    }
}
