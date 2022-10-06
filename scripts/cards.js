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
<<<<<<< HEAD
=======

//Удаление карточки
function handleDelete(event) {
    const currentCard = event.target.closest('.card');
    currentCard.remove()
};
>>>>>>> c2b395face0f2a3baea78a59d7bd13b6ab42e2bd
// Создать обработчики для кнопок
function setListenersForButtons(element) {
    const cardDeleteButton = element.querySelector('.card__button-delete');
    cardDeleteButton.addEventListener('click', handleDelete);
    const cardLikeButton = element.querySelector('.card__button-like');
    cardLikeButton.addEventListener('click', handleLike);
    const cardScreen = element.querySelector('.card__image');
    cardScreen.addEventListener('click', handleOpenCardImagePreview);
}

<<<<<<< HEAD

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
=======
>>>>>>> c2b395face0f2a3baea78a59d7bd13b6ab42e2bd
formCardsElement.addEventListener('submit', handleSubmit);
const closeImagePopupButton = document.querySelector('.image-container__close-icon')
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});