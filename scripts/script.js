const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const editButton = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const saveButton = menu.querySelector('.menu__button');
const closeButton = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.form');
const popupCards = document.querySelector('.popup-cards');
const addButton = document.querySelector(".profile__add-button");
const closeCardsButton = document.querySelector('.menu__card-close');

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
const container = document.querySelector('.elements')
const cardTemplate = document.querySelector('.card-template').content
const formButton = document.querySelector('.card_create')
function render() {
    initialCards.forEach(renderItem);

}
// функция рендеренга
function renderItem(cardData) {
    const newCard = cardTemplate.cloneNode(true) //Клоним кароточку
    const cardTitle = newCard.querySelector('.card__title')
    const cardImage = newCard.querySelector('.card__image')
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name
    cardTitle.textContent = cardData.name;
    //Создать обработчики для всех кнопок
    setListenersForButtons(newCard);
    container.append(newCard);
}
//Для кнопок
function setListenersForButtons(element) {
    const deleteCardButton = element.querySelector('.card__button-delete')
    deleteCardButton.addEventListener ('click', handleDelete)
    const cardLikeButton = element.querySelector('.card__button-like')
    cardLikeButton.addEventListener ('click', handleLike)
}
//Удаление карточки
function handleDelete (event){
    const currentCard = event.target.closest ('.card')
    currentCard.remove()
}
// кнопка лайка 
function handleLike (event){
    const currentLike = event.target.closest ('.card__button-like')
    currentLike.classList.toggle ('card__button-like_active')
}
//Добавление карточки 

// function handAdd () {
//     const mesto = document.querySelector ('.form__input_type_text')
//     const mestoLink = document.querySelector ('.form__input_type_link')
//     const newCard = cardTemplate.cloneNode(true)
//     const cardTitle = newCard.querySelector('.card__title')
//     const cardImage = newCard.querySelector('.card__image')
//     cardImage.src = mestoLink.textContent;
//     cardImage.alt = mestoLink.textContent;
// }
// const cardAddButton = popupCards.querySelector ('.card_create')
// cardAddButton.addEventListener ('click', handAdd)
render()




function openEditProfilePopup() {
    popup.classList.add('popup_active');
    textName.value = profileNameText.textContent;
    textSubtitle.value = profileSubtitleText.textContent;
}

function openEditCardsPopup() {
    popupCards.classList.add('popup-cards_active');
}

function closeEditProfilePopup() {
    popup.classList.remove('popup_active');
}

function closeEditCardsPopup() {
    popupCards.classList.remove('popup-cards_active');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
    closeEditProfilePopup();
}
// cardCreate.addEventListener ('click', addCard)
closeCardsButton.addEventListener('click', closeEditCardsPopup)
closeButton.addEventListener('click', closeEditProfilePopup);
editButton.addEventListener('click', openEditProfilePopup);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openEditCardsPopup);

// like.addEventListener ('click', function (evt){
//     evt.target.classList.toggle ('card__button-like_active')
// })



// songElement.querySelector('.song__like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle ('song__like_active')

