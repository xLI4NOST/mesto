import Card from "../src/components/Сard.js";
import FormValidator from "../src/components/FormValidator.js";
import Section from "../src/components/Section.js";
import Popup from "../src/components/Popup.js";
import PopupConfirm from "../src/components/PopupConfirm.js";
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
    likeScore,
} from "../src/utils/constants.js"
import { data } from "autoprefixer";


//API
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
        'Content-Type': 'application/json'
    }
});



api.getMyId()
    .then(id => {
        api.getInitialCards()
            .then((response) => {
                console.log(response);
                function createCard(data, template) {
                    const card = new Card(data, template, handleCardClick, like,deleteLike, popupConfirm, id)
                    const item = card.generateCard()
                    return item
                }

                const listItem = new Section({
                    items: response,
                    renderItems: (data) => {
                        const newCard = createCard(data, '.card-template')
                        listItem.addItem(newCard)
                    }
                }, container)

                listItem.renderItems()
            })
        function like(id) {
            api.setLikeCard(id)
        }
        function deleteLike (id){
            api.delteLikeCard(id)
        }

    });

api.getUserData()
    .then((response) => {
        const userInfo = new UserInfo({ profileName, profileJob, avatar });
        userInfo.setUserInfo(response);
    })



//Объявление попапов
//popup confrim
const popupConfirm = new PopupConfirm(document.querySelector('.popup_type_confirm'), (id) => {
    api.deleteMyCard(id)
})
popupConfirm.setEventListiners()
//popupCard
const popupCard = new PopupWithForm(popupCards, function (values) {
    //Добавить карточку на сервер, через api
    popupCard.loading(true)
    api.addNewCard(values.name, values.link)
    
    .then()
    .finally(()=>{
        popupCard.loading(false)
        popupCard.close()
    })
    
})
popupCard.setEventListiners()
//popupImg
const popupImg = new PopupWithImage(document.querySelector('.popup_type_image'));
popupImg.setEventListiners();
popupProfile
const userInfo = new UserInfo({ profileName, profileJob });
const knopka = document.querySelector ('.menu__button')
const popupProfile = new PopupWithForm(popupEditProfile, function (values) {
    //Подставить данные профиля на сервер, через api
    popupProfile.loading(true)
    api.changeUserInfo(values.name, values.about)
    .then ()
    .finally (()=>{
        popupProfile.loading(false)
    },
    this.close()  
    )
      
});
function renderResult (text){
    result.textContent = text
    error.textContent = ""
  }

function ux (button, load){
    if(load){
        button.textContent = button.textContent + ('...') 
    } else {

    }

}
popupProfile.setEventListiners();
const popupAvatar = new PopupWithForm(document.querySelector('.popup_type_avatar'), function (values) {
    //меняем аватар через API
    popupAvatar.loading(true)
    api.changeUserAvatar(values.link)
        .then()
        .finally (()=>{
            popupAvatar.loading(false)
            popupAvatar.close()
        })
    
})

popupAvatar.setEventListiners()

function renderLoading (isLoading){
    if (isLoading) {
        
    } else {
          spinner.classList.remove ('spinner_visible')
          content.classList.remove ('content_hidden')
    }
  }

//Открыть popupCards
document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
        popupCard.open()
    })

//Открытие картинки 
function handleCardClick(title, image) {
    popupImg.open(title, image)
}

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

//включение Валидации
const formAvatar = new FormValidator(settings, avatarForm)
formAvatar.enableValidation(settings, avatarForm)

// Открытие popupAvatar
document.querySelector('.profile__avatar-edit-button').addEventListener('click', () => {
    popupAvatar.open()
})


