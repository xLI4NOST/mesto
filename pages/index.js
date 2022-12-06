import Card from "../src/components/Сard.js";
import FormValidator from "../src/components/FormValidator.js";
import Section from "../src/components/Section.js";
import Popup from "../src/components/Popup.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";
import Api from "../src/components/Api.js";
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
    initialCards,
    avatarForm,
    profileImg,
    avatarInput,
    avatar,
} from "../src/utils/constants.js"

//API
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
      authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
      'Content-Type': 'application/json'
    }
  }); 
api.getInitialCards()
// .then((result) => {
//     console.log(result);
//   }); 
.then ((response)=>{
    const listItem = new Section({
        items: response,
        renderItems: (data) => {
            const newCard = createCard(data, '.card-template' )
            listItem.addItem(newCard)
        }
    }, container)
    
    listItem.renderItems()
})


    api.getUserData()
    .then( (response)=>{
        console.log(response);
        const userInfo = new UserInfo({ profileName, profileJob, avatar });
        userInfo.setUserInfo(response);
    })



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
popupProfile
const userInfo = new UserInfo({ profileName, profileJob });
const popupProfile = new PopupWithForm(popupEditProfile, function (values) {
    userInfo.setUserInfo(values);
    this.close();
});
popupProfile.setEventListiners();
popupAvatar//
const popupAvatar = new PopupWithForm (document.querySelector ('.popup_type_avatar'), avatarForm)
popupAvatar.setEventListiners()
///////


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

//включение Валидации
const formProfile = new FormValidator(settings, formElement)
formProfile.enableValidation()

//включение Валидации
const formCards = new FormValidator(settings, formCardsElement)
formCards.enableValidation(settings, formCardsElement)
cardCloseButton.addEventListener('click', () => {
    popupCard.close()
})
//включение Валидации
const formAvatar = new FormValidator (settings, avatarForm)
formAvatar.enableValidation(settings, avatarForm)

//Закрытие popup редактирования профиля 
closeButton.addEventListener('click', () => {
    popupProfile.close()
});
// Открытие popupAvatar
document.querySelector ('.profile__avatar-edit-button').addEventListener('click', ()=>{
    popupAvatar.open()
})

document.querySelector('.form-avatar__close-icon').addEventListener ('click', ()=>{
    popupAvatar.close()
})

document.querySelector ('.menu-avatar__button').addEventListener ('click', (evt)=>{
evt.preventDefault()
profileImg.src = avatarInput.value
popupAvatar.close()
})

