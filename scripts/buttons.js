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
