export default class UserInfo {
    constructor({profileName, profileJob}) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    }
    getUserInfo() {
        const userObject = {
            name: this._profileName.textContent,
            about: this._profileJob.textContent
        };
        return userObject;
    }
    setUserInfo({ name, about }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;

    }
}