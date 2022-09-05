const page = document.querySelector('.page')
const wrapper = page.querySelector('.wrapper')
const editButton = wrapper.querySelector('.profile__edit-button')
const menu = document.querySelector('.menu')
const saveButton = menu.querySelector('.menu__button')
const closeButton = menu.querySelector('.menu__close-icon')
const popup = page.querySelector('.popup')
const like = document.querySelectorAll('.card__button-like')
const textName = document.querySelector('.menu__name')
const textSubtitle = document.querySelector('.menu__subtitle')
const profile__name = document.querySelector ('.profile__name')
const profile__subtitle = document.querySelector('.profile__subtitle')

function addMenu() {
    popup.classList.add('popup_active')
}

function closeMenu() {
    popup.classList.remove('popup_active')
}

function editProfile() {
    textName.value
    profile__name.textContent = textName.value
    textSubtitle.value
    profile__subtitle.textContent = textSubtitle.value
}

// function likeActive() {
//     like.forEach( item => { item.classList.toggle('card__button-like_active')})
// }

// like.forEach( item => { item.addEventListener('click', likeActive ) } )
closeButton.addEventListener('click', closeMenu);
editButton.addEventListener('click', addMenu);
saveButton.addEventListener('click', closeMenu);
saveButton.addEventListener('click', editProfile)

