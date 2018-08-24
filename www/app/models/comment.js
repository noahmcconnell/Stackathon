export default class Comment {
    constructor(data) {
      this._id = data._id
      this.userId = data.userId
      this.timestamp = data.timestamp
      this.postId = data.postId
    }
  }