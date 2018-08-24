export default class Answer {
    constructor(data) {
      this._id = data._id
      this.user = data.user
      this.post = data.post
      this.direction = data.direction
    }
}