<<<<<<< HEAD
function handleSubmitProfileForm(evt) {
    evt.preventDefault()
    profileNameText.textContent = textName.value;
    profileSubtitleText.textContent = textSubtitle.value;
};
=======
>>>>>>> c2b395face0f2a3baea78a59d7bd13b6ab42e2bd
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
<<<<<<< HEAD
});
=======
});
//Закрытие попапов на Esc
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popup)
        closePopup(popupCards)
        closePopup(popupImg)
    }
})
>>>>>>> c2b395face0f2a3baea78a59d7bd13b6ab42e2bd
