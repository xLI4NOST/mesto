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
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popup)
        closePopup(popupCards)
        closePopup(popupImg)
    }
})
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menu)|| e.composedPath().includes(buttonEditProfile) 
    || e.composedPath().includes(buttonAdd) || e.composedPath().includes(formCardsElement) 
    || e.composedPath().includes(menuTitle) || e.composedPath().includes(menuCardTitle) || e.composedPath().includes(popupImages)
    if (!click) {
        closePopup(popup)
        closePopup(popupCards)
    }
    console.log(click);
})