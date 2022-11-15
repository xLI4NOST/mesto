export default class UserInfo {
    constructor({profileName, profileJob}) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    }
    getUserInfo() {
        const userObject = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        };
        return userObject;
    }
    setUserInfo({ name, job }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
}