const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const buttonEditProfile = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const buttonClose = menu.querySelectorAll('.menu__close-icon');
const popupEditProfile = page.querySelector('.popup');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popupEditProfile.querySelector('.form');
const popupCards = document.querySelector('.popup_type_cards');
const buttonAdd = document.querySelector(".profile__add-button");
const cardCloseButton = document.querySelector('.menu__card-close');
const container = document.querySelector('.elements');
const formButton = document.querySelector('.card_create');
const mestoName = document.querySelector('.form-cards__input_type_text');
const mestoLink = document.querySelector('.form-cards__input_type_link');
const formCardsElement = document.querySelector('.form-cards');
const menuTitle = document.querySelector ('.menu__title')
const menuCardTitle = document.querySelector ('.menu__title-cards')
const popupImg = document.querySelector('.popup_type_image');
const popupImages = popupImg.querySelector('.image-container__open-image');
const popupImageOpenTitle = popupImg.querySelector('.image-container__title');
const esc = 27;
const formAddCard = popupCards.querySelector('.form');
const allPopUps = document.querySelectorAll('.popup');
const closeImagePopupButton = document.querySelector('.image-container__close-icon')
const saveButton = document.querySelector ('.menu-cards__buttonCreate')

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