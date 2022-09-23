const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const buttonEditProfile = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
// const saveButton = menu.querySelector('.menu__button');
const buttonClose = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.form');
const popupCards = document.querySelector('.popup-cards');
const addButton = document.querySelector(".profile__add-button");
const cardCloseButton = document.querySelector('.menu__card-close');
const container = document.querySelector('.elements')
const cardTemplate = document.querySelector('.card-template').content
const formButton = document.querySelector('.card_create')
const mestoName = document.querySelector('.form-cards__input_type_text')
const mestoLink = document.querySelector('.form-cards__input_type_link')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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
function handleSubmit() {
    const item = renderItem(mestoName.value, mestoLink.value);
    container.prepend(item);
    closeEditCardsPopup();
}
// Создать обработчики для кнопок
function setListenersForButtons(element) {
    const deleteCardButton = element.querySelector('.card__button-delete')
    deleteCardButton.addEventListener('click', handleDelete)
    const cardLikeButton = element.querySelector('.card__button-like')
    cardLikeButton.addEventListener('click', handleLike)
    const cardAddButton = popupCards.querySelector('.menu-cards__buttonCreate')
    cardAddButton.addEventListener('click', handleSubmit)
    const cardScreen = element.querySelector('.card__image')
    cardScreen.addEventListener('click', handleOpenCardImagePreview)
    const closeImagePopupButton = document.querySelector('.popup-image__close-icon')
    closeImagePopupButton.addEventListener('click', () => {
        closePopup(popupImg)
    })
}


// Добавление модального окна
const popupImg = document.querySelector('.popup-image');
function handleOpenCardImagePreview(cardData) {
    const popupImages = popupImg.querySelector('.popup-image__open-image');
    const popupImageOpenTitle = popupImg.querySelector('.popup-image__title')
    popupImageOpenTitle.textContent = cardData.currentTarget.alt
    popupImages.alt = cardData.currentTarget.alt
    popupImages.src = cardData.currentTarget.currentSrc;
    openPopup (popupImg)
}

//Удаление карточки
function handleDelete(event) {
    const currentCard = event.target.closest('.card')
    currentCard.remove()
}
// кнопка лайка 
function handleLike(event) {
    const currentLike = event.target.closest('.card__button-like')
    currentLike.classList.toggle('card__button-like_active')
}

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove ('animation-close')
    popupElem.classList.add('animation-open');
    popupElem.classList.add('popup_active')
    
}
//Закрытие popup
function closePopup (popupElem) {
    popupElem.classList.remove('animation-open');
    setTimeout(() => popupElem.classList.remove('popup_active'), 500);
    popupElem.classList.add ('animation-close')
}

function handleSubmitProfileform(evt) {
    evt.preventDefault();
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;

}
cardCloseButton.addEventListener('click', () => {
    closePopup(popupCards)
})
buttonClose.addEventListener('click', () => {
    closePopup(popup)
});
buttonEditProfile.addEventListener('click', () => {
    textName.value = profileNameText.textContent;
    textSubtitle.value = profileSubtitleText.textContent;
    openPopup(popup);
});
formElement.addEventListener('submit', handleSubmitProfileform);
addButton.addEventListener('click', () => {
    openPopup(popupCards);
} );


