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

const closeImagePopupButton = document.querySelector('.image-container__close-icon')
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove('animation-close');
    popupElem.classList.add('popup_active');
    textName.value = profileNameText.textContent 
    textSubtitle.value = profileSubtitleText.textContent
};
//Закрытие popup
function closePopup() {
    let popupElem = document.querySelector('.popup_active');
    if(popupElem) {
        setTimeout(() => popupElem.classList.remove('popup_active'), 500);
        popupElem.classList.add('animation-close');
    }
};
document.addEventListener('keydown', (e) => {
    if (e.keyCode === esc) {
        closePopup()
    }
});
//Закрытие popup по пустому месту
document.querySelectorAll('.popup').forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        if(evt.currentTarget === evt.target) {
            closePopup();
        }
    })
});

// Форма добавления картинки
buttonAdd.addEventListener('click', () => {
    const form = popupCards.querySelector('.form');
    form.reset();
    openPopup(popupCards);
});
addPopupEventHandlers(popupCards, (evt) => {
    evt.preventDefault()
    const item = renderItem(mestoName.value, mestoLink.value);
    container.prepend(item);
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

function addPopupEventHandlers(popupElement, submitHandler) {
    const closeButton = popupElement.querySelector('.menu__close-icon');
    const form = popupElement.querySelector('.form');

    form.addEventListener('submit', evt => {
        submitHandler(evt);
        closePopup(popupElement);
    });

    closeButton.addEventListener('click', () => {
        closePopup(popupElement);
    });
}