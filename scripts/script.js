const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const buttonEditProfile = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const buttonClose = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.form');
const popupCards = document.querySelector('.popup_type_cards');
const buttonAdd = document.querySelector(".profile__add-button");
const cardCloseButton = document.querySelector('.menu__card-close');
const container = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content
const formButton = document.querySelector('.card_create');
const mestoName = document.querySelector('.form-cards__input_type_text');
const mestoLink = document.querySelector('.form-cards__input_type_link');
const formCardsElement = document.querySelector('.form-cards');
const menuTitle = document.querySelector ('.menu__title')
const menuCardTitle = document.querySelector ('.menu__title-cards')
const popupImg = document.querySelector('.popup_type_image');
const popupImages = popupImg.querySelector('.image-container__open-image');
const popupImageOpenTitle = popupImg.querySelector('.image-container__title');

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





// Добавление модального окна
function handleOpenCardImagePreview(cardData) {
    popupImageOpenTitle.textContent = cardData.currentTarget.alt;
    popupImages.alt = cardData.currentTarget.alt;
    popupImages.src = cardData.currentTarget.currentSrc;
    openPopup(popupImg);
}



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

function handleSubmitProfileForm(evt) {
    evt.preventDefault()
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
};

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menu)|| e.composedPath().includes(buttonEditProfile) 
    || e.composedPath().includes(buttonAdd) || e.composedPath().includes(formCardsElement) 
    || e.composedPath().includes(menuTitle) || e.composedPath().includes(menuCardTitle) || e.composedPath().includes(popupImages)
    if (!click) {
        closePopup(popup)
        closePopup(popupCards)
        closePopup(popupImg)
    }
    console.log(click);
})






