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
//Закрытие попапов на Esc
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popup)
        closePopup(popupCards)
        closePopup(popupImg)
    }
})
