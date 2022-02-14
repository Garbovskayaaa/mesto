export default class UserInfo {
  constructor({nameProfile, jobProfile}) {
    this._name = nameProfile;
    this._job = jobProfile;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._job.textContent = userInfo.about;
  }
}