const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const editButton = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const saveButton = menu.querySelector('.menu__button');
const closeButton = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.form');
const popupCards = document.querySelector('.popup-cards');
const addButton = document.querySelector(".profile__add-button");
const closeCardsButton = document.querySelector('.menu__card-close');

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
const container = document.querySelector('.elements')
const cardTemplate = document.querySelector('.card-template').content
const formButton = document.querySelector('.card_create')
// const popupImageTemplate = document.querySelector ('.popup-image-template').content
initialCards.forEach(function (value) { renderItem(value.name, value.link) });

// функция рендеренга
function renderItem(text, link) {
    const newCard = cardTemplate.cloneNode(true) //Клоним кароточку
    const cardTitle = newCard.querySelector('.card__title')
    const cardImage = newCard.querySelector('.card__image')
    cardImage.src = link
    cardImage.alt = text
    cardTitle.textContent = text;
    //Добавить обработччик
    setListenersForButtons(newCard);
    //Добаить карточку
    container.prepend(newCard);
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
    cardScreen.addEventListener('click', setImageSrc)
    const closeImagePopupButton = document.querySelector('.popup-image__close-icon')
    closeImagePopupButton.addEventListener('click', closeImagePopup)
}


// Добавление модального окна
const popupIMG = document.querySelector('.popup-image');
function setImageSrc(cardData) {
    const popupImages = popupIMG.querySelector('.popup-image__open-image');
    const popupImageOpenTitle = popupIMG.querySelector('.popup-image__title')
    popupImageOpenTitle.textContent = cardData.currentTarget.alt
    popupImages.alt = cardData.currentTarget.alt
    popupImages.src = cardData.currentTarget.currentSrc;
    popupIMG.classList.add('popup-image_active')
    popupIMG.classList.add('animation-open')
}


//Закрытие popup
function slowClosePopup() {
    popup.classList.remove('animation-open')

}

function closeImagePopup() {
    popupIMG.classList.remove('popup-image_active')
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
//Добавление карточки 
function handleSubmit() {
    const mesto = document.querySelector('.form-cards__input_type_text')
    const mestoLink = document.querySelector('.form-cards__input_type_link')
    renderItem(mesto.value, mestoLink.value)
    closeEditCardsPopup()
}


function openEditProfilePopup() {
    popup.classList.add('popup_active');
    textName.value = profileNameText.textContent;
    textSubtitle.value = profileSubtitleText.textContent;
    popup.classList.add('animation-open')
}

function openEditCardsPopup() {
    popupCards.classList.add('popup-cards_active');
    popupCards.classList.add('animation-open')

}

function closeEditProfilePopup() {
    popup.classList.remove('popup_active');
    popup.classList.add('animation-close')
}

function closeEditCardsPopup() {
    popupCards.classList.remove('popup-cards_active');

}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
    closeEditProfilePopup();
}
closeCardsButton.addEventListener('click', closeEditCardsPopup)
closeButton.addEventListener('click', closeEditProfilePopup);
editButton.addEventListener('click', openEditProfilePopup);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openEditCardsPopup);


// function handleSubmit (){
//     //     const mesto = document.querySelector ('.form-cards__input_type_text')
//     //     const mestoLink = document.querySelector ('.form__input_type_link')
//     //     const newCard = cardTemplate.cloneNode(true)
//     //     const cardTitle = newCard.querySelector('.card__title')
//     //     const cardImage = newCard.querySelector('.card__image')
//     //     cardImage.src = mestoLink.value;
//     //     cardImage.alt = mesto.value
//     //     cardTitle.textContent = mesto.value;
//     //     closeEditCardsPopup()
//     //     container.append(newCard);
//     //     setListenersForButtons(newCard);
//     // }