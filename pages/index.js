import Card from "../src/components/Сard.js";
import FormValidator from "../src/components/FormValidator.js";
import Section from "../src/components/Section.js";
import Popup from "../src/components/Popup.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js"
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
} from "../src/components/Utils.js"




//Объявление попапов

//popupCard
const popupCard = new PopupWithForm(popupCards, formCardsElement)
//popupImg
const popupImg = new PopupWithImage(document.querySelector('.popup_type_image'));
popupImg.setEventListiners();
//popupProfile
const userInfo = new UserInfo({ profileName, profileJob });
const popupProfile = new PopupWithForm(popupEditProfile, function (evt, values) {
    userInfo.setUserInfo(values);
    this.close();
});
popupProfile.setEventListiners();
///////

const listItem = new Section({
    items: initialCards,
    renderItems: (data) => {
        const newCard = handleAddCard(data, '.card-template' )
        listItem.addItem(newCard)
    }
}, container)

listItem.renderItems()
//Открыть popupCards
const values = popupCard._getInputValues()
document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
        popupCard.open(values)
    })

//Добавление новой карточки в DOM
function handleAddCard(data, template) {
    const card = new Card(data, template, handleCardClick)
    const item = card.generateCard()
    return item
}

//Добавление карточки на страницу 
function createCard() {
    const values = popupCard._getInputValues()
    const readyCard = handleAddCard(values, '.card-template')
    listItem.addItem(readyCard)
}

//Обработчик карточки
formCardsElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newCardData = { name: mestoName.value, link: mestoLink.value }
    const cardElement = createCard(newCardData)
    popupCard.close()
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


const formCards = new FormValidator(settings, formCardsElement)
formCards.enableValidation(settings, formCardsElement)
cardCloseButton.addEventListener('click', () => {
    const closePopup = new PopupWithForm(popupCards, formCardsElement)
    closePopup.close()
})

//Закрытие popup редактирования профиля 
closeButton.addEventListener('click', () => {
    popupProfile.close()
});

