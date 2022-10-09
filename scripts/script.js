//Перебор массива
initialCards.forEach(function (value) {
    const item = renderItem(value.name, value.link);
    container.prepend(item);
});

// функция рендеренга
function renderItem(text, link) {
    const newCard = cardTemplate.cloneNode(true) //Клоним кароточку
    const cardTitle = newCard.querySelector('.card__title')
    const cardImage = newCard.querySelector('.card__image')
    cardImage.src = link
    cardImage.alt = text
    cardTitle.textContent = text;
    //Добавить обработчик
    setListenersForButtons(newCard);
    //Возвращаем карточку
    return newCard;

}
//Добавление карточки 
function handleSubmit(evt) {
    evt.preventDefault()
    const item = renderItem(mestoName.value, mestoLink.value);
    container.prepend(item);

}
// Создать обработчики для кнопок
function setListenersForButtons(element) {
    const cardDeleteButton = element.querySelector('.card__button-delete');
    cardDeleteButton.addEventListener('click', handleDelete);
    const cardLikeButton = element.querySelector('.card__button-like');
    cardLikeButton.addEventListener('click', handleLike);
    const cardScreen = element.querySelector('.card__image');
    cardScreen.addEventListener('click', handleOpenCardImagePreview);
}


//Удаление карточки
function handleDelete(event) {
    const currentCard = event.target.closest('.card');
    currentCard.remove()
};
// кнопка лайка 
function handleLike(event) {
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

// Сабмит
formCardsElement.addEventListener('submit', handleSubmit);
const closeImagePopupButton = document.querySelector('.image-container__close-icon')
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove('animation-close')
    popupElem.classList.add('animation-open');
    popupElem.classList.add('popup_active');
};
//Закрытие popup
function closePopup(popupElem) {
    popupElem.classList.remove('animation-open');
    setTimeout(() => popupElem.classList.remove('popup_active'), 500);
    popupElem.classList.add('animation-close');
};
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popupEditProfile)
        closePopup(popupCards)
        closePopup(popupImg)
    }
})
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menu)|| e.composedPath().includes(buttonEditProfile) 
    || e.composedPath().includes(buttonAdd) || e.composedPath().includes(formCardsElement) 
    || e.composedPath().includes(menuTitle) || e.composedPath().includes(menuCardTitle) || e.composedPath().includes(popupImages)
    if (!click) {
        closePopup(popupEditProfile)
        closePopup(popupCards)
    }
    console.log(click);
})

//Кнопки
function handleSubmitProfileForm(evt) {
    evt.preventDefault()
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
};
cardCloseButton.addEventListener('click', () => {
    closePopup(popupCards)
});
buttonClose.addEventListener('click', () => {
    closePopup(popupEditProfile)
});
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupEditProfile);
});
formElement.addEventListener('submit', handleSubmitProfileForm);
buttonAdd.addEventListener('click', () => {
    openPopup(popupCards);
});
