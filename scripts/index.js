import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import Section from "./section.js";
import Popup from "./popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js"
import '../pages/index.css'
import {
    page,
    wrapper,
    buttonEditProfile,
    popupEditProfile,
    menu,
    textName,
    textSubtitle,
    profileName,
    profileJob,
    formElement,
    popupCards,
    cardCloseButton,
    container,
    mestoName,
    mestoLink,
    formCardsElement,
    formAddCard,
    ImageclosePopupButton,
    closeButton,
    settings,
    initialCards
} from "./utils.js"

const popupImg = new PopupWithImage(document.querySelector('.popup_type_image'));
popupImg.setEventListiners();

const userInfo = new UserInfo({ profileName, profileJob });
const popupProfile = new PopupWithForm(popupEditProfile, function (evt, values) {
    userInfo.setUserInfo(values);
    this.close();
});
popupProfile.setEventListiners();

// popupImg.open('Image title', 'https://img');
const listItem = new Section({
    items: initialCards,
    renderer: (data) => {
        const newCard = handleAddCard(data, '.card-template' )
        listItem.addItem(newCard)
    }
}, container)

listItem.renderer()

//Добавление новой карточки в DOM
function handleAddCard(data, template) {
    const card = new Card(data, template, handleCardClick)
    const item = card.generateCard()
    return item
}

//Добавление карточки на страницу 
function createCard() {
    const data = new PopupWithForm (popupCards, formCardsElement)
    const values = data._getInputValues()
    console.log(values);
    const readyCard = handleAddCard(values, '.card-template')
    listItem.addItem(readyCard)
}

//Обработчик карточки
formCardsElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newCardData = { name: mestoName.value, link: mestoLink.value }
    const cardElement = createCard(newCardData)
    const closePopup = new PopupWithForm(popupCards, formCardsElement)
    closePopup.close()
})

//Открытие картинки 
function handleCardClick(title, image) {
    popupImg.open(title, image)
}

//Закрытие модального окна 
ImageclosePopupButton.addEventListener('click', () => {
    popupImg.close()
});


// Форма редактирования профиля
buttonEditProfile.addEventListener('click', () => {
    popupProfile.open(userInfo.getUserInfo());
});
const formProfile = new FormValidator(settings, formElement)
formProfile.enableValidation()

document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
        const openPopup = new Popup(popupCards)
        openPopup.open();
    })
const formCards = new FormValidator(settings, formCardsElement)
formCards.enableValidation(settings, formCardsElement)
cardCloseButton.addEventListener('click', () => {
    const closePopup = new Popup(popupCards)
    closePopup.close()
})

//Закрытие popup редактирования профиля 
closeButton.addEventListener('click', () => {
    const closePopup = new Popup(popupEditProfile)
    closePopup.close();
});

