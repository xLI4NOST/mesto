(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardTitle=e.name,this._cardImage=e.link,this._templateSelector=n,this.handleCardClick=r,this._cardOwnerId=o,this._myId=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__title").textContent=this._cardTitle,this._element.querySelector(".card__image").alt=this._cardTitle,this._element.querySelector(".card__image").src=this._cardImage,this._buttonLike=this._element.querySelector(".card__button-like"),this._buttonDelete=this._element.querySelector(".card__button-delete"),this._img=this._element.querySelector(".card__image"),this._likeInfo=this._element.querySelector(".like-info"),this._setEventListiners(),this._element}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeCard",value:function(){this._buttonLike.classList.toggle("card__button-like_active")}},{key:"_setEventListiners",value:function(){var e=this;this._img.addEventListener("click",(function(){e.handleCardClick(e._cardTitle,e._cardImage)})),this._buttonLike.addEventListener("click",(function(t){e._handleLikeCard(t)})),this._getInfoLikes(),this._buttonDeleteOptions()}},{key:"_getInfoLikes",value:function(){this._likeInfo.textContent=this._cardOwnerId.likes.length}},{key:"_buttonDeleteOptions",value:function(){this._cardOwnerId.owner._id!=this._myId&&this._buttonDelete.remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._activeButtonClass=t.activeButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,o;return t=e,(o=[{key:"_updateInputValidation",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,e.checkValidity?this._closeError(e):(e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass))}},{key:"_closeError",value:function(e){e.classList.remove(this._inputErrorClass)}},{key:"_updateSubmitButton",value:function(){this._form.checkValidity()?(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.add(this._activeButtonClass)):this.disableSubmitButton()}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.remove(this._activeButtonClass)}},{key:"_setFormEventListeners",value:function(){var e,t=this,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw c}}}}(this._inputList);try{var o=function(){var n=e.value;n.addEventListener("input",(function(){t._updateSubmitButton(),t._updateInputValidation(n)}))};for(r.s();!(e=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}this._form.addEventListener("reset",(function(e){t.disableSubmitButton()}))}},{key:"enableValidation",value:function(){this._setFormEventListeners()}}])&&r(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderItems;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderItems=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderItems(t)}))}},{key:"addItem",value:function(e){this._containerSelector.append(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._closeIcon=document.querySelector(".menu__close-icon")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.remove("animation-close"),this._popupSelector.classList.add("popup_active")}},{key:"close",value:function(){var e=this;setTimeout((function(){return e._popupSelector.classList.remove("popup_active")}),500),this._popupSelector.classList.add("animation-close")}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.close()}},{key:"setEventListiners",value:function(){var e=this;document.addEventListener("keydown",(function(t){e._handleEscClose(t)})),this._popupSelector.addEventListener("click",(function(t){t.currentTarget===t.target&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).popupImageOpenTitle=t._popupSelector.querySelector(".image-container__title"),t.popupImageOpenLink=t._popupSelector.querySelector(".image-container__open-image"),t}return t=c,(n=[{key:"open",value:function(e,t){this.popupImageOpenLink.src=t,this.popupImageOpenTitle.textContent=e,this.popupImageOpenLink.alt=e,f(h(c.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._submitForm=t,n._form=n._popupSelector.querySelector(".form"),n._formData=n._popupSelector.querySelectorAll(".form__input"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._formData.forEach((function(t){e[t.name]=t.value})),console.log(e),e}},{key:"setEventListiners",value:function(){var e=this;v(w(c.prototype),"setEventListiners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"open",value:function(e){e&&this._formData.forEach((function(t){t.value=e[t.name]})),v(w(c.prototype),"open",this).call(this)}},{key:"close",value:function(){v(w(c.prototype),"close",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.profileName,r=t.profileJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileJob=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._profileName.textContent=t,this._profileJob.textContent=n}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n;return t=e,(n=[{key:"getMyId",value:function(){return fetch("https://nomoreparties.co/v1/cohort-54/users/me",{method:"GET",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e._id}))}},{key:"getUserData",value:function(){return fetch("https://nomoreparties.co/v1/cohort-54/users/me",{method:"GET",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9"}}).then((function(e){if(e.ok)return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards",{method:"GET",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeUserInfo",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-54/users/me",{method:"PATCH",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){if(e.ok)return e.json()}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards",{method:"POST",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then((function(e){if(e.ok)return e.json()}))}},{key:"getLikeInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards",{method:"GET",headers:{authorization:"33d68f8a-3b24-4840-804d-6b0ee1010dc9"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q=document.querySelector(".page"),I=q.querySelector(".wrapper").querySelector(".profile__edit-button"),P=q.querySelector(".popup_type_profile"),T=(document.querySelector(".menu"),document.querySelector(".form__input_type_name"),document.querySelector(".form__input_type_job"),document.querySelector(".profile__name")),B=document.querySelector(".profile__subtitle"),R=P.querySelector(".form"),D=document.querySelector(".popup_type_cards"),x=document.querySelector(".menu__card-close"),A=document.querySelector(".elements"),N=(document.querySelector(".form-cards__input_type_text"),document.querySelector(".form-cards__input_type_link"),document.querySelector(".form-cards")),U=(D.querySelector(".form"),document.querySelector(".image-container__close-icon")),V=document.querySelector(".menu__close-icon"),J=document.querySelector(".form-avatar"),z=document.querySelector(".profile__avatar"),F=document.querySelector(".form-avatar__input"),G=document.querySelector(".profile__avatar"),M=(document.querySelectorAll(".like-info"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".menu__submit",activeButtonClass:"form__button_active",inputErrorClass:"form__input_error",errorClass:"error-span_visible"}),H=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"c56e30dc-2883-4270-a59e-b2f7bae969c6","Content-Type":"application/json"}});H.getMyId().then((function(e){H.getInitialCards().then((function(n){var r=new c({items:n,renderItems:function(n){var o=function(n,r){return new t(n,".card-template",Y,n,e).generateCard()}(n);r.addItem(o)}},A);r.renderItems()}))})),H.getUserData().then((function(e){new j({profileName:T,profileJob:B}).setUserInfo(e),G.src=e.avatar}));var $=new O(D,(function(e){H.addNewCard(e.name,e.link),$.close()}));$.setEventListiners();var K=new m(document.querySelector(".popup_type_image"));K.setEventListiners();var Q=new j({profileName:T,profileJob:B}),W=new O(P,(function(e){H.changeUserInfo(e.name,e.about),this.close()}));W.setEventListiners();var X=new O(document.querySelector(".popup_type_avatar"),J);function Y(e,t){K.open(e,t)}X.setEventListiners(),document.querySelector(".profile__add-button").addEventListener("click",(function(){$.open()})),U.addEventListener("click",(function(){K.close()})),I.addEventListener("click",(function(){W.open(Q.getUserInfo())})),new o(M,R).enableValidation(),new o(M,N).enableValidation(M,N),x.addEventListener("click",(function(){$.close()})),new o(M,J).enableValidation(M,J),V.addEventListener("click",(function(){W.close()})),document.querySelector(".profile__avatar-edit-button").addEventListener("click",(function(){X.open()})),document.querySelector(".form-avatar__close-icon").addEventListener("click",(function(){X.close()})),document.querySelector(".menu-avatar__button").addEventListener("click",(function(e){e.preventDefault(),z.src=F.value,X.close()}))})();