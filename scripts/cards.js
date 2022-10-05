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

//Удаление карточки
function handleDelete(event) {
    const currentCard = event.target.closest('.card');
    currentCard.remove()
};
// Создать обработчики для кнопок
function setListenersForButtons(element) {
    const cardDeleteButton = element.querySelector('.card__button-delete');
    cardDeleteButton.addEventListener('click', handleDelete);
    const cardLikeButton = element.querySelector('.card__button-like');
    cardLikeButton.addEventListener('click', handleLike);
    const cardScreen = element.querySelector('.card__image');
    cardScreen.addEventListener('click', handleOpenCardImagePreview);
}

formCardsElement.addEventListener('submit', handleSubmit);
const closeImagePopupButton = document.querySelector('.image-container__close-icon')
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});