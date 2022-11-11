import Card from "./card.js"
import FormValidator from "./FormValidator.js";
import Section from "./section.js";
import Popup from "./popup.js";
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
const menuTitle = document.querySelector('.menu__title')
const menuCardTitle = document.querySelector('.menu__title-cards')
const popupImg = document.querySelector('.popup_type_image');
const popupImages = popupImg.querySelector('.image-container__open-image');
const popupImageOpenTitle = popupImg.querySelector('.image-container__title');
const esc = 27;
const formAddCard = popupCards.querySelector('.form');
const allPopUps = document.querySelectorAll('.popup');
const closeImagePopupButton = document.querySelector('.image-container__close-icon')
const saveButton = document.querySelector('.menu-cards__buttonCreate')
const closeButton = document.querySelector('.menu__close-icon');

export { popupImages, openPopup, popupImageOpenTitle, popupImg }


const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.menu__submit',
    activeButtonClass: 'form__button_active',
    inputErrorClass: 'form__input_error',
    errorClass: 'error-span_visible'
}

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

const listItem = new Section ({
    items: initialCards, 
    renderer: (data)=>{
    const addCard = new Card (data, '.card-template')
    const newCard = addCard.generateCard()
        listItem.addItem(newCard)

}
},  container)

listItem.renderer()

//Добавление новой карточки в DOM
function handleAddCard(data, template) {
    const card = new Card(data, template)
    const item = card.generateCard()
    return item
}
//Добавление карточки на страницу 
function createCard() {
    const data = {
        name: mestoName.value,
        link: mestoLink.value
    }
    const readyCard = handleAddCard(data, '.card-template')
    listItem.addItem(readyCard)
    formAddCard.reset();
}

//Обработчик карточки
formCardsElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newCardData = {name: mestoName.value, link: mestoLink.value} 
    const cardElement = createCard(newCardData)
    const closePopup= new Popup (popupCards)
    closePopup.close()
})

//Закрытие модального окна 
closeImagePopupButton.addEventListener('click', () => {
    const closePopup= new Popup (popupImg)
    closePopup.close()
});

//Открытие popup
function openPopup(popupElem) {
    popupElem.classList.remove('animation-close');
    popupElem.classList.add('popup_active');
    document.addEventListener('keydown', closeEsc)
};
function closeEsc(e) {
    if (e.keyCode === esc) {
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
        if (evt.currentTarget === evt.target) {
            closePopup(popupElem);
        }
    })
});

// Форма редактирования профиля
buttonEditProfile.addEventListener('click', () => {
    const openPopup= new Popup (popupEditProfile)
    openPopup.open();
    fillInFormInputs()

});
const formProfile = new FormValidator(settings, formElement)
formProfile.enableValidation()

document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
        const openPopup= new Popup (popupCards)
        openPopup.open();
    })
const formCards = new FormValidator(settings, formCardsElement)
formCards.enableValidation(settings, formCardsElement)
cardCloseButton.addEventListener('click', () => {
    const closePopup= new Popup (popupCards)
    closePopup.close()
})

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
    const form = popupElement.querySelector('.form');
    form.addEventListener('submit', evt => {
        submitHandler(evt);
        const closePopup= new Popup (popupEditProfile)
        closePopup.close();
    });

}

//Закрытие popup редактирования профиля 
closeButton.addEventListener('click', () => {
    const closePopup= new Popup (popupEditProfile)
    closePopup.close();
});

