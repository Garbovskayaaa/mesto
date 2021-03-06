class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
    // тело конструктора
  }

  // 1. Загрузка информации о пользователе с сервера
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 2. Загрузка карточек с сервера
  getCards() {
    return fetch(`${this._baseUrl}/cards`, { // this._baseUrl + '/cards'
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  getAppInfo() {
    return Promise.all([this.getCards(), this.getProfile()]);
  }

  // 3. Редактирование профиля
  editProfile(item) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
    // делает из объекта строку
      body: JSON.stringify({
        name: item.name,
        about: item.job
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 4. Добавление новой карточки
  addCard(item) {
    return fetch(`${this._baseUrl}/cards`, { 
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 7. Удаление карточки
  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 8. Cнятие лайка
  deleteLike(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 8. Постановка лайка
  addLike(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }

  // 9. Обновление аватара пользователя
  editAvatar(item) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.avatar
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36',
  headers: {
    authorization: 'e94ad2de-db7c-4908-adb7-f6f038f8036f',
    'Content-Type': 'application/json'
  }
});