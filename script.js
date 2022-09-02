let page = document.querySelector ('.page')
let wrapper = page.querySelector ('.wrapper')
let editButton = wrapper.querySelector ('.profile__edit-button')
let menu = document.querySelector ('.menu')
let saveButton = menu.querySelector ('.menu__button')
let closeButton = menu.querySelector ('.close-icon')
let overlay = page.querySelector ('.overlay')

function addMenu () {
menu.classList.add ('menu-active');
overlay.classList.add ('overlay_active')
}

function closeMenu () {
    menu.classList.remove ('menu-active');
    overlay.classList.remove ('overlay_active')
}

function editProfile () {
let textName = document.querySelector ('.menu__name').value
document.querySelector ('.profile__name').innerHTML = textName
let textSubtitle = document.querySelector ('.menu__subtitle').value
document.querySelector ('.profile__subtitle').innerHTML = textSubtitle
}

closeButton.addEventListener ('click', closeMenu);
editButton.addEventListener ('click', addMenu);
saveButton.addEventListener ('click', closeMenu);
saveButton.addEventListener ('click', editProfile)

