class Card {
    constructor (title, image, ){
        this._cardTitle = title
        this._cardImage = image
    }
    _getTemplate (){
        const cardTemplate = document.querySelector ('.card-template')
        .content
        .querySelector ('.card')
        .cloneNode(true)
        return cardTemplate
    }

    generateCard(){
        const cardTitle = document.querySelector('.card__title')
        const cardImage = document.querySelector('.card__image')
        this._element = this._getTemplate()
        this._element.querySelector ('.card__image').src = this._cardImage
        this._element.querySelector ('.card__image').alt = this._cardTitle
        this._element.querySelector ('.card__title').textContent = this._cardTitle
        this._setEventListiners();
        return this._element
    }
    _handleOpenPopup(){
        popupImages.src = this._cardImage
        popupImages.alt = this._cardTitle
        openPopup(popupImg)
    }
    // _hendleDeleteCard (event){
    //     const cardDeleteButton = document.querySelector('.card__button-delete');
    //     this._currentCard = event.target.closest ('.card')
    //     this._currentCard.remove()
    // }
    _handleAddCard (){
        const card = new Card ()
        const item = card.generateCard()
        item.title = mestoName.value
        item.src = mestoLink.value
        container.prepend(item)
    }
    _setEventListiners (){
        const img = this._element.querySelector ('.card__image')
        img.addEventListener ('click', ()=>{
            this._handleOpenPopup()
        })
        saveButton.addEventListener ('click', (evt)=>{
            evt.preventDefault()
            this._handleAddCard()
        })
    }
}

initialCards.forEach ((item) => {
    const card = new Card (item.name, item.link)
    const cardElement = card.generateCard()
    container.prepend (cardElement)
}
)



// Создать обработчики для кнопок
function setListenersForButtons(element) {
    // const cardDeleteButton = element.querySelector('.card__button-delete');
    // cardDeleteButton.addEventListener('click', handleDeleteCard);
    const cardLikeButton = element.querySelector('.card__button-like');
    cardLikeButton.addEventListener('click', handleLikeCard);
    const cardScreen = element.querySelector('.card__image');
    cardScreen.addEventListener('click', handleOpenCardImagePreview);
}


// //Удаление карточки
// function handleDeleteCard(event) {
//     const currentCard = event.target.closest('.card');
//     currentCard.remove()
// };
// кнопка лайка 
function handleLikeCard(event) {
    const currentLike = event.target.closest('.card__button-like')
    currentLike.classList.toggle('card__button-like_active')
};


// Добавление модального окна
function handleOpenCardImagePreview(cardData) {
    popupImageOpenTitle.textContent = cardData.currentTarget.alt;
    popupImages.alt = cardData.currentTarget.alt;
    popupImages.src = cardData.currentTarget.currentSrc;
    openPopup(popupImg);
}
//Закртие картинки на крестик
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove('animation-close');
    popupElem.classList.add('popup_active');
    document.addEventListener('keydown', closeEsc)
};

function closeEsc (e){
    if (e.keyCode === esc ){
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
        if(evt.currentTarget === evt.target) {
            closePopup(popupElem);
        }
    })
});

// Форма добавления картинки
buttonAdd.addEventListener('click', () => {
    formAddCard.reset();
    openPopup(popupCards);
});


// Форма редактирования профиля
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupEditProfile);
});

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