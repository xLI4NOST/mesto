class Card {
    constructor(title, image) {
        this._cardTitle = title
        this._cardImage = image
    }
    _getTemplate() {
        const cardTemplate = document.querySelector('.card-template')
            .content
            .querySelector('.card')
            .cloneNode(true)
        return cardTemplate
    }

    generateCard() {
        const cardTitle = document.querySelector('.card__title')
        const cardImage = document.querySelector('.card__image')
        this._element = this._getTemplate()
        this._element.querySelector('.card__image').src = this._cardImage
        this._element.querySelector('.card__image').alt = this._cardTitle
        this._element.querySelector('.card__title').textContent = this._cardTitle
        this._setEventListiners();
        return this._element
    }
    _handleOpenPopupImg() {
        popupImages.src = this._cardImage
        popupImages.alt = this._cardTitle
        popupImageOpenTitle.textContent = this._cardTitle
        openPopup(popupImg)
    }
    _handleClosePopup(){
        const activePop = document.querySelector ('.popup_active')
        closePopup(activePop)
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
    
        closeImagePopupButton
        .addEventListener('click', () => {
            this._handleClosePopup()
        });
        
    }
}
//Добавление новой карточки
function handleAddCard() {
    const card = new Card(mestoName.value, mestoLink.value)
    const item = card.generateCard()
    container.prepend(item)
    formAddCard.reset();
}
//Обработчик карточки
saveButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    handleAddCard()
    closePopup(popupCards)
})

//Добавление карточек с массива
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link)
    const cardElement = card.generateCard()
    container.prepend(cardElement)
})
//обработчик маисва
function handleLikeCard(event) {
    const currentLike = event.target.closest('.card__button-like')
    currentLike.classList.toggle('card__button-like_active')
};

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove('animation-close');
    popupElem.classList.add('popup_active');
    document.addEventListener('keydown', closeEsc)
};
function closeEsc(e) {
    if (e.keyCode === esc) {
        const popupElem = document.querySelector('.popup_active');
        closePopup(popupElem);
    }
}
//Закрытие popup
function closePopup(popupElem) {
    setTimeout(() => popupElem.classList.remove('popup_active'), 500);
    popupElem.classList.add('animation-close');
    document.removeEventListener('keydown', closeEsc);
};
//Закрытие popup по пустому месту
allPopUps.forEach((popupElem) => {
    popupElem.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
            closePopup(popupElem);
        }
    })
});

// Форма редактирования профиля
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupEditProfile);
    const formCards = new FormValidator(settings, formElement)
    formCards.enableValidation(settings, formElement)
});

//Открытие popupCards
function handleOpenPopupCard (){
    openPopup(popupCards)
}
document.querySelector ('.profile__add-button')
.addEventListener ('click', ()=>{
    const formCards = new FormValidator(settings, formCardsElement)
    formCards.enableValidation(settings, formCardsElement)
handleOpenPopupCard()
})
cardCloseButton.addEventListener ('click', ()=>{
    closePopup(popupCards)
})

addPopupEventHandlers(popupEditProfile, (evt) => {
    evt.preventDefault();
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
});

function fillInFormInputs() {
    textName.value = profileNameText.textContent
    textSubtitle.value = profileSubtitleText.textContent
}

function addPopupEventHandlers(popupElement, submitHandler) {
    const closeButton = popupElement.querySelector('.menu__close-icon');
    const form = popupElement.querySelector('.form');
    fillInFormInputs()
    form.addEventListener('submit', evt => {
        submitHandler(evt);
        closePopup(popupElement);
    });

    closeButton.addEventListener('click', () => {
        closePopup(popupElement);
    });
}