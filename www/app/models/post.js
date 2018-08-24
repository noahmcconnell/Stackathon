export default class Answer {
    constructor(data) {
      this._id = data._id
      this.title = data.title
      this.content = data.content
      this.userId = data.userId
      this.timestamp = data.timestamp
      this.categoryId = data.categoryId
      this.correctAnswerId = data.correctAnswerId
    }
}