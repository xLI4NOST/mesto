import Api from "./Api"

export default class Card {
    constructor(data, templateSelector, handleCardClick, Like, popupConfirm, myId) {
        this._data = data 
        this._cardTitle = data.name
        this._cardImage = data.link
        this._templateSelector = templateSelector
        this.handleCardClick = handleCardClick
        this._popupConfirm = popupConfirm
        this._myId = myId
        this._Like = Like
    }
    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true)
        return cardTemplate
    }

    generateCard() {
        this._element = this._getTemplate()
        this._element.querySelector('.card__title').textContent = this._cardTitle
        this._element.querySelector('.card__image').alt = this._cardTitle
        this._element.querySelector('.card__image').src = this._cardImage
        this._buttonLike = this._element.querySelector('.card__button-like'); 
        this._buttonDelete = this._element.querySelector ('.card__button-delete');
        this._img = this._element.querySelector ('.card__image');
        this._likeInfo= this._element.querySelector('.like-info')
        this._setEventListiners();
        return this._element
    }

    _handleDeleteCard (){
        // this._element.remove()
        // this._element = null
        return this._data._id
    }
    // _handleLikeCard (){
    //     this._buttonLike.classList.add('card__button-like_active'); 
      
    // }
 
    _setEventListiners() {
        this._img
        .addEventListener('click', () => {
            this.handleCardClick(this._cardTitle, this._cardImage)
        })

    //     this._buttonLike.addEventListener('click', (evt) => { 
    //         this._handleLikeCard(evt); 
    //    }); 
       this._buttonDelete.addEventListener('click', ()=>{
           this._popupConfirm.open();
           this._popupConfirm.setEventListiners(this._data._id)
       })
       this._buttonLike.addEventListener ('click',()=>{

        this._Like(this._data._id)
    } )

        this._getInfoLikes()
        this._buttonDeleteOptions()
    }
    _getInfoLikes(){
        this._likeInfo.textContent = this._data.likes.length
        console.log();
        if (this._data.likes.includes(this._myId)=== true) {
            this._buttonLike.classList.add('card__button-like_active'); 
        } else{
            this._buttonLike.classList.remove('card__button-like_active'); 
        }
     
    }
    _buttonDeleteOptions(){
        if(this._data.owner._id != this._myId) {;
            this._buttonDelete.remove()
            this._buttonDelete = null;
        } 
        // else {
        //     this._buttonDelete.addEventListener('click', (evt) => {
        //         this._popupConfirm.open();
        //     });
        // }
    }
}
