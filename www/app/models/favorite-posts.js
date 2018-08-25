export default class FavoritePost {
    constructor(data) {
      this._id = data._id
      this.goalId = data.goalId
      this.userId = data.userId
    }
}