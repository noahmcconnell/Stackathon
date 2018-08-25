export default class User {
    constructor(data) {
      this._id = data._id
      this.username = data.username
      this.password = data.password
    }
}