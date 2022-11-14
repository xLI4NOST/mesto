import {profileNameText, profileSubtitleText} from "./index.js"
export default class UserInfo {
    constructor ({profileName, profileJob}){
        this._profileName = profileNameText
        this._profileJob = profileSubtitleText
    }
    getUserInfo(){
        const userObject ={
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
        return userObject
        
    }
    setUserInfo ({name, job}){
    this._name.textContent = name
    this._job.textContent = job        
    }
}