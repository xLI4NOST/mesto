import { data } from "autoprefixer";
import Popup from "./Popup.js";
export default class PopupConfirm extends Popup{
    constructor(popupSelector, handleSubmit){
        super(popupSelector)
        this._handleSubmit = handleSubmit
    }

    open(){
        super.open()
    }

    setEventListiners(id){
        super.setEventListiners()
        this._submitButton = document.querySelector ('.menu-confirm__button').addEventListener ('click',  ()=>{
            this._handleSubmit(id)
            this.close()
        } )
    }
    close(){
        super.close()
    }

}