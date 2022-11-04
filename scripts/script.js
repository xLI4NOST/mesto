class Card {
    constructor(title, image, templateSelector) {
        this._cardTitle = title
        this._cardImage = image
        this._templateSelector = templateSelector
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
        this._setEventListiners();
        return this._element
    }
    _handleOpenPopupImg() {
        popupImages.src = this._cardImage
        popupImages.alt = this._cardTitle
        popupImageOpenTitle.textContent = this._cardTitle
        openPopup(popupImg)
    }

    _handleDeleteCard (event){
        this._currentCard = event.target.closest ('.card')
        this._currentCard.remove()
    }
    _handleLikeCard (evt){
        this._currentLike = evt.target.closest ('.card__button-like')
        this._currentLike.classList.toggle('card__button-like_active')
    }
 
    _setEventListiners() {
        const img = this._element.querySelector('.card__image')
        img.addEventListener('click', () => {
            this._handleOpenPopupImg()
        })
        this._element.querySelector ('.card__button-delete')
        .addEventListener ('click', (event)=>{
            this._handleDeleteCard(event)
        })
        this._element.querySelector ('.card__button-like')
        .addEventListener ('click', (event)=>{
            this._handleLikeCard(event)
        })
        
    }
}
//Добавление новой карточки в DOM
function handleAddCard() {
    const card = new Card(mestoName.value, mestoLink.value, '.card-template')
    const item = card.generateCard()
    return item
}
//Добавление карточки на страницу 
function createCard (){
    const readyCard = handleAddCard ()
    container.prepend(readyCard)
    formAddCard.reset();
}

//Обработчик карточки
formCardsElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    createCard()
    closePopup(popupCards)
})

//Добавление карточек с массива
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '.card-template')
    const cardElement = card.generateCard()
    container.prepend(cardElement)
})

