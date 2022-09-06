const page = document.querySelector('.page');
const wrapper = page.querySelector('.wrapper');
const editButton = wrapper.querySelector('.profile__edit-button');
const menu = document.querySelector('.menu');
const saveButton = menu.querySelector('.menu__button');
const closeButton = menu.querySelector('.menu__close-icon');
const popup = page.querySelector('.popup');
const like = document.querySelectorAll('.card__button-like');
const textName = document.querySelector('.form__input_type_name');
const textSubtitle = document.querySelector('.form__input_type_job');
const profileNameText = document.querySelector('.profile__name');
const profileSubtitleText = document.querySelector('.profile__subtitle');
const formElement = page.querySelector('.profile__info');

function openEditProfilePopup() {
    popup.classList.add('popup_active')
}

function closeEditProfilePopup() {
    popup.classList.remove('popup_active')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameText.textContent = textName.value
    profileSubtitleText.textContent = textSubtitle.value
    closeEditProfilePopup()
}

// function likeActive() {
//     like.forEach( item => { item.classList.toggle('card__button-like_active')})
// }

// like.forEach( item => { item.addEventListener('click', likeActive ) } )


// Жаль, что в практикуме нет кнопки лайка для ревью:) Спасибо вам большое за подробные объяснения моих ошибок, очень понятно имотивирует! Постараюсь оправдать!


closeButton.addEventListener('click', closeEditProfilePopup);
editButton.addEventListener('click', openEditProfilePopup);
saveButton.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);

