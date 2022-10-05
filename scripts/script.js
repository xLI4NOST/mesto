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
function handleSubmit(evt) {
    evt.preventDefault()
    const item = renderItem(mestoName.value, mestoLink.value);
    container.prepend(item);

}
// Создать обработчики для кнопок
function setListenersForButtons(element) {
    const cardDeleteButton = element.querySelector('.card__button-delete');
    cardDeleteButton.addEventListener('click', handleDelete);
    const cardLikeButton = element.querySelector('.card__button-like');
    cardLikeButton.addEventListener('click', handleLike);
    const cardScreen = element.querySelector('.card__image');
    cardScreen.addEventListener('click', handleOpenCardImagePreview);
}


// Добавление модального окна
const popupImg = document.querySelector('.popup_type_image');
const popupImages = popupImg.querySelector('.image-container__open-image');
const popupImageOpenTitle = popupImg.querySelector('.image-container__title');
function handleOpenCardImagePreview(cardData) {
    popupImageOpenTitle.textContent = cardData.currentTarget.alt;
    popupImages.alt = cardData.currentTarget.alt;
    popupImages.src = cardData.currentTarget.currentSrc;
    openPopup(popupImg);
}

//Удаление карточки
function handleDelete(event) {
    const currentCard = event.target.closest('.card');
    currentCard.remove()
};
// кнопка лайка 
function handleLike(event) {
    const currentLike = event.target.closest('.card__button-like')
    currentLike.classList.toggle('card__button-like_active')
};

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
cardCloseButton.addEventListener('click', () => {
    closePopup(popupCards)
});
buttonClose.addEventListener('click', () => {
    closePopup(popup)
});
buttonEditProfile.addEventListener('click', () => {
    openPopup(popup);
});
formElement.addEventListener('submit', handleSubmitProfileForm);
buttonAdd.addEventListener('click', () => {
    openPopup(popupCards);
});

// Сабмит
formCardsElement.addEventListener('submit', handleSubmit);


const closeImagePopupButton = document.querySelector('.image-container__close-icon')
closeImagePopupButton.addEventListener('click', () => {
    closePopup(popupImg)
});


//Ошибки

const showError = (input) => {
    input.classList.add ('form__error_visible')
};
const hideError = (input) => {
    input.classList.remove ('form__error_visible')
}
//Валидация
const formCards = document.forms.formCards;
const formProfile =  document.forms.formProfile
function isValid (input){
    
}
//вызов ошибки
function inValid (input){
const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
isValid(input)
 errorSpan.textContent = input.validationMessage;
}
function setSubmitButton (button, state){
if (state) {
button.removeAttribute ('disabled')
button.classList.add ('form__button_active')
} else{
    button.setAttribute ('disabled', true)
    button.classList.remove ('form__button_active')
}
}


function handleValidateInput (evt){
const currentForm = evt.currentTarget;
const submitButton = currentForm.querySelector('.menu__button');
inValid(evt.target);
if(currentForm.checkValidity()){
    setSubmitButton(submitButton, true)
} else{
    setSubmitButton(submitButton, false)
    
}
}



//Проверка форм после сабмита
function sendForm (evt) {
    evt.preventDefault();
    const currentForm = evt.target;

    if (currentForm.checkValidity()){
        closePopup(popup)
        closePopup(popupCards)
        currentForm.reset();
    } else {
        console.log('Ты пидарас');
    }
}

formCards.addEventListener ('submit', sendForm);
formCards.addEventListener ('input', handleValidateInput);

formProfile.addEventListener ('submit', sendForm);
formProfile.addEventListener ('input', handleValidateInput);





// const checkInputValidity = () =>{
//     if (!textName.validity.valid){
//         showError(textName)
//     } else{
//         hideError(textName)
//     }
// }


// textName.addEventListener ('input', function(){
//     checkInputValidity()
// })