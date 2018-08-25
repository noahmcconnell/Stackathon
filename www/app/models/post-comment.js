export default class Comment {
    constructor(data) {
      this._id = data._id
      this.content = data.content
      this.userId = data.userId
      this.timestamp = data.timestamp
      this.postId = data.postId
      this.voteTotal = data.voteTotal
    }
}