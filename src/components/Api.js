export default class Api {
    constructor (options){
        this.options = options
    }
    getUserData (){
        return fetch ('https://nomoreparties.co/v1/cohort-54/users/me',{
            headers:{
                authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
            }
        }
        )
        .then (res=> {
          if (res.ok){
            return res.json()
          }
        })
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
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
}