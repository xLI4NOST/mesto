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
//Открытие popup
// function openPopUp (event) {
//     currentPopUp = event.target.closest ('.popup')
// }

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
    closeImagePopupButton.addEventListener('click', closeImagePopup)
}


// Добавление модального окна
const popupImg = document.querySelector('.popup-image');
function handleOpenCardImagePreview(cardData) {
    const popupImages = popupImg.querySelector('.popup-image__open-image');
    const popupImageOpenTitle = popupImg.querySelector('.popup-image__title')
    popupImageOpenTitle.textContent = cardData.currentTarget.alt
    popupImages.alt = cardData.currentTarget.alt
    popupImages.src = cardData.currentTarget.currentSrc;
    popupImg.classList.add('popup-image_active')
    popupImg.classList.add('animation-open')
}


//Закрытие popup
function slowClosePopup() {
    popup.classList.remove('animation-open')

}

function closeImagePopup() {
    popupImg.classList.remove('popup-image_active')
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

function handleSubmitProfileform(evt) {
    evt.preventDefault();
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
    closeEditProfilePopup();

}
cardCloseButton.addEventListener('click', closeEditCardsPopup)
buttonClose.addEventListener('click', closeEditProfilePopup);
buttonEditProfile.addEventListener('click', openEditProfilePopup);
formElement.addEventListener('submit', handleSubmitProfileform);
addButton.addEventListener('click', openEditCardsPopup );