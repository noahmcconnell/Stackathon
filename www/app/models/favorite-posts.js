export default class Answer {
    constructor(data) {
      this._id = data._id
      this.goalId = data.goalId
      this.userId = data.userId
    }
}