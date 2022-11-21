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
} from "../src/components/src/components.js"




//Объявление попапов

//popupCard
const popupCard = new PopupWithForm(popupCards, function (values) {
    renderCard(values)
    popupCard.close()
  })
popupCard.setEventListiners()
//popupImg
const popupImg = new PopupWithImage(document.querySelector('.popup_type_image'));
popupImg.setEventListiners();
//popupProfile
const userInfo = new UserInfo({ profileName, profileJob });
const popupProfile = new PopupWithForm(popupEditProfile, function (values) {
    userInfo.setUserInfo(values);
    this.close();
});
popupProfile.setEventListiners();
///////

const listItem = new Section({
    items: initialCards,
    renderItems: (data) => {
        const newCard = createCard(data, '.card-template' )
        listItem.addItem(newCard)
    }
}, container)

listItem.renderItems()
//Открыть popupCards
document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
        popupCard.open()
    })

//Добавление новой карточки в DOM
function createCard(data, template) {
    const card = new Card(data, template, handleCardClick)
    const item = card.generateCard()
    return item
}

//Добавление карточки на страницу 
function renderCard(values) {
    const readyCard = createCard(values, '.card-template')
    listItem.addItem(readyCard)
}

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
    popupCard.close()
})

//Закрытие popup редактирования профиля 
closeButton.addEventListener('click', () => {
    popupProfile.close()
});

