//Принимает в конструктор два элемента: элемент имени пользователя и информации о себе.
export default class UserInfo {
  constructor({nameProfile, jobProfile, avatarProfile}) {
    this._name = nameProfile;
    this._job = jobProfile;
    this._avatar = avatarProfile;
  }

// публичный метод getUserInfo, возвращает объект с данными пользователя. 
// проставляются в открытой форме
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
// публичный метод setUserInfo, принимает новые данные пользователя
// добавляет их на страницу.
  setUserInfo(name, job) {
    this._name.textContent = name
    this._job.textContent = job
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}