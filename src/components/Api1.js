class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
    // тело конструктора
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, { // this._baseUrl + '/users/me'
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
    // проверяем в консоли res (получение данных)
    // .then(res => { 
    //   console.log('res', res)
    // })
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, { // this._baseUrl + '/cards'
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

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
    .catch(console.log)
  }

  editAvatar(item) {
    console.log(item)
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.avatar
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addCard(item) {
    return fetch(`${this._baseUrl}/cards`, { 
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
        // likes: item.likes
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
        // проверяем в консоли res (получение данных)
    .then(res => { 
      console.log('api', res)
    })
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }
  // другие методы работы с API
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36',
  headers: {
    authorization: 'e94ad2de-db7c-4908-adb7-f6f038f8036f',
    'Content-Type': 'application/json'
  }
});