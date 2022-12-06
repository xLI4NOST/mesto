export default class UserInfo {
    constructor({profileName, profileJob, avatar}) {
        this._profileName = profileName;
        this._profileJob = profileJob;
        this._avatar= avatar
    }
    getUserInfo() {
        const userObject = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        };
        return userObject;
    }
    setUserInfo({ name, about, avatar }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
        this._avatar.src = avatar
    }
}