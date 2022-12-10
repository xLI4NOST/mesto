import { avatar } from "../utils/constants"

export default class Api {
  constructor(options) {
    this.options = options
  }
  getMyId(){
    return fetch('https://nomoreparties.co/v1/cohort-54/users/me', {
      method: 'GET',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject (`Ошибка: ${res.status} ${res.status.text}`)
        }
      })
      .then ((response)=>{
        return response._id
    })
  }
  getUserData() {
    return fetch('https://nomoreparties.co/v1/cohort-54/users/me', {
      method: 'GET',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
      method: 'GET',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }


        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  changeUserInfo(name, about) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      });
  }
  addNewCard(name, link) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
      method: 'POST',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    }
    )
    .then (res => {
      if (res.ok){
        return res.json()
      }
    })
  }
  getLikeInfo(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
      method: 'GET',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }


        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
    setLikeCard(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards/cardId/likes', {
      method: 'PUT',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }


        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  changeUserAvatar(link){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar:`${link}`
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      });
  }

}