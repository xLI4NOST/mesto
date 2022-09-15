const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const editButton = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const saveButton = menu.querySelector('.menu__button');
const closeButton = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const like = document.querySelector('.card__button-like');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.form');
const popupCards = document.querySelector('.popup-cards');
const addButton = document.querySelector(".profile__add-button");
const closeCardsButton = document.querySelector('.menu__card-close');
const imageCard = document.querySelector ('.form__input_type_link')
const titleCard = document.querySelector ('form__input_type_text')
// const cardTemplate = document.querySelector('#card-template').content;
const container = document.querySelector('.elements');
const cardCreate = document.querySelector('.card_create');
// const cardTemplate = document.querySelector ('#card-template').content;
// const cardCreate = document.querySelector ('.card_create');

function addCard() {
    const template = document.querySelector('#card-template')
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector ('.card').cloneNode(true)
    cardElement.querySelector ('.card__image').content = imageCard.value
    cardElement.querySelector ('.card__title').textContent = titleCard.value
    container.append ('cardElement');
}

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

cardCreate.addEventListener('click', addCard)
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

