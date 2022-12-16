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
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
        'Content-Type': 'application/json'
    }
});


// Promise.all([getUserData(), getInitialCards()])
// // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
//   .then(([userData, cards]) => {
//     console.log(cards)
//       // и тут отрисовка карточек
//   })
//   .catch(err => {
//     // тут ловим ошибку
//   });


api.getUserData()
    .then((response) => {
        userInfo.setUserInfo(response);
        userInfo.serverInfo(response)
    })

api.getInitialCards()
    .then((response) => {
        const listItem = new Section({
            items: response,
            renderItems: (data) => {
                const newCard = createCard(data, '.card-template')
                listItem.addItem(newCard)
            }
        }, container)
        listItem.renderItems()
    })

function like(likeButton, cardId) {
    api.setLikeCard(cardId)
        .then(() => {
            likeButton.classList.add('card__button-like_active')
        })
}
function deleteLike(likeButton, cardId) {
    api.delteLikeCard(cardId)
        .then(() => {
            likeButton.classList.remove('card__button-like_active')
        })
}

function handleDeleteCard(card) {
    popupConfirm.getCurrentCard(card._data._id);
    popupConfirm.open();
}

//Отрисуй карточку в реальном времени
function createCard(data, template) {
    const card = new Card(data, template, handleCardClick, like, deleteLike, handleDeleteCard, userInfo.id)
    const item = card.generateCard()
    return item
}

//Объявление попапов

//popup confrim
const popupConfirm = new PopupConfirm(document.querySelector('.popup_type_confirm'), (id) => {
    api.deleteMyCard(id)
        .then(popupConfirm.close())
})
popupConfirm.setEventListiners()
//popupCard
const popupCard = new PopupWithForm(popupCards, function (values) {
    //Добавить карточку на сервер, через api
    popupCard.loading(true)
    api.addNewCard(values.name, values.link)
        .then(
            (res) => {
                const newCard = createCard(res, '.card-template')
                container.prepend(newCard)
                popupCard.close()
            }
        )
        .finally(() => {
            popupCard.loading(false)
        })
})
popupCard.setEventListiners()

//popupImg
const popupImg = new PopupWithImage(document.querySelector('.popup_type_image'));
popupImg.setEventListiners();
// popupProfile
const userInfo = new UserInfo({ profileName, profileJob, avatar });
const popupProfile = new PopupWithForm(popupEditProfile, function (values) {
    //Подставить данные профиля на сервер, через api
    popupProfile.loading(true)
    api.changeUserInfo(values.name, values.about)
        .then(api.getUserData()
            .then((response) => {
                const userInfo = new UserInfo({ profileName, profileJob, avatar });
                userInfo.setUserInfo(response);
            }))
        .finally(() => {
            popupProfile.loading(false)
        },
            this.close()
        )
});

popupProfile.setEventListiners();
const popupAvatar = new PopupWithForm(document.querySelector('.popup_type_avatar'), function (values) {
    //меняем аватар через API
    popupAvatar.loading(true)
    api.changeUserAvatar(values.link)
        .then((res)=>{
            const userInfo = new UserInfo({ profileName, profileJob, avatar });
            userInfo.setUserInfo(res);
        })
        .finally(() => {
            popupAvatar.loading(false)
            popupAvatar.close()
        })
})
popupAvatar.setEventListiners()

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


